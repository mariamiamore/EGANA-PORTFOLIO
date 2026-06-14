import { motion } from "motion/react";
import { Mail, Github, Facebook } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "eganamariel@gmail.com", href: "mailto:eganamariel@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/mariamiamore", href: "#" },
  { icon: Facebook, label: "Facebook", value: "@ary.egana.71", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "rgba(0,0,0,0.12)", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4440f" }}>05 — GET IN TOUCH</div>
          <div style={{ flex: 1, height: "1px", borderTop: "1px solid rgba(0,0,0,0.12)" }} />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#111111" }}>CONTACT</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "1.2rem", color: "#111111", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              I’m a versatile developer who enjoys the process of learning and adapting to new technical stacks. I’m currently open to new roles in software engineering where I can apply my skills in web development and systems integration to help the team succeed.
            </p>

            <div className="flex flex-col gap-4">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #11111", borderRadius: "2px", transition: "all 0.2s", flexShrink: 0 }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#111111"; e.currentTarget.style.backgroundColor = "#111111"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#d4440f"; e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    <Icon size={14} color= "#111111" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#111111", marginBottom: "0.1rem" }}>{label.toUpperCase()}</div>
                    <div
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "rgba(139, 128, 98, 0.75)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#d4440f")}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#d4440f" }}>MARY ELIZABETH EGANA</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#444444" }}>© {new Date().getFullYear()} · COMPUTER ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}
