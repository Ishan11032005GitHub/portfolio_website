import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">
            I
          </div>
          <span>
            Ishan <span className="text-muted-foreground">| Developer</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
