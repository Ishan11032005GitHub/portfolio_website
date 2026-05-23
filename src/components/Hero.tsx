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
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text glow-text">{portfolio.firstName}</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {portfolio.tagline}
            </motion.p>

            <motion.p
              className="text-foreground/80 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {portfolio.about}
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
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold text-primary">
                IT
              </div>
              <div className="text-sm">
                <div className="text-foreground font-medium">
                  {portfolio.location}
                </div>
                <div className="text-muted-foreground">{portfolio.email}</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="opacity-55">
              <ThreeScene />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/80 via-accent/50 to-primary/20 p-[2px] shadow-2xl shadow-primary/25">
                <img
                  src="/ishan-profile.webp"
                  alt={`${portfolio.name} portrait`}
                  className="h-[330px] w-[245px] rounded-[calc(2rem-2px)] object-cover object-top md:h-[390px] md:w-[285px]"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/90 px-5 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur">
                  {portfolio.name}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
