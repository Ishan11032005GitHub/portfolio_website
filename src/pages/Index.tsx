import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { portfolio } from "@/data/portfolio";

const Index = () => {
  return (
    <main className="min-h-screen grid-bg relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 circuit-bg opacity-35" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
