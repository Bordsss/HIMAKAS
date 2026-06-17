import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="#6C4DFF" strokeWidth="1.5" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="#6C4DFF" strokeWidth="1.5" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="#6C4DFF" strokeWidth="1.5" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="#00C9A7" strokeWidth="1.5" />
      </svg>
    ),
    name: "Web Application Development",
    description: "Full-stack web apps built for scale — from lean MVPs to enterprise systems with complex workflows.",
    price: "From $1,500",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="2" width="10" height="24" rx="3" stroke="#6C4DFF" strokeWidth="1.5" />
        <circle cx="14" cy="22" r="1.5" fill="#00C9A7" />
      </svg>
    ),
    name: "Mobile App Development",
    description: "Cross-platform Flutter apps with native performance, offline-first architecture, and seamless integrations.",
    price: "From $2,000",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="#6C4DFF" strokeWidth="1.5" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.5 5.5l3 3M19.5 19.5l3 3M5.5 22.5l3-3M19.5 8.5l3-3" stroke="#00C9A7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "IoT Systems & Hardware",
    description: "End-to-end embedded systems using Arduino, ESP32, and Raspberry Pi — from sensors to dashboards.",
    price: "From $800",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 4 5 3-4 7 7" stroke="#6C4DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#6C4DFF" strokeWidth="1.5" />
      </svg>
    ),
    name: "Data & Analytics",
    description: "Dashboards and reporting pipelines that turn raw numbers into actionable business intelligence.",
    price: "From $1,200",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="8" r="4" stroke="#6C4DFF" strokeWidth="1.5" />
        <circle cx="5" cy="21" r="3" stroke="#6C4DFF" strokeWidth="1.5" />
        <circle cx="23" cy="21" r="3" stroke="#00C9A7" strokeWidth="1.5" />
        <path d="M10 10.5L7 18M18 10.5l3 7.5M11 21h6" stroke="#6C4DFF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    name: "UI/UX Design",
    description: "Research-led product design — wireframes, prototypes, design systems, and high-fidelity Figma deliverables.",
    price: "From $600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 8l11 5 11-5-11-5zM3 14l11 5 11-5M3 20l11 5 11-5" stroke="#6C4DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "System Integration & API",
    description: "Connecting ERP, POS, payment gateways, and third-party APIs into a unified, automated workflow.",
    price: "From $900",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="#00C9A7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="#6C4DFF" strokeWidth="1.5" />
        <path d="M11 14h6M14 11v6" stroke="#6C4DFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Ongoing Support & Maintenance",
    description: "SLA-backed monitoring, security patches, performance tuning, and feature iteration after launch.",
    price: "From $200/mo",
  },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.7 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group p-6 cursor-pointer transition-all duration-200"
      style={{
        background: "#0F172A",
        borderRadius: "16px",
        border: hovered ? "1px solid rgba(108,77,255,0.4)" : "1px solid rgba(108,77,255,0.1)",
        boxShadow: hovered ? "0 0 30px rgba(108,77,255,0.12)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div className="mb-4">{service.icon}</div>
      <h3
        className="mb-2"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F8FAFC", lineHeight: 1.35 }}
      >
        {service.name}
      </h3>
      <p
        className="mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(248,250,252,0.4)", lineHeight: 1.6 }}
      >
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        <span
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.04em", color: "#00C9A7" }}
        >
          {service.price}
        </span>
        <span
          className="flex items-center gap-1 transition-opacity duration-200"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#6C4DFF", opacity: hovered ? 1 : 0 }}
        >
          Learn more
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p
                className="mb-3"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
              >
                Services
              </p>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                What we build
              </h2>
            </div>
            <p
              className="max-w-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(248,250,252,0.4)", lineHeight: 1.7 }}
            >
              Not sure which service fits?{" "}
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ color: "#6C4DFF", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Book a free discovery call.
              </button>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
