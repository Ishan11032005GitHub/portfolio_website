import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import AnimatedWaves from "./AnimatedWaves";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 min-h-screen overflow-hidden">
      <AnimatedWaves />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text glow-text">Ishan</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I develop 3D visuals, user interfaces and web applications
            </motion.p>

            <motion.p
              className="text-foreground/80 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I build full-stack systems that don't just work — they ship with
              clean UX, reliable APIs, and performance you can measure.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <div className="text-sm">
                <div className="text-foreground font-medium">
                  {portfolio.location}
                </div>
                <div className="text-muted-foreground">{portfolio.email}</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - 3D SCENE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <ThreeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
