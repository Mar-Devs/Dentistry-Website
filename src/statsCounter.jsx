import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of excellence", ariaLabel: "15 plus years of excellence" },
  { value: 98, suffix: "%", label: "Patient satisfaction rate", ariaLabel: "98 percent patient satisfaction rate" },
  { value: 5000, suffix: "+", label: "Smiles transformed", ariaLabel: "5000 plus smiles transformed" },
  { value: 17, suffix: "", label: "Certified experts", ariaLabel: "17 certified experts" },
];

export function useCountUp({target, duration = 1800, start = false}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index, animate }) {
  const count = useCountUp(stat.value, 1800 + index * 200, animate);
  return (
    <div
      style={{
        padding: "28px 32px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "4px",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
      role="figure"
      aria-label={stat.ariaLabel}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "6px", lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
        }}>
          {count.toLocaleString()}
        </span>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
          fontWeight: 700,
          color: "rgba(255,255,255,0.65)",
        }}>
          {stat.suffix}
        </span>
      </div>
      <p style={{
        fontSize: "0.78rem",
        fontWeight: 500,
        color: "rgba(255,255,255,0.55)",
        textTransform: "uppercase",
        letterSpacing: "0.09em",
        margin: "0 0 14px 0",
        lineHeight: 1.4,
        fontFamily: "'Barlow', sans-serif",
      }}>
        {stat.label}
      </p>
      <div style={{ height: "2px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: animate ? "100%" : "0%",
          background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.15))",
          borderRadius: "2px",
          transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 120 + 400}ms`,
        }} />
      </div>
    </div>
  );
}

export function StatsCounter() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-trigger in preview since scroll may not work in iframe
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@700;800&display=swap" rel="stylesheet" />
      <section
        ref={ref}
        aria-label="Practice statistics and achievements"
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #1a3a8f 0%, #1e50c8 50%, #1a3a8f 100%)",
          padding: "56px 32px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        {/* Glow blobs */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle at 15% 50%, rgba(255,255,255,0.05) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.07) 0%, transparent 45%)",
        }} />

        <dl style={{
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          maxWidth: "1100px",
          margin: "0 auto",
          listStyle: "none", padding: 0,
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} animate={animate} />
          ))}
        </dl>
      </section>
    </>
  );
}
