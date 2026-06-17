import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const budgetOptions = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000–$15,000", "$15,000+"];
const projectTypes = ["Web Application", "Mobile App", "IoT System", "UI/UX Design", "System Integration", "Other"];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "", type: "", brief: "" });

  const inputStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14px",
    color: "#F8FAFC",
    background: "rgba(15,23,42,0.8)",
    border: "1px solid rgba(108,77,255,0.18)",
    borderRadius: "10px",
    padding: "12px 14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="mb-4"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6C4DFF", textTransform: "uppercase" }}
            >
              Contact
            </p>
            <h2
              className="mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#F8FAFC", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Start your project today
            </h2>
            <p
              className="mb-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "15px", color: "rgba(248,250,252,0.45)", lineHeight: 1.7 }}
            >
              Tell us about your project and we'll be in touch within 24 hours. We take on a limited number of projects each quarter — reach out early.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                { label: "Email", value: "hello@himakas.id", icon: "✉" },
                { label: "WhatsApp", value: "+62 812 3456 7890", icon: "💬" },
                { label: "Location", value: "Yogyakarta, Indonesia", icon: "📍" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(108,77,255,0.1)", borderRadius: "10px", border: "1px solid rgba(108,77,255,0.2)", fontSize: "16px" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(248,250,252,0.3)", textTransform: "uppercase", marginBottom: "1px" }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#F8FAFC" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Book a call CTA */}
            <a
              href="#contact"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 px-6 py-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,201,167,0.2)]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#080C14",
                background: "linear-gradient(135deg, #00C9A7, #00a88c)",
                borderRadius: "10px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1 7h14M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Book a free 30-min discovery call
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="p-8"
            style={{
              background: "#0F172A",
              borderRadius: "20px",
              border: "1px solid rgba(108,77,255,0.15)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,201,167,0.12)", borderRadius: "50%", border: "1px solid rgba(0,201,167,0.3)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6 12-12" stroke="#00C9A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: "#F8FAFC", marginBottom: "12px" }}>
                  Brief received!
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(248,250,252,0.45)", lineHeight: 1.6, maxWidth: "280px" }}>
                  We'll review your project and get back to you within 24 hours. Check your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F8FAFC", marginBottom: "20px" }}>
                  Send your project brief
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(248,250,252,0.4)", display: "block", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Budi Santoso"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(248,250,252,0.4)", display: "block", marginBottom: "6px" }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="budi@company.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(248,250,252,0.4)", display: "block", marginBottom: "6px" }}>
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" style={{ background: "#0F172A" }}>Select budget range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} style={{ background: "#0F172A" }}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(248,250,252,0.4)", display: "block", marginBottom: "6px" }}>
                    Project Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" style={{ background: "#0F172A" }}>Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#0F172A" }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(248,250,252,0.4)", display: "block", marginBottom: "6px" }}>
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="Describe your project, goals, and any technical requirements…"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(108,77,255,0.3)]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#fff",
                    background: "linear-gradient(135deg, #1B0A4F, #6C4DFF)",
                    borderRadius: "10px",
                    border: "1px solid rgba(108,77,255,0.4)",
                    marginTop: "8px",
                  }}
                >
                  Send your project brief →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
