import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="glass-hover rounded-3xl p-6 md:p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {project.name.charAt(0)}
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href={project.repo}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Repository"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              {project.name}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.highlights[0]}
            </p>

            <ul className="space-y-2 mb-6 flex-grow">
              {project.highlights.slice(1).map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
