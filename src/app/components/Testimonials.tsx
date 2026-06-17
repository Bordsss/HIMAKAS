import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

const testimonials = [
  {
    id: 0,
    quote: "HIMAKAS delivered a system that fundamentally changed how we operate. The IoT integration was flawless — sensors, dashboard, alerts — all in one cohesive platform. Three months in and it's still running without a single issue.",
    author: "Budi Santoso",
    role: "Operations Director",
    company: "PT Maju Bersama Industri",
    avatar: "https://images.unsplash.com/photo-1758520145147-c30bc656f314?w=200&h=200&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 1,
    quote: "The team understood our campus culture and built something students actually want to use. Adoption was 94% in the first week.",
    author: "Dian Kusuma",
    role: "Head of Student Affairs",
    company: "Universitas Nusantara",
    avatar: "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?w=200&h=200&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 2,
    quote: "What impressed me most was the documentation and handoff. We could extend the system ourselves from day one.",
    author: "Rizal Firmansyah",
    role: "CTO",
    company: "Startup Teknologi Lokal",
    avatar: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=200&h=200&fit=crop&auto=format",
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.7.6-3.7L1.8 4.8l3.6-.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const featured = testimonials[active];
  const secondary = testimonials.filter((_, i) => i !== active);

  return (
    <section className="py-24 md:py-32" style={{ background: "#080C14" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p
              className="mb-3"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
            >
              Testimonials
            </p>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Join 20+ happy clients
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="grid lg:grid-cols-[2fr_1fr] gap-4"
          >
            {/* Featured testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 lg:p-10 flex flex-col justify-between"
                style={{
                  background: "#0F172A",
                  borderRadius: "20px",
                  border: "1px solid rgba(108,77,255,0.2)",
                  minHeight: "320px",
                }}
              >
                <div>
                  <Stars />
                  <blockquote
                    className="mt-6 mb-8"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "#F8FAFC", lineHeight: 1.6 }}
                  >
                    "{featured.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={featured.avatar}
                    alt={featured.author}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ border: "2px solid rgba(108,77,255,0.3)" }}
                  />
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F8FAFC" }}>
                      {featured.author}
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(248,250,252,0.4)" }}>
                      {featured.role} · {featured.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Secondary testimonials */}
            <div className="flex flex-col gap-4">
              {secondary.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="text-left p-6 transition-all duration-200 hover:border-primary/30"
                  style={{
                    background: "#0F172A",
                    borderRadius: "16px",
                    border: "1px solid rgba(108,77,255,0.1)",
                    flex: 1,
                  }}
                >
                  <Stars />
                  <p
                    className="mt-3 mb-4 line-clamp-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(248,250,252,0.5)", lineHeight: 1.6 }}
                  >
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-8 h-8 rounded-full object-cover opacity-70"
                    />
                    <div>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: "#F8FAFC" }}>
                        {t.author}
                      </p>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(248,250,252,0.35)" }}>
                        {t.company}
                      </p>
                    </div>
                  </div>
                </button>
              ))}

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="transition-all duration-300"
                    style={{
                      width: active === i ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: active === i ? "#6C4DFF" : "rgba(108,77,255,0.25)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
