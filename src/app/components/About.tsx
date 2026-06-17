import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Three.js"] },
  { label: "Design", items: ["Figma", "Motion Design", "Typography", "Brand Systems"] },
  { label: "Backend", items: ["Node.js", "GraphQL", "PostgreSQL", "Redis"] },
  { label: "Craft", items: ["Performance", "Accessibility", "SEO", "Deployment"] },
];

const stats = [
  { value: "47", label: "Projects delivered" },
  { value: "12", label: "Years of experience" },
  { value: "28", label: "Happy clients" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: image + stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12"
            >
              <div className="overflow-hidden" style={{ paddingBottom: "120%" }}>
                <img
                  src="https://images.unsplash.com/photo-1671159593357-ee577a598f71?w=800&h=1000&fit=crop&auto=format"
                  alt="Creative workspace — dark, minimal"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating accent */}
              <div
                className="absolute -bottom-4 -right-4 border border-accent/20 p-6"
                style={{ background: "#0f0e0c" }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase text-accent mb-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Based in
                </p>
                <p
                  className="text-sm text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Paris, France
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl text-foreground mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#b8945f" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase text-foreground/30"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: text + skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.9 }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                About
              </p>

              <h2
                className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-foreground mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Building the{" "}
                <span className="italic text-foreground/40">intersection</span>
                {" "}of beauty and function.
              </h2>

              <div
                className="space-y-4 text-sm text-foreground/45 leading-relaxed mb-12"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                <p>
                  I'm Alexandre Laurent — an independent creative developer and designer with twelve years of experience shaping digital products for forward-thinking companies and cultural institutions.
                </p>
                <p>
                  My work sits at the boundary between engineering rigour and sensory design. I believe interfaces should be felt, not just used — every interaction a deliberate statement of intent.
                </p>
                <p>
                  I collaborate with a small network of exceptional designers, strategists, and copywriters when the project demands it. Otherwise, I work alone: lean, considered, and precise.
                </p>
              </div>

              {/* Skills grid */}
              <div className="border-t border-border pt-10">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-foreground/25 mb-8"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Disciplines
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.7 }}
                    >
                      <p
                        className="text-[10px] tracking-[0.2em] uppercase text-accent/70 mb-3"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {skill.label}
                      </p>
                      <ul className="space-y-1.5">
                        {skill.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-foreground/40"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
