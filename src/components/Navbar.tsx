import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#home" },
  { label: "Work", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Source Code", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/86 backdrop-blur-xl"
          : "bg-background/30 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="group flex items-center gap-3 font-semibold tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:border-primary/60">
            {portfolio.firstName.charAt(0)}
          </div>
          <span className="text-sm md:text-base">
            {portfolio.firstName} <span className="text-muted-foreground">| Developer</span>
          </span>
        </a>

        <nav className="mission-panel hidden items-center gap-1 rounded-full px-2 py-1 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/15"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
