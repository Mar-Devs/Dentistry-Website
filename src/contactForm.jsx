import { useState, useEffect } from "react";

/* ─── Google Font injected once ─── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@300;400;500;700&display=swap";
document.head.appendChild(fontLink);

/* ─── CSS-in-JS style block ─── */
const css = `
  :root {
    --blue-deep:   #0a2a6e;
    --blue-mid:    #1a4cb0;
    --blue-bright: #2563eb;
    --blue-sky:    #60a5fa;
    --blue-mist:   #dbeafe;
    --blue-pale:   #eff6ff;
    --white:       #ffffff;
    --text-dark:   #0f172a;
    --text-mid:    #334155;
    --text-soft:   #64748b;
    --border:      #bfdbfe;
  }
  .db-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .db-root {
    font-family: 'Cairo', sans-serif;
    direction: rtl;
    background: linear-gradient(160deg, #e8f0fe 0%, #dbeafe 40%, #bfdbfe 100%);
    min-height: 100vh;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  .db-header {
    position: relative;
    text-align: center;
    padding: 56px 24px 24px;
    overflow: hidden;
  }
  .db-header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.13) 0%, transparent 70%);
    pointer-events: none;
  }
  .db-deco-wrap {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .db-tooth {
    position: absolute;
    top: -20px;
    width: 110px;
    opacity: 0.55;
    pointer-events: none;
    filter: drop-shadow(0 6px 18px rgba(37,99,235,0.2));
  }
  .db-tooth-left  { left: 0;  animation: dbFloatL 6s ease-in-out infinite; }
  .db-tooth-right { right: 0; animation: dbFloatR 6s ease-in-out infinite; animation-delay: 3s; transform: scaleX(-1); }
  @keyframes dbFloatL {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes dbFloatR {
    0%,100% { transform: scaleX(-1) translateY(0); }
    50%      { transform: scaleX(-1) translateY(-12px); }
  }

  .db-badge {
    display: inline-block;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: var(--blue-bright);
    background: rgba(37,99,235,0.09);
    border: 1px solid var(--border);
    padding: 5px 18px;
    border-radius: 100px;
    margin-bottom: 16px;
  }
  .db-h1 {
    font-size: clamp(2rem, 6vw, 3.2rem);
    font-weight: 900;
    color: var(--blue-deep);
    line-height: 1.15;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }
  .db-subtitle {
    font-family: 'Tajawal', sans-serif;
    font-size: 1rem;
    color: var(--text-soft);
    line-height: 1.7;
  }

  /* ── TRUST STRIP ── */
  .db-trust {
    display: flex;
    justify-content: center;
    gap: 28px;
    padding: 24px 24px 0;
    flex-wrap: wrap;
  }
  .db-trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.88rem;
    color: var(--text-mid);
  }
  .db-trust-icon {
    width: 34px; height: 34px;
    background: linear-gradient(135deg, var(--blue-sky), var(--blue-bright));
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 0.95rem;
    flex-shrink: 0;
  }

  /* ── CARD ── */
  .db-card-wrap {
    max-width: 1160px;
    margin: 0 auto;
    padding: 24px 20px 60px;
  }
  .db-card {
    background: var(--white);
    border-radius: 28px;
    box-shadow: 0 4px 24px rgba(37,99,235,0.12);
    overflow: hidden;
    animation: dbSlideUp 0.6s cubic-bezier(.22,.68,0,1.2) both;
  }
  @keyframes dbSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .db-card-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 480px;
  }

  /* ── FORM ── */
  .db-form-side {
    padding: 44px 44px;
    border-left: 1px solid var(--blue-mist);
    order: 1;
  }
  .db-form-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--blue-mid);
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .db-form-title::before {
    content: '';
    width: 4px; height: 20px;
    background: var(--blue-bright);
    border-radius: 4px;
    display: inline-block;
  }
  .db-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .db-field { display: flex; flex-direction: column; gap: 6px; }
  .db-field.full { grid-column: 1 / -1; }
  .db-label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-soft);
    font-family: 'Tajawal', sans-serif;
  }
  .db-input, .db-select {
    width: 100%;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 13px 16px;
    font-family: 'Cairo', sans-serif;
    font-size: 0.92rem;
    color: var(--text-dark);
    background: var(--blue-pale);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    appearance: none;
    -webkit-appearance: none;
  }
  .db-input::placeholder { color: #94a3b8; }
  .db-input:focus, .db-select:focus {
    border-color: var(--blue-bright);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
  }
  .db-input.err { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.13); }
  .db-select-wrap { position: relative; }
  .db-select-wrap::after {
    content: '▾';
    position: absolute;
    left: 14px;
    top: 50%; transform: translateY(-50%);
    color: var(--blue-bright);
    pointer-events: none;
  }

  .db-btn {
    margin-top: 22px;
    width: 100%;
    background: linear-gradient(135deg, var(--blue-bright) 0%, var(--blue-mid) 100%);
    color: var(--white);
    font-family: 'Cairo', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 14px;
    padding: 15px 24px;
    cursor: pointer;
    transition: transform 0.18s, box-shadow 0.18s;
    box-shadow: 0 4px 16px rgba(37,99,235,0.3);
  }
  .db-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.4); }
  .db-btn:active { transform: translateY(0); }
  .db-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .db-privacy {
    margin-top: 11px;
    font-family: 'Tajawal', sans-serif;
    font-size: 0.74rem;
    color: var(--text-soft);
    text-align: center;
  }
  .db-privacy a { color: var(--blue-bright); text-decoration: underline; text-underline-offset: 2px; }

  /* ── MAP ── */
  .db-map-side {
    position: relative;
    min-height: 380px;
    background: var(--blue-mist);
    overflow: hidden;
    order: 2;
  }
  .db-map-side iframe {
    width: 100%; height: 100%;
    border: none; display: block;
  }
  .db-map-overlay {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: var(--white);
    border-radius: 14px;
    padding: 13px 17px;
    box-shadow: 0 4px 24px rgba(37,99,235,0.12);
    font-size: 0.82rem;
    max-width: 200px;
  }
  .db-map-overlay strong { display: block; color: var(--blue-deep); font-weight: 700; margin-bottom: 4px; }
  .db-map-overlay span { color: var(--text-soft); line-height: 1.55; }

  /* ── TOAST ── */
  .db-toast {
    position: fixed;
    bottom: 32px;
    left: 50%; transform: translateX(-50%) translateY(80px);
    background: var(--blue-deep);
    color: var(--white);
    padding: 14px 28px;
    border-radius: 14px;
    font-family: 'Cairo', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    box-shadow: 0 8px 32px rgba(10,42,110,0.3);
    opacity: 0;
    transition: opacity 0.3s, transform 0.4s cubic-bezier(.22,.68,0,1.2);
    z-index: 999;
    white-space: nowrap;
    pointer-events: none;
  }
  .db-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .db-header { padding: 36px 20px 16px; }
    .db-tooth { width: 70px; top: -6px; }
    .db-card-inner { grid-template-columns: 1fr; }
    .db-form-side {
      padding: 28px 22px;
      border-left: none;
      border-bottom: 1px solid var(--blue-mist);
      order: 1;
    }
    .db-map-side { min-height: 270px; order: 2; }
    .db-form-grid { grid-template-columns: 1fr; }
    .db-field.full { grid-column: 1; }
    .db-trust { gap: 16px; }
  }
  @media (max-width: 480px) {
    .db-h1 { font-size: 1.75rem; }
    .db-form-side { padding: 22px 16px; }
  }
`;

/* ─── SVG Teeth ─── */
function ToothLeft() {
  return (
    <svg
      className="db-tooth db-tooth-left"
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 12C20 12 8 18 8 50C8 75 14 95 18 120C20 135 26 150 36 150C44 150 48 136 52 120C54 112 58 100 60 100C62 100 66 112 68 120C72 136 76 150 84 150C94 150 100 135 102 120C106 95 112 75 112 50C112 18 100 12 100 12C88 4 76 0 60 0C44 0 32 4 20 12Z"
        fill="url(#tg1)"
      />
      <path
        d="M38 40C38 40 42 28 60 28C78 28 82 40 82 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      <defs>
        <linearGradient
          id="tg1"
          x1="0"
          y1="0"
          x2="120"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#1a4cb0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ToothRight() {
  return (
    <svg
      className="db-tooth db-tooth-right"
      viewBox="0 0 130 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 30C8 42 6 62 10 90C14 116 20 145 32 150C40 154 48 140 52 122C55 110 58 100 65 100C72 100 75 110 78 122C82 140 90 154 98 150C110 145 116 116 120 90C124 62 122 42 115 30C106 14 90 6 65 6C40 6 24 14 15 30Z"
        fill="url(#tg2)"
      />
      <circle cx="48" cy="55" r="6" fill="white" opacity="0.2" />
      <circle cx="82" cy="55" r="6" fill="white" opacity="0.2" />
      <defs>
        <linearGradient
          id="tg2"
          x1="0"
          y1="0"
          x2="130"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#93c5fd" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Trust Strip ─── */
const TRUST_ITEMS = [
  { icon: "🦷", label: "أطباء معتمدون" },
  { icon: "⚡", label: "حجز فوري" },
  { icon: "🛡️", label: "سرية تامة" },
  { icon: "⭐", label: "تقييم 4.9 / 5" },
];

/* ─── Services ─── */
const SERVICES = [
  { value: "whitening", label: "تبييض الأسنان" },
  { value: "braces", label: "تقويم الأسنان" },
  { value: "implant", label: "زراعة الأسنان" },
  { value: "cleaning", label: "تنظيف الأسنان" },
  { value: "cosmetic", label: "طب الأسنان التجميلي" },
  { value: "checkup", label: "كشف وفحص عام" },
];

/* ─── Main Component ─── */
export function DentalBooking({
  clinicName = "ابتسامه",
  clinicAddress = "النجف, حي الامير — شارع  الزهور",
  mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108248.19688337772!2d44.24702907185346!3d32.02171841159331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed0ac9b7a8261%3A0xb989aee40be1b8f0!2sNajaf%2C%20Najaf%20Governorate!5e0!3m2!1sen!2siq!4v1777587363725!5m2!1sen!2siq",
  onSubmit = null,
}) {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Inject styles once */
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  /* Toast auto-dismiss */
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: false }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim()) e.phone = true;
    if (!form.service) e.service = true;
    if (!form.date) e.date = true;
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setLoading(true);
    if (onSubmit) {
      await onSubmit(form);
    } else {
      await new Promise((r) => setTimeout(r, 800)); // simulate
    }
    setLoading(false);
    setForm({ name: "", phone: "", service: "", date: "", notes: "" });
    setToast(true);
  };

  const cls = (base, key) => `${base}${errors[key] ? " err" : ""}`;

  return (
    <>
      <section id="contact-us">
        <div className="db-root" lang="ar" dir="rtl">
          {/* ── Header ── */}
          <header className="db-header">
            <div className="db-deco-wrap">
              <ToothLeft />
              <ToothRight />
            </div>
            <div className="db-badge">استشارة</div>
            <h1 className="db-h1">احجز خطوتك الأولى</h1>
            <p className="db-subtitle">
              اختر تاريخك المفضل ونوع العلاج،
              <br />
              ونحن نتكفل بالباقي.
            </p>
          </header>

          {/* ── Trust Strip ──
      <div className="db-trust" role="list" aria-label="مزايا العيادة">
        {TRUST_ITEMS.map((t) => (
          <div key={t.label} className="db-trust-item" role="listitem">
            <div className="db-trust-icon" aria-hidden="true">{t.icon}</div>
            {t.label}
          </div>
        ))}
      </div> */}

          {/* ── Card ── */}
          <main className="db-card-wrap" id="booking">
            <div className="db-card">
              <div className="db-card-inner">
                {/* Form */}
                <section
                  className="db-form-side"
                  aria-labelledby="form-heading"
                >
                  <div className="db-form-title" id="form-heading">
                    بيانات الحجز
                  </div>

                  <div className="db-form-grid">
                    <div className="db-field">
                      <label className="db-label" htmlFor="db-name">
                        الاسم الكامل
                      </label>
                      <input
                        className={cls("db-input", "name")}
                        id="db-name"
                        type="text"
                        placeholder="أدخل اسمك"
                        value={form.name}
                        onChange={set("name")}
                        autoComplete="name"
                      />
                    </div>

                    <div className="db-field">
                      <label className="db-label" htmlFor="db-phone">
                        رقم الهاتف
                      </label>
                      <input
                        className={cls("db-input", "phone")}
                        id="db-phone"
                        type="tel"
                        placeholder="05xxxxxxxx"
                        value={form.phone}
                        onChange={set("phone")}
                        autoComplete="tel"
                      />
                    </div>

                    <div className="db-field">
                      <label className="db-label" htmlFor="db-service">
                        نوع الخدمة
                      </label>
                      <div className="db-select-wrap">
                        <select
                          className={cls("db-select", "service")}
                          id="db-service"
                          value={form.service}
                          onChange={set("service")}
                        >
                          <option value="" disabled>
                            اختر الخدمة
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="db-field">
                      <label className="db-label" htmlFor="db-date">
                        التاريخ المفضل
                      </label>
                      <input
                        className={cls("db-input", "date")}
                        id="db-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={set("date")}
                      />
                    </div>

                    <div className="db-field full">
                      <label className="db-label" htmlFor="db-notes">
                        ملاحظات إضافية (اختياري)
                      </label>
                      <input
                        className="db-input"
                        id="db-notes"
                        type="text"
                        placeholder="أي معلومات تودّ إضافتها..."
                        value={form.notes}
                        onChange={set("notes")}
                      />
                    </div>
                  </div>

                  <button
                    className="db-btn"
                    onClick={handleSubmit}
                    disabled={loading}
                    aria-label="إرسال طلب الحجز"
                  >
                    {loading ? "جارٍ الإرسال..." : "إرسال الطلب"}
                  </button>

                  {/* <p className="db-privacy">
                    بالضغط على الزر أعلاه، أنت توافق على{" "}
                    <a href="#" aria-label="سياسة الخصوصية">
                      سياسة الخصوصية
                    </a>
                  </p> */}
                </section>

                {/* Map */}
                <section
                  className="db-map-side"
                  aria-label="موقع العيادة على الخريطة"
                >
                  <iframe
                    title="موقع عيادة الأسنان"
                    src={mapEmbedSrc}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div
                    className="db-map-overlay"
                    role="complementary"
                    aria-label="عنوان العيادة"
                  >
                    <strong>{clinicName}</strong>
                    <span>{clinicAddress}</span>
                  </div>
                </section>
              </div>
            </div>
          </main>

          {/* Toast */}
          <div
            className={`db-toast${toast ? " show" : ""}`}
            role="alert"
            aria-live="polite"
          >
            ✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
          </div>
        </div>
        <section />
      </section>
    </>
  );
}
