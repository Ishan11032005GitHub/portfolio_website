import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Achievements">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="glass-hover rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="mission-label mb-2">Technology Network</p>
              <h3 className="text-lg font-semibold text-foreground">
                Technical Skills
              </h3>
            </div>
            <span className="status-dot" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border border-primary/10 circuit-bg opacity-40" />
            <div className="relative grid gap-4">
            {Object.entries(portfolio.skills).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                className="rounded-2xl border border-border bg-background/40 p-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_hsla(193,88%,60%,0.55)]" />
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-hover rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Achievements
            </h3>
          </div>

          <ul className="space-y-4">
            {portfolio.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:bg-secondary"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                <span className="text-foreground/80 leading-relaxed">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Leadership Section */}
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="text-md font-medium text-foreground mb-4">
              Leadership
            </h4>
            <ul className="space-y-3">
              {portfolio.leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
