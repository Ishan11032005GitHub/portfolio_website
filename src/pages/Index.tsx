import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { portfolio } from "@/data/portfolio";

const Index = () => {
  return (
    <main className="min-h-screen grid-bg relative">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
