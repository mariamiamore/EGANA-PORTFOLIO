import { motion } from "motion/react";
import { Award, Calendar } from "lucide-react";

const certificates = [
  {
    id: "01",
    title: "Discover Arduino: Hands-On Exploration of Embedded Technologies",
    issuer: "Association of Computer Engineering Students of PUP-Binan",
    date: "June 2024",
    type: "Workshop",
    description: "Gained practical experience in breadboard circuit design, specifically using ultrasonic sensors, LEDs, and buzzers for interactive system development.",
    color: "#d4440f",
  },
  {
    id: "02",
    title: "Next-Gen AI in Action: Transforming Academe and Engineering Workflows",
    issuer: "Institute of Computer Engineers of the Philippines, ICPEP Student Edition",
    date: "December 2024",
    type: "Seminar",
    description: "Gained insights into the deployment of next-generation AI technologies for engineering and academic applications. Analyzed how AI-driven workflows enhance productivity and computational design processes.",
    color: "#2a5c8a",
  },
  {
    id: "03",
    title: "Lifelong Learning for Innovative Networks and Nurturing Generations",
    issuer: "Ask Lex Ph Academy",
    date: "October 2024",
    type: "Webinar",
    description: "Webinar on the importance of lifelong learning and adaptive networking in technical fields. Discussed frameworks for fostering innovation and building professional support systems to nurture long-term development.",
    color: "#4a7c4e",
  },
  {
    id: "04",
    title: "UI/UX in Focus: Integrating Design and Functionality",
    issuer: "Association of Computer Engineering Students of PUP-Binan",
    date: "June 2025",
    type: "Seminar",
    description: "Explored the integration of user-centered design principles with technical functionality. Learned best practices for designing intuitive interfaces and creating responsive prototypes in Figma.",
    color: "#8a4a2a",
  },
  {
    id: "05",
    title: "Level Up Tech, Level Up You: Move Smart Contracts Code Camp",
    issuer: "DEVCON Laguna Chapter",
    date: "May 2026",
    type: "Workshop",
    description: "Technical workshop on smart contract development using Move and Sui. Focused on building secure, decentralized applications and served as the technical training basis for my blockchain-integrated portfolio project.",
    color: "#5a4a8a",
  },
];

export function Certificates() {
  return (
    <section id="certificates" style={{ backgroundColor: "#111111", paddingTop: "4rem", paddingBottom: "rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4440f" }}>03 — CREDENTIALS</div>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(247,245,240,0.1)" }} />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#f7f5f0" }}>CERTIFICATES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(247,245,240,0.08)" }}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 transition-all duration-300"
              style={{ backgroundColor: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#111111")}
            >
              <div style={{ width: "32px", height: "2px", backgroundColor: cert.color, marginBottom: "1.5rem", transition: "width 0.3s" }} />

              <div className="flex items-start justify-between mb-3">
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#555555" }}>{cert.id}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.12em", color: cert.color, border: `1px solid ${cert.color}`, padding: "0.15rem 0.5rem", borderRadius: "2px" }}>
                  {cert.type.toUpperCase()}
                </span>
              </div>

              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em", color: "#f7f5f0", marginBottom: "0.4rem", lineHeight: 1.2 }}>
                {cert.title}
              </h3>

              <div className="flex items-center gap-1.5 mb-4">
                <Award size={11} color="#d4440f" />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.8rem", color: "#888888" }}>{cert.issuer}</span>
              </div>

              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "rgba(247,245,240,0.5)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {cert.description}
              </p>

              <div className="flex items-center gap-1.5">
                <Calendar size={11} color="#555555" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#555555" }}>{cert.date}</span>
              </div>
            </motion.div>
          ))}

          {/* Decorative filler cell */}
          <div style={{ backgroundColor: "#111111", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "4rem", color: "rgba(247,245,240,0.04)", letterSpacing: "-0.02em" }}>5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
