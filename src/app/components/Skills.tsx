import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Microsoft Office Suite",
    skills: [
      { name: "Microsoft Word", level: 85 },
      { name: "Microsoft Excel", level: 80 },
      { name: "Microsoft Powerpoint", level: 50 },
    ],
  },
  {
    category: "Computer Aided Design",
    skills: [
      { name: "Sketchup", level: 85 },
      { name: "TinkerCAD", level: 80 },
      { name: "AutoCAD", level: 50 },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "UI/UX (Figma)", level: 80 },
      { name: "Web Development", level:75 },
    ],
  },
];

const tools = ["C#", "HTML", "JavaScript", "CSS", "Figma"];

export function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "#111111", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4440f" }}>04 — EXPERTISE</div>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(247,245,240,0.1)" }} />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#f7f5f0" }}>SKILLS</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.15em", color: "#d4440f", marginBottom: "1.5rem" }}>
                {group.category.toUpperCase()}
              </div>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, si) => (
                  <div key={`${group.category}-${si}`}>
                    <div className="flex justify-between mb-1.5">
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "#f7f5f0" }}>{skill.name}</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#888888" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "2px", backgroundColor: "rgba(0,0,0,0.1)", borderRadius: "1px", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: "100%", backgroundColor: "#d4440f" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "2.5rem" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.15em", color: "#666666", marginBottom: "1.2rem" }}>
            TOOLS & ENVIRONMENT
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  color: "#8a4a2a",
                  backgroundColor: "rgba(0,0,0,0.06)",
                  padding: "0.35rem 0.8rem",
                  borderRadius: "2px",
                  border: "1px solid #888888",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
