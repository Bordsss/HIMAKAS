import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const clusters = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#6C4DFF",
    techs: ["React", "Next.js", "Flutter", "HTML/CSS", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#818CF8",
    techs: ["Node.js", "PHP", "Python", "C#", ".NET"],
  },
  {
    id: "database",
    label: "Database",
    color: "#00C9A7",
    techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "InfluxDB"],
  },
  {
    id: "hardware",
    label: "Hardware",
    color: "#F59E0B",
    techs: ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "RFID"],
  },
  {
    id: "tools",
    label: "Tools & Design",
    color: "#FB7185",
    techs: ["Figma", "WordPress", "Storybook", "Docker", "Git"],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "#080C14" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p
                className="mb-3"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
              >
                Technology Stack
              </p>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Built with the best tools
              </h2>
            </div>
            <p
              className="max-w-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(248,250,252,0.4)", lineHeight: 1.7 }}
            >
              Hover any cluster to see the technologies we use across that domain.
            </p>
          </motion.div>

          {/* Cluster grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {clusters.map((cluster, i) => {
              const isActive = activeCluster === cluster.id;
              const isDimmed = activeCluster !== null && !isActive;

              return (
                <motion.div
                  key={cluster.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: isDimmed ? 0.35 : 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.7 }}
                  onMouseEnter={() => setActiveCluster(cluster.id)}
                  onMouseLeave={() => setActiveCluster(null)}
                  className="p-6 cursor-default transition-all duration-300"
                  style={{
                    background: isActive ? `rgba(${cluster.color === "#6C4DFF" ? "108,77,255" : cluster.color === "#818CF8" ? "129,140,248" : cluster.color === "#00C9A7" ? "0,201,167" : cluster.color === "#F59E0B" ? "245,158,11" : "251,113,133"},0.08)` : "#0F172A",
                    borderRadius: "16px",
                    border: isActive ? `1px solid ${cluster.color}40` : "1px solid rgba(108,77,255,0.1)",
                    boxShadow: isActive ? `0 0 30px ${cluster.color}18` : "none",
                  }}
                >
                  {/* Cluster label */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: cluster.color }} />
                    <span
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: cluster.color, textTransform: "uppercase" }}
                    >
                      {cluster.label}
                    </span>
                  </div>

                  {/* Tech items */}
                  <ul className="space-y-2.5">
                    {cluster.techs.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2.5"
                      >
                        <div
                          className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
                          style={{ background: isActive ? cluster.color : "rgba(248,250,252,0.2)" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: "14px",
                            color: isActive ? "#F8FAFC" : "rgba(248,250,252,0.5)",
                            transition: "color 0.2s",
                          }}
                        >
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ border: "1px solid rgba(108,77,255,0.12)", borderRadius: "16px", overflow: "hidden" }}
          >
            {[
              { value: "12+", label: "Technologies mastered" },
              { value: "5", label: "Industry domains" },
              { value: "40+", label: "Live deployments" },
              { value: "3yrs", label: "Average stack depth" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-6 text-center"
                style={{ background: "#0F172A" }}
              >
                <div
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.8rem", letterSpacing: "-0.03em", background: "linear-gradient(90deg, #6C4DFF, #00C9A7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(248,250,252,0.35)", marginTop: "4px" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
