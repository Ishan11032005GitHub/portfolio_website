import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="glass-hover flex flex-col rounded-3xl p-5 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <span className="font-mono text-base font-semibold text-primary">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="mission-label mb-1.5">Project System</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                </div>
              </div>
              {(project.live || project.repo) && (
                <div className="flex gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-primary/20"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-primary/20"
                      aria-label={`${project.name} repository`}
                    >
                      <Github className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <p className="mb-4 text-sm font-medium text-primary">
              {project.subtitle}
            </p>

            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.highlights[0]}
            </p>

            <ul className="mb-6 grid flex-grow gap-2">
              {project.highlights.slice(1).map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-border pt-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                <p className="mission-label">Topology</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
