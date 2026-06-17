import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const stats = [
  { value: 40, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "", label: "Industries" },
  { value: 3, suffix: "yrs", label: "Experience" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    const t = setTimeout(() => requestAnimationFrame(tick), 800);
    return () => clearTimeout(t);
  }, [target]);

  return <>{count}{suffix}</>;
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#080C14" }}
    >
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(108,77,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,201,167,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Background image (subtle) */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.07]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1762267683517-6e9bc20675e9?w=1200&h=900&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,77,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,77,255,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
              style={{
                background: "rgba(0,201,167,0.08)",
                border: "1px solid rgba(0,201,167,0.2)",
                borderRadius: "100px",
                padding: "6px 14px",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00C9A7" }}
              />
              <span
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "12px", color: "#00C9A7", letterSpacing: "0.04em" }}
              >
                Currently accepting projects
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  color: "#F8FAFC",
                }}
              >
                We build digital
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(90deg, #6C4DFF 0%, #00C9A7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                products that drive results.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mb-10 max-w-xl"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(248,250,252,0.5)",
              }}
            >
              HIMAKAS IT Solutions crafts enterprise-grade software, IoT systems, and immersive digital experiences — from concept to deployment and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-7 py-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(108,77,255,0.4)]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #1B0A4F 0%, #6C4DFF 100%)",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "1px solid rgba(108,77,255,0.5)",
                }}
              >
                Explore Our Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-7 py-4 transition-all duration-200 hover:border-primary/50 hover:text-foreground"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "rgba(248,250,252,0.5)",
                  borderRadius: "10px",
                  border: "1px solid rgba(248,250,252,0.12)",
                  background: "transparent",
                }}
              >
                Schedule a Call
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-8 pt-8"
              style={{ borderTop: "1px solid rgba(108,77,255,0.12)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "2rem",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      background: "linear-gradient(90deg, #6C4DFF, #00C9A7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "rgba(248,250,252,0.35)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(108,77,255,0.2)",
                background: "#0F172A",
                aspectRatio: "4/5",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?w=800&h=1000&fit=crop&auto=format"
                alt="Software development code"
                className="w-full h-full object-cover opacity-60"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(27,10,79,0.6) 0%, rgba(108,77,255,0.2) 50%, rgba(0,201,167,0.1) 100%)",
                }}
              />

              {/* Floating card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4"
                style={{
                  background: "rgba(8,12,20,0.85)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(108,77,255,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#00C9A7", letterSpacing: "0.08em" }}>
                    LATEST DEPLOYMENT
                  </span>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#F8FAFC" }}>
                  Smart Inventory System v2.4
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(248,250,252,0.4)", marginTop: "2px" }}>
                  IoT + React · Deployed 2 days ago
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
