import { useState, useEffect } from "react";

const navLinks = ["About", "Projects", "Certificates", "CAD", "Skills", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(247,245,240,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="cursor-pointer"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.08em", color: "#d4440f" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MARY ELIZABETH EGANA
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="transition-colors duration-200 hover:text-[#d4440f]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", color: "#111111", background: "none", border: "none", cursor: "pointer" }}
              >
                {link.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
