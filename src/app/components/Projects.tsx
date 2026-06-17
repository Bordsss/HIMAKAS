import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const projects = [
  {
    id: "01",
    title: "Lumière",
    subtitle: "E-Commerce Platform",
    category: "UI/UX · Development",
    year: "2024",
    description: "A high-end fashion retail experience with cinematic product presentation, personalised recommendations, and seamless checkout flow.",
    tags: ["React", "Node.js", "Stripe", "Framer"],
    image: "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=1200&h=800&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "02",
    title: "Nocturne",
    subtitle: "Music Streaming App",
    category: "Product Design",
    year: "2024",
    description: "Spatial audio streaming platform designed around the listening ritual — dark, tactile, deeply intentional.",
    tags: ["React Native", "GraphQL", "WebAudio"],
    image: "https://images.unsplash.com/photo-1726910133626-9b573eca70ff?w=1200&h=800&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "03",
    title: "Atelier",
    subtitle: "Portfolio CMS",
    category: "Full Stack",
    year: "2023",
    description: "A bespoke content management system built for creative studios — flexible, beautiful, fast.",
    tags: ["Next.js", "Sanity", "Vercel"],
    image: "https://images.unsplash.com/photo-1690321607902-2799a1e8eaaa?w=1200&h=800&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "04",
    title: "Meridian",
    subtitle: "Analytics Dashboard",
    category: "Data Viz · Frontend",
    year: "2023",
    description: "Real-time business intelligence dashboard with custom charting, anomaly detection, and contextual insights.",
    tags: ["TypeScript", "D3.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=1200&h=800&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "05",
    title: "Veil",
    subtitle: "Privacy App",
    category: "Mobile · Security",
    year: "2023",
    description: "End-to-end encrypted communication platform with a focus on minimal, trustworthy UI design.",
    tags: ["Swift", "Kotlin", "Signal Protocol"],
    image: "https://images.unsplash.com/photo-1730107197085-f873ee71a3e4?w=1200&h=800&fit=crop&auto=format",
    featured: false,
  },
];

function FeaturedProject({ project }: { project: typeof projects[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ background: "#0f0e0c" }}
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: "52%" }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-transparent" />

        {/* Project number */}
        <div className="absolute top-8 left-8 md:left-12">
          <span
            className="text-xs tracking-[0.3em] uppercase text-foreground/30"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.id}
          </span>
        </div>

        {/* Category + year */}
        <div className="absolute top-8 right-8 md:right-12 flex items-center gap-4">
          <span
            className="text-xs tracking-[0.2em] uppercase text-foreground/30"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 md:px-12 py-10 border-t border-border grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3 text-accent"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.category}
          </p>
          <h3
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm text-foreground/30"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <p
            className="text-sm text-foreground/50 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase text-foreground/30 border border-border px-3 py-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 group/link shrink-0 ml-4">
              <span
                className="text-xs tracking-[0.15em] uppercase text-foreground/30 group-hover/link:text-foreground transition-colors duration-300"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                View
              </span>
              <div className="w-6 h-px bg-foreground/20 group-hover/link:w-10 group-hover/link:bg-accent transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden mb-5" style={{ paddingBottom: "66%", position: "relative" }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)", opacity: hovered ? 0.75 : 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090a]/70 to-transparent" />
        <div
          className="absolute top-4 left-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/25">{project.id}</span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-2 text-accent/70"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.category}
          </p>
          <h4
            className="text-2xl leading-tight text-foreground mb-1"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {project.title}
          </h4>
          <p
            className="text-xs text-foreground/30"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            {project.subtitle}
          </p>
        </div>
        <span
          className="text-xs text-foreground/20 mt-1 shrink-0"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Section header */}
        <div ref={titleRef} className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Selected Work
            </p>
            <h2
              className="text-[clamp(1.8rem,4vw,3rem)] text-foreground leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Recent Projects
            </h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-foreground/20"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {projects.length} Projects
          </motion.span>
        </div>

        {/* Featured project */}
        <div className="mb-4">
          <FeaturedProject project={featured} />
        </div>

        {/* Grid of remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
