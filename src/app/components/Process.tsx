import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

const stages = [
  { num: "01", name: "Discovery", desc: "Deep-dive sessions to map your goals, users, constraints, and success metrics.", duration: "1–2 days" },
  { num: "02", name: "Research", desc: "Competitive analysis, technical feasibility assessment, and architecture planning.", duration: "2–3 days" },
  { num: "03", name: "Design", desc: "Wireframes, interactive prototypes, and high-fidelity mockups reviewed with you.", duration: "1–2 weeks" },
  { num: "04", name: "Development", desc: "Agile sprints with weekly demos, continuous integration, and transparent progress tracking.", duration: "2–8 weeks" },
  { num: "05", name: "Testing", desc: "Automated test suites, cross-device QA, load testing, and security audits.", duration: "3–5 days" },
  { num: "06", name: "Deployment", desc: "Zero-downtime launch with monitoring, rollback plans, and full documentation.", duration: "1–2 days" },
  { num: "07", name: "Ongoing Support", desc: "SLA-backed maintenance, feature iteration, and performance monitoring.", duration: "Continuous" },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 180);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="process" className="py-24 md:py-32" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-3"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
            >
              Our Process
            </p>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              From idea to deployment
            </h2>
          </motion.div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mb-16">
          {/* Progress track */}
          <div className="relative mb-10">
            <div
              className="absolute top-4 left-0 right-0 h-px"
              style={{ background: "rgba(108,77,255,0.15)" }}
            />
            <motion.div
              className="absolute top-4 left-0 h-px"
              style={{ background: "linear-gradient(90deg, #6C4DFF, #00C9A7)" }}
              initial={{ width: "0%" }}
              animate={inView ? { width: `${((activeIndex + 1) / stages.length) * 100}%` } : {}}
              transition={{ duration: 0.3, ease: "linear" }}
            />

            <div className="flex justify-between">
              {stages.map((stage, i) => (
                <div
                  key={stage.num}
                  className="flex flex-col items-center cursor-pointer group"
                  style={{ width: `${100 / stages.length}%` }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 transition-all duration-300 relative z-10"
                    style={{
                      background: i <= activeIndex ? "linear-gradient(135deg, #1B0A4F, #6C4DFF)" : "#0F172A",
                      border: i <= activeIndex ? "1px solid rgba(108,77,255,0.6)" : "1px solid rgba(108,77,255,0.2)",
                      boxShadow: i === activeIndex ? "0 0 20px rgba(108,77,255,0.5)" : "none",
                    }}
                  >
                    <span
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.05em", color: i <= activeIndex ? "#A78BFA" : "rgba(248,250,252,0.25)" }}
                    >
                      {stage.num}
                    </span>
                  </div>
                  <span
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: i <= activeIndex ? 700 : 500, fontSize: "12px", color: i <= activeIndex ? "#F8FAFC" : "rgba(248,250,252,0.35)", textAlign: "center" }}
                  >
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active stage detail */}
          {activeIndex >= 0 && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 max-w-lg"
              style={{
                background: "#0F172A",
                borderRadius: "12px",
                border: "1px solid rgba(108,77,255,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#6C4DFF", letterSpacing: "0.1em" }}
                >
                  Stage {stages[activeIndex].num}
                </span>
                <span
                  className="px-2 py-0.5"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#00C9A7", background: "rgba(0,201,167,0.1)", borderRadius: "4px" }}
                >
                  ~{stages[activeIndex].duration}
                </span>
              </div>
              <h3
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F8FAFC", marginBottom: "8px" }}
              >
                {stages[activeIndex].name}
              </h3>
              <p
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(248,250,252,0.5)", lineHeight: 1.6 }}
              >
                {stages[activeIndex].desc}
              </p>
            </motion.div>
          )}
        </div>

        {/* Mobile: vertical accordion */}
        <div className="md:hidden space-y-0">
          {stages.map((stage, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={stage.num}
                className="border-b cursor-pointer"
                style={{ borderColor: "rgba(108,77,255,0.12)" }}
                onClick={() => setActiveIndex(isActive ? -1 : i)}
              >
                <div className="flex items-center gap-4 py-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: isActive ? "linear-gradient(135deg, #1B0A4F, #6C4DFF)" : "#0F172A",
                      border: "1px solid rgba(108,77,255,0.3)",
                    }}
                  >
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "#A78BFA" }}>{stage.num}</span>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F8FAFC", flex: 1 }}>
                    {stage.name}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(248,250,252,0.3)" }}>
                    {stage.duration}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: isActive ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                    <path d="M2 4l4 4 4-4" stroke="rgba(248,250,252,0.3)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pb-4 pl-11"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(248,250,252,0.45)", lineHeight: 1.6 }}
                  >
                    {stage.desc}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
