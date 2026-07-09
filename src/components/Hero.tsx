import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-20 pt-28">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["Profile", portfolio.name],
            ["Location", portfolio.location],
            ["Project Systems", portfolio.projects.length.toString()],
            ["Skill Groups", Object.keys(portfolio.skills).length.toString()],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              className="mission-panel scanline rounded-2xl p-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="mission-label">{label}</p>
                <span className="status-dot" />
              </div>
              <p className="font-mono text-lg text-foreground">{value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mission-panel grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[2rem] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <motion.div
              className="p-6 md:p-10 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="status-dot" />
                <p className="mission-label">Current Mission</p>
              </div>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="gradient-text glow-text">{portfolio.firstName}</span>
              </h1>

              <motion.p
                className="mt-7 max-w-lg text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {portfolio.tagline}
              </motion.p>

              <motion.p
                className="mt-5 max-w-lg leading-relaxed text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {portfolio.about}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="#projects"
                  className="rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:opacity-90"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-8 py-3 text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
                >
                  Contact
                </a>
              </motion.div>

              <motion.div
                className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="rounded-2xl border border-border bg-secondary/40 p-4">
                  <p className="mission-label mb-2">Location</p>
                  <div className="text-foreground font-medium">
                    {portfolio.location}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-4">
                  <p className="mission-label mb-2">Signal</p>
                  <div className="text-foreground font-medium">{portfolio.email}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center border-t border-border bg-secondary/20 p-8 lg:border-l lg:border-t-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-6 rounded-[1.5rem] border border-primary/15" />
            <div className="absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute bottom-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="relative rounded-[2rem] border border-primary/30 bg-background p-2 shadow-2xl shadow-primary/10">
              <img
                src="/ishan-profile.webp"
                alt={`${portfolio.name} portrait`}
                className="h-[330px] w-[245px] rounded-[1.55rem] object-cover object-top md:h-[390px] md:w-[285px]"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/95 px-5 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur">
                {portfolio.name}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
