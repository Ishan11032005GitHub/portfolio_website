import { motion } from "framer-motion";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {portfolio.experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="glass-hover rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-lg">
                  {exp.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((bullet, bulletIndex) => (
                <motion.li
                  key={bulletIndex}
                  className="flex items-start gap-3 text-foreground/80"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + bulletIndex * 0.1 }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
