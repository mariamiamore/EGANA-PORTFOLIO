import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import cadImg1 from "./IMAGES/CAD1.png"; 
import cadImg2 from "./IMAGES/CAD2.png";
import cadImg3 from "./IMAGES/CAD3.png";


const cadSamples = [
  {
    id: "01",
    title: "Sample 1",
    date: "May 2025",
    image: cadImg1,
    demoUrl: "https://www.tinkercad.com/things/kBh94ayfjbn-eganaactivity10?sharecode=undefined",
  },
  {
    id: "02",
    title: "Sample 2",
    date: "May 2025",
    image: cadImg2,
    demoUrl: "https://www.tinkercad.com/things/1pKtOkzaHxF-activity-10?sharecode=V-85teIUCT9rY3xbtAaeVZfP2dxKep1m02iCW1HtL6s",
  },
  {
    id: "03",
    title: "Sample 3",
    date: "May 2025",
    image: cadImg3,
    demoUrl: "https://www.tinkercad.com/things/7oiyFBz8mvL-activity?sharecode=JwjulomVe8ciQv_0vZ-1Fv9K6AUDVhfz8m-MGYo9zaU",
  },
];

export function CADSamples() {
  return (
    <section id="cad" style={{ backgroundColor: "#f7f5f0", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", color: "#d4440f" }}>04 — DESIGN</div>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.12)" }} />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#111111" }}>CAD SAMPLES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cadSamples.map((cad, i) => (
            <motion.div
              key={cad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden mb-4" style={{ borderRadius: "2px", backgroundColor: "#e8e5de" }}>
                <img 
                  src={cad.image} 
                  alt={cad.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#666666", marginBottom: "0.25rem" }}>{cad.id}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#111111" }}>{cad.title}</h3>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#d4440f" }}>{cad.date}</div>
              </div>

              {/* Live Demo Button Logic */}
              <div className="mt-4">
                {cad.demoUrl ? (
                  <a
                    href={cad.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex", alignItems: "center", gap: "0.4rem", 
                      background: "transparent", color: "#111111", 
                      border: "1px solid rgba(0,0,0,0.2)", padding: "0.5rem 1.2rem", 
                      cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", 
                      fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", 
                      borderRadius: "2px", textDecoration: "none", transition: "all 0.2s" 
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#d4440f"; e.currentTarget.style.color = "#d4440f"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#111111"; }}
                  >
                    <ExternalLink size={13} /> VIEW IN TINKERCAD
                  </a>
                ) : (
                  <span style={{ 
                    display: "flex", alignItems: "center", gap: "0.4rem", 
                    background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.25)", 
                    border: "1px solid rgba(0,0,0,0.05)", padding: "0.5rem 1.2rem", 
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, 
                    fontSize: "0.75rem", letterSpacing: "0.1em", borderRadius: "2px", cursor: "default" 
                  }}>
                    <ExternalLink size={13} /> NO PUBLIC MODEL
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}