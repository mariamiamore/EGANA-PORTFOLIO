import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import quizletImg from "./IMAGES/QUIZLET.png";
import marineImg from "./IMAGES/MARINE-FLEET.png";
import dtracsImg from "./IMAGES/DTRACS1.png";
import suiImg from "./IMAGES/SUI.png";

const projects = [
  {
    number: "01",
    title: "Reviewer",
    description:
      "This project is a Quizlet-like that allows users to create and manage their own flashcard reviewers using a C# programming language.",
    tech: ["C#"],
    role: "Developer",
    year: "2024",
    image: quizletImg,
    githubUrl: "https://github.com/mariamiamore/Quizlet",
    demoUrl: "",
  },
  {
    number: "02",
    title: "Prototype of an Autonomous Marine Fleet (ROV) w/ camera sensors to detect cracks on underwater objects",
    description:
      "Designed the structural housing and electrical integration for an autonomous ROV system. The architecture utilizes integrated sensor arrays to execute real-time image processing for the identification and logging of surface cracks.",
    tech: ["HTML", "C++", "CSS", "JavaScript"],
    role: "Electrical Technician / Housing Design",
    year: "2025",
    image: marineImg,
    githubUrl: "https://github.com/ramuelaceron/WebApp_Marine-Fleet_UI",
    demoUrl: "",
  },
  {
    number: "03",
    title: "Document Tracking and Compliance System (DTRACS)",
    description:
      "A centralized tracking system for the Department of Education, Biñan City. It digitizes document lifecycles to ensure data accuracy, audit compliance, and streamlined record-keeping.",
    tech: ["HTML", "JavaScript", "React", "CSS"],
    role: "Web Application Developer",
    year: "2025",
    image: dtracsImg,
    githubUrl: "https://github.com/ramuelaceron/Document-Tracking-and-Compliance-System-DTRACS-USERS",
    demoUrl: "",
  },
  {
    number: "04",
    title: "Move Smart Contracts Code Camp",
    description:
      "Developed a decentralized portfolio application during the Move Smart Contracts Code Camp. The project focuses on implementing on-chain data storage and smart contract logic using the Move programming language and the Sui blockchain ecosystem.",
    tech: ["TypeScript", "JavaScript", "Move", "HTML", "CSS"],
    role: "Developer",
    year: "2026",
    image: suiImg,
    githubUrl: "https://github.com/mariamiamore/DEVCONSUI_MoveCodeCamp2026_Level1_Egana",
    demoUrl: "https://devconsui-move-code-camp2026-level1-three-puce.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#f7f5f0", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4440f" }}>02 — WORK</div>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.12)" }} />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#111111" }}>PROJECTS</div>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
              style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 py-10">
                {/* Info */}
                <div className="md:col-span-5 flex flex-col justify-between pr-8">
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#666666", marginBottom: "0.5rem" }}>{p.number}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.01em", color: "#111111", marginBottom: "1rem", lineHeight: 1.15 }}>
                      {p.title}
                    </h3>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#444444", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.05em",
                            color: "#666666",
                            border: "1px solid rgba(0,0,0,0.15)",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "2px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#d4440f" }}>
                      {p.role} · {p.year}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    {p.githubUrl ? (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#111111", color: "#f7f5f0", border: "none", padding: "0.5rem 1.2rem", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", borderRadius: "2px", textDecoration: "none", transition: "background 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4440f")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#111111")}
                      >
                        <Github size={13} /> SOURCE
                      </a>
                    ) : (
                      <span
                        style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(0,0,0,0.15)", color: "rgba(247,245,240,0.4)", border: "none", padding: "0.5rem 1.2rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", borderRadius: "2px", cursor: "default" }}
                      >
                        <Github size={13} /> SOURCE
                      </span>
                    )}

                    {p.demoUrl ? (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "transparent", color: "#111111", border: "1px solid rgba(0,0,0,0.2)", padding: "0.5rem 1.2rem", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", borderRadius: "2px", textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#d4440f"; e.currentTarget.style.color = "#d4440f"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#111111"; }}
                      >
                        <ExternalLink size={13} /> LIVE DEMO
                      </a>
                    ) : (
                      <span
                        style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "transparent", color: "rgba(0,0,0,0.25)", border: "1px solid rgba(0,0,0,0.1)", padding: "0.5rem 1.2rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", borderRadius: "2px", cursor: "default" }}
                      >
                        <ExternalLink size={13} /> LIVE DEMO
                      </span>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="md:col-span-7 overflow-hidden" style={{ borderRadius: "2px" }}>
                  <div
                    className="w-full h-35 md:h-[97%] mt-2  transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#e8e5de",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
