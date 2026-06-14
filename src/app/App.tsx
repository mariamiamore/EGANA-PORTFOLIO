import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { CADSamples } from "./components/CAD";
import { Certificates } from "./components/Certificates";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Nav />
      <Hero />
      <Projects />
      <Certificates />
       <CADSamples/>
      <Skills />
      <Contact />
    </div>
  );
}
