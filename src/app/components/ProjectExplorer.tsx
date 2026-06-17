import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const categories = ["All", "Web App", "Mobile", "IoT", "Design System", "Enterprise"];

const projects = [
  {
    id: "p1",
    name: "SmartKost Management System",
    category: "Web App",
    description: "Full-stack boarding house management with automated billing, tenant portals, and occupancy analytics.",
    tech: ["React", "Node.js", "MySQL", "Redis"],
    status: "Completed",
    featured: true,
    image: "https://images.unsplash.com/photo-1760670399462-f5e479452c27?w=800&h=450&fit=crop&auto=format",
    year: "2024",
  },
  {
    id: "p2",
    name: "IoT Water Quality Monitor",
    category: "IoT",
    description: "Real-time water quality sensing with ESP32, cloud data pipeline, and alerting dashboard.",
    tech: ["ESP32", "Python", "InfluxDB", "Grafana"],
    status: "Featured",
    featured: false,
    image: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=800&h=450&fit=crop&auto=format",
    year: "2024",
  },
  {
    id: "p3",
    name: "Campus Event Platform",
    category: "Web App",
    description: "End-to-end event registration, ticketing, and check-in system used by 3,000+ students.",
    tech: ["Next.js", "Stripe", "Supabase"],
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?w=800&h=450&fit=crop&auto=format",
    year: "2024",
  },
  {
    id: "p4",
    name: "Himakas Design System",
    category: "Design System",
    description: "Component library and token system serving 6 internal products with consistent visual identity.",
    tech: ["Figma", "Storybook", "TypeScript"],
    status: "In Progress",
    featured: false,
    image: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?w=800&h=450&fit=crop&auto=format",
    year: "2023",
  },
  {
    id: "p5",
    name: "Inventory Tracking App",
    category: "Mobile",
    description: "Cross-platform inventory management for SMEs with barcode scanning and supplier integrations.",
    tech: ["Flutter", "Firebase", "Node.js"],
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1753715613373-90b1ea010731?w=800&h=450&fit=crop&auto=format",
    year: "2023",
  },
  {
    id: "p6",
    name: "Smart Attendance System",
    category: "IoT",
    description: "RFID + face recognition attendance system for academic institutions with real-time reporting.",
    tech: ["Raspberry Pi", "Python", "OpenCV", "PHP"],
    status: "Enterprise",
    featured: false,
    image: "https://images.unsplash.com/photo-1762267683517-6e9bc20675e9?w=800&h=450&fit=crop&auto=format",
    year: "2023",
  },
  {
    id: "p7",
    name: "Financial Dashboard",
    category: "Enterprise",
    description: "Multi-entity financial consolidation dashboard with real-time GL sync and forecasting models.",
    tech: ["React", "D3.js", "C#", "SQL Server"],
    status: "Enterprise",
    featured: false,
    image: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=800&h=450&fit=crop&auto=format",
    year: "2023",
  },
  {
    id: "p8",
    name: "E-Commerce Platform",
    category: "Web App",
    description: "Headless commerce solution with CMS, multi-warehouse fulfillment, and custom checkout flow.",
    tech: ["Next.js", "Shopify API", "Algolia"],
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1760670399462-f5e479452c27?w=800&h=450&fit=crop&auto=format",
    year: "2022",
  },
  {
    id: "p9",
    name: "Arduino Greenhouse Controller",
    category: "IoT",
    description: "Automated climate and irrigation control for commercial greenhouses with mobile alerts.",
    tech: ["Arduino", "ESP32", "MQTT", "Flutter"],
    status: "Completed",
    featured: false,
    image: "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?w=800&h=450&fit=crop&auto=format",
    year: "2022",
  },
];

const statusColors: Record<string, { bg: string; text: string; dot?: boolean }> = {
  Completed:    { bg: "rgba(0,201,167,0.12)", text: "#00C9A7" },
  "In Progress": { bg: "rgba(245,158,11,0.12)", text: "#F59E0B", dot: true },
  Featured:     { bg: "linear-gradient(90deg, rgba(27,10,79,0.8), rgba(108,77,255,0.4))", text: "#A78BFA" },
  Enterprise:   { bg: "rgba(30,45,64,0.9)", text: "#94A3B8" },
};

function StatusBadge({ status }: { status: string }) {
  const s = statusColors[status] || statusColors["Completed"];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1"
      style={{
        background: s.bg,
        borderRadius: "100px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        fontSize: "11px",
        color: s.text,
        letterSpacing: "0.03em",
      }}
    >
      {s.dot && (
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: s.text }} />
      )}
      {status}
    </span>
  );
}

function ProjectCard({ project, index, visible }: { project: typeof projects[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = project.featured;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0.3, y: 0, scale: visible ? 1 : 0.97 }}
      transition={{ duration: 0.3, delay: visible ? index * 0.04 : 0 }}
      className={`group cursor-pointer overflow-hidden ${isFeatured ? "md:col-span-2" : ""}`}
      style={{
        background: "#0F172A",
        borderRadius: "16px",
        border: hovered ? "1px solid rgba(108,77,255,0.4)" : "1px solid rgba(108,77,255,0.1)",
        boxShadow: hovered ? "0 0 40px rgba(108,77,255,0.15)" : "none",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ paddingBottom: isFeatured ? "40%" : "56.25%" }}>
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)", opacity: 0.65 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.9) 100%)" }}
        />

        {/* Hover overlay CTA */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(8,12,20,0.7)", backdropFilter: "blur(4px)" }}
            >
              <span
                className="flex items-center gap-2 px-5 py-2.5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#fff",
                  background: "linear-gradient(135deg, #1B0A4F, #6C4DFF)",
                  borderRadius: "8px",
                  border: "1px solid rgba(108,77,255,0.5)",
                }}
              >
                View case study →
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.1em",
              color: "rgba(248,250,252,0.6)",
              background: "rgba(8,12,20,0.7)",
              backdropFilter: "blur(8px)",
              borderRadius: "6px",
              border: "1px solid rgba(248,250,252,0.08)",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: "#F8FAFC", letterSpacing: "-0.01em", lineHeight: 1.3 }}
          >
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p
          className="mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(248,250,252,0.4)", lineHeight: 1.6 }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag, ti) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: hovered ? ti * 0.04 : 0 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: "rgba(248,250,252,0.35)",
                background: "rgba(108,77,255,0.08)",
                border: "1px solid rgba(108,77,255,0.15)",
                borderRadius: "5px",
                padding: "3px 8px",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchQ = query === "" || p.name.toLowerCase().includes(query.toLowerCase()) || p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const visible = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section id="work" className="py-24 md:py-32" style={{ background: "#080C14" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-3"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
            >
              Project Explorer
            </p>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              40+ projects delivered
            </h2>
          </motion.div>
        </div>

        {/* Sticky filter bar */}
        <div
          className="sticky top-[70px] z-30 mb-8 py-4"
          style={{ background: "rgba(8,12,20,0.9)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="#F8FAFC" strokeWidth="1.3" />
                <path d="M10 10l2.5 2.5" stroke="#F8FAFC" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 40+ projects…"
                className="w-full pl-9 pr-4 py-2.5 outline-none transition-all duration-200 focus:border-primary/50"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "13px",
                  color: "#F8FAFC",
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(108,77,255,0.18)",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-xs transition-all duration-150"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    borderRadius: "8px",
                    border: activeCategory === cat ? "1px solid rgba(108,77,255,0.5)" : "1px solid rgba(248,250,252,0.1)",
                    background: activeCategory === cat ? "rgba(108,77,255,0.2)" : "transparent",
                    color: activeCategory === cat ? "#A78BFA" : "rgba(248,250,252,0.4)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p
            className="mt-3"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(248,250,252,0.25)", letterSpacing: "0.06em" }}
            aria-live="polite"
          >
            Showing {Math.min(visible.length, filtered.length)} of {filtered.length} projects
          </p>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={true}
            />
          ))}
        </motion.div>

        {/* Load more */}
        {filtered.length > 9 && !showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-8 py-3.5 transition-all duration-200 hover:border-primary/40 hover:text-foreground"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "rgba(248,250,252,0.4)",
                border: "1px solid rgba(248,250,252,0.1)",
                borderRadius: "10px",
                background: "transparent",
              }}
            >
              Load more projects ({filtered.length - 9} remaining)
            </button>
          </div>
        )}

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <p
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: "rgba(248,250,252,0.35)" }}
          >
            Inspired?{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ color: "#6C4DFF", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Let's build yours.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
