import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProjectExplorer } from "./components/ProjectExplorer";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { color: rgba(248,250,252,0.25); }
        input:focus, textarea:focus, select:focus { border-color: rgba(108,77,255,0.45) !important; box-shadow: 0 0 0 3px rgba(108,77,255,0.12) !important; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
      `}</style>
      <Nav />
      <Hero />
      <ProjectExplorer />
      <Services />
      <TechStack />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
