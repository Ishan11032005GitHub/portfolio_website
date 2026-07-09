import { motion } from "framer-motion";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative grid gap-6">
        <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block" />
        {portfolio.experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="glass-hover scanline relative rounded-3xl p-6 md:ml-16 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -left-[3.15rem] top-8 hidden h-5 w-5 rounded-full border border-primary/50 bg-background shadow-[0_0_24px_hsla(193,88%,60%,0.35)] md:block">
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </div>
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-lg font-bold text-primary">
                  {exp.company.charAt(0)}
                </div>
                <div>
                  <p className="mission-label mb-2">Deployment History</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-border bg-secondary/70 px-4 py-1.5 font-mono text-sm text-muted-foreground">
                {exp.period}
              </span>
            </div>

            <ul className="grid gap-3">
              {exp.bullets.map((bullet, bulletIndex) => (
                <motion.li
                  key={bulletIndex}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/30 p-4 text-foreground/80"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.3, delay: 0.3 + bulletIndex * 0.1 }}
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
