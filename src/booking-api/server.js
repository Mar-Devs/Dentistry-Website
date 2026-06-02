import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import twilio from "twilio";
import "dotenv/config";

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP_FROM, // whatsapp:+ (sandbox)
  CLINIC_WHATSAPP_TO,   // whatsapp:+ (must have joined sandbox)
  TURNSTILE_SECRET,     // Cloudflare Turnstile secret key (server-only)
  ALLOWED_ORIGINS,      // comma-separated origins (Netlify now, Hostinger later)
  PORT = 3000,
} = process.env;

// Fail fast if a critical secret is missing
for (const [k, v] of Object.entries({
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_WHATSAPP_FROM,
  CLINIC_WHATSAPP_TO,
  TURNSTILE_SECRET,
})) {
  if (!v) {
    console.error(`Missing env var: ${k}`);
    process.exit(1);
  }
}

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const app = express();

app.set("trust proxy", 1); // Railway runs behind a proxy — needed for real client IPs

app.use(helmet()); // secure headers

// CORS locked to your domain(s) only
const allowList = (ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // health checks / curl (no Origin header)
      if (allowList.includes(origin)) return cb(null, true);
      return cb(new Error("CORS"));
    },
    methods: ["POST"],
  })
);

app.use(express.json({ limit: "8kb" })); // a booking is tiny; reject bloated payloads

const bookingLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5, // 5 bookings per IP per 10 min
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "too_many_requests" },
});

// IMPORTANT: replace these with the EXACT <option> values from your form's service dropdown
const SERVICES = new Set([
  "تنظيف الأسنان",
  "حشوات",
  "تقويم",
  "زراعة",
  "تبييض",
  "علاج العصب",
  "خلع",
  "استشارة",
]);

const clean = (s, max) =>
  String(s ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);

const isValidPhone = (p) => /^[+\d][\d\s-]{6,19}$/.test(p);

const isValidFutureDate = (d) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return false;
  const date = new Date(d + "T00:00:00");
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

// Verify a Turnstile token with Cloudflare before doing anything that costs money
async function verifyTurnstile(token, ip) {
  if (!token) return false;
  try {
    const params = new URLSearchParams();
    params.append("secret", TURNSTILE_SECRET);
    params.append("response", token);
    if (ip) params.append("remoteip", ip);

    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: params }
    );
    const data = await r.json();
    return data.success === true;
  } catch {
    return false; // network/parse failure = treat as not verified
  }
}

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/booking", bookingLimiter, async (req, res) => {
  try {
    const b = req.body || {};

    // Honeypot: humans never fill `company`. If filled, fake success so bots learn nothing.
    if (clean(b.company, 100)) return res.json({ ok: true });

    const name = clean(b.name, 80);
    const phone = clean(b.phone, 20);
    const service = clean(b.service, 60);
    const date = clean(b.date, 10);
    const notes = clean(b.notes, 500);

    const errors = {};
    if (!name) errors.name = true;
    if (!phone || !isValidPhone(phone)) errors.phone = true;
    if (!service || !SERVICES.has(service)) errors.service = true;
    if (!date || !isValidFutureDate(date)) errors.date = true;
    if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

    // Turnstile check — after validation, before the Twilio call
    const verified = await verifyTurnstile(clean(b.turnstileToken, 2048), req.ip);
    if (!verified) return res.status(403).json({ ok: false, error: "captcha" });

    const body = [
      `🦷 حجز موعد جديد`,
      ``,
      `👤 الاسم: ${name}`,
      `📞 الهاتف: ${phone}`,
      `🔧 الخدمة: ${service}`,
      `📅 التاريخ: ${date}`,
      notes ? `📝 ملاحظات: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await client.messages.create({
      from: TWILIO_WHATSAPP_FROM,
      to: CLINIC_WHATSAPP_TO,
      body,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Booking error:", err?.message || err); // log server-side only
    return res.status(500).json({ ok: false, error: "server_error" });
  }
});

// Generic error handler — never leak internals to the client
app.use((err, _req, res, _next) => {
  if (err?.message === "CORS") return res.status(403).json({ ok: false, error: "forbidden" });
  console.error(err?.message || err);
  return res.status(500).json({ ok: false, error: "server_error" });
});

app.listen(PORT, () => console.log(`Booking API on :${PORT}`));