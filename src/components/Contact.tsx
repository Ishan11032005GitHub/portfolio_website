import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        className="glass-hover scanline rounded-3xl p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="status-dot" />
              <p className="mission-label">Communication Channel</p>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Let's build something{" "}
              <span className="gradient-text">real.</span>
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              If you're hiring for SDE / Full-Stack / AI tooling roles, I'm open
              to internships and collaborative projects. Let's connect and
              create something amazing together.
            </p>

            <div className="flex gap-3">
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-primary/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={portfolio.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-primary/20"
                aria-label="LeetCode"
              >
                <Code className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${portfolio.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/45 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 transition-transform group-hover:scale-105">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground font-medium">
                  {portfolio.email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/45 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="text-foreground font-medium">
                  {portfolio.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end border-t border-border pt-6">
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
