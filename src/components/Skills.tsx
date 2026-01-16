import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Achievements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Grid */}
        <motion.div
          className="glass-hover rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Technical Skills
          </h3>
          <div className="space-y-6">
            {Object.entries(portfolio.skills).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 }}
              >
                <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground/80 hover:bg-primary/20 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="glass-hover rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
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
                className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                <span className="text-foreground/80 leading-relaxed">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Leadership Section */}
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-md font-medium text-foreground mb-4">
              Leadership
            </h4>
            <ul className="space-y-3">
              {portfolio.leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
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
