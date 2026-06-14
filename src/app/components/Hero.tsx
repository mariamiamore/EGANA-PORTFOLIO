import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-end pb-16 px-6 pt-32 relative overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Grid rule lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(247,245,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent block */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left", backgroundColor: "#d4440f", height: "3px", width: "120px", marginBottom: "2rem" }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: "0.15em", fontSize: "0.75rem", color: "#d4440f", marginBottom: "1rem" }}
            >
              COMPUTER ENGINEERING
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                lineHeight: 0.9,
                color: "#f7f5f0",
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              MARY ELIZABETH
              <br />
              <span style={{ color: "#d4440f" }}>EGANA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "1.1rem", color: "rgba(247,245,240,0.65)", maxWidth: "480px", lineHeight: 1.7 }}
            >
             Third-year Computer Engineering student eager to specialize in hardware design. I enjoy the challenge of working with physical systems, and I am committed to sharpening my knowledge across the entire hardware-software stack
            </motion.p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ borderLeft: "1px solid rgba(247,245,240,0.15)", paddingLeft: "1.5rem" }}
            >
              {[
                { label: "PROJECTS", value: "4" },
                { label: "CERTIFICATES", value: "5" },
              ].map(({ label, value }) => (
                <div key={label} style={{ marginBottom: "1.2rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(247,245,240,0.4)", marginBottom: "0.2rem" }}>{label}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "2rem", color: value === "NOW" ? "#d4440f" : "#f7f5f0" }}>{value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 flex items-center gap-2 transition-colors duration-200 hover:text-[#d4440f]"
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(247,245,240,0.4)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em", fontSize: "0.75rem" }}
        >
          <ArrowDown size={14} />
          SCROLL TO EXPLORE
        </motion.button>
      </div>
    </section>
  );
}
