export function Footer() {
  const links = ["Work", "Services", "Process", "Contact"];

  return (
    <footer style={{ background: "#080C14", borderTop: "1px solid rgba(108,77,255,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1B0A4F 0%, #6C4DFF 100%)", borderRadius: "6px" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "11px", color: "#fff" }}>HK</span>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F8FAFC" }}>
              HIMAKAS IT Solutions
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "13px", color: "rgba(248,250,252,0.35)" }}
                className="hover:text-foreground transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(248,250,252,0.2)", letterSpacing: "0.06em" }}>
            © 2024 HIMAKAS · Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
