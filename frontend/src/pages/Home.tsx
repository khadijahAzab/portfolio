import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { initLenis } from "@/lib/scroll";

export default function Home() {
  useEffect(() => initLenis(), []);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#121212] antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
