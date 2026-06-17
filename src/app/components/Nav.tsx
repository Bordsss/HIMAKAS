import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,12,20,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(108,77,255,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1B0A4F 0%, #6C4DFF 100%)",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "12px", color: "#fff", letterSpacing: "-0.02em" }}>
                HK
              </span>
            </div>
            <span
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F8FAFC", letterSpacing: "-0.01em" }}
            >
              HIMAKAS
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 text-sm transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                background: "linear-gradient(135deg, #1B0A4F 0%, #6C4DFF 100%)",
                color: "#fff",
                borderRadius: "8px",
                border: "1px solid rgba(108,77,255,0.4)",
              }}
            >
              Start a Project
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground/70 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(8,12,20,0.97)", backdropFilter: "blur(24px)" }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.id)}
                className="text-4xl text-foreground/70 hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              onClick={() => scrollTo("contact")}
              className="mt-4 px-8 py-3 text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                background: "linear-gradient(135deg, #1B0A4F, #6C4DFF)",
                borderRadius: "10px",
              }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
