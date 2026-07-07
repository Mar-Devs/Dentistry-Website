import { useEffect, useRef, useState } from "react";
 
const stats = [
  { num: 1200, suffix: "+", label: "مريض راضٍ", icon: "" },
  { num: 8, suffix: "+", label: "سنوات خبرة", icon: "" },
  { num: 4.9, suffix: "", label: "تقييم المرضى", icon: "" },
];
 
function useCountUp(target, duration = 1800, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const isDecimal = target % 1 !== 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(isDecimal ? +(eased * target).toFixed(1) : Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}
 
function StatCard({ num, suffix, label, icon, started, delay }) {
  const count = useCountUp(num, 1800, started);
  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 0,
        background: "#fff",
        border: "1.5px solid #e8edf8",
        borderRadius: 20,
        padding: "22px 16px 18px",
        textAlign: "center",
        boxShadow: "0 2px 16px rgba(26,63,170,0.07)",
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
      <div
        style={{
          fontSize: 30,
          fontWeight: 700,
          color: "#1a3faa",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1,
          letterSpacing: "-0.5px",
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 13,
          color: "#6b7c9e",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}
 
export function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div
        ref={ref}
        style={{
          background: "#fff",
          padding: "32px 20px",
          direction: "rtl",
        }}
      >
        {/* Section label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 24,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
          }}
        >
  
        </div>
 
        {/* Stats cards */}
        <div style={{ display: "flex", gap: 12 }}>
          {stats.map((s, i) => (
            <StatCard key={i} {...s} started={visible} delay={100 + i * 120} />
          ))}
        </div>
 
        {/* Divider dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 24,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 600ms",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === 1 ? "#1a3faa" : "#d0d9f0",
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}