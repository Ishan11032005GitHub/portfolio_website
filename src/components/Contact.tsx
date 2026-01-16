import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";
import Section from "./Section";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        className="glass-hover rounded-3xl p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left - CTA */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's build something{" "}
              <span className="gradient-text">real.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you're hiring for SDE / Full-Stack / AI tooling roles, I'm open
              to internships and collaborative projects. Let's connect and
              create something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href={portfolio.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LeetCode"
              >
                <Code className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${portfolio.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground font-medium">
                  {portfolio.email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
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

        {/* Footer Info */}
        <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Built with React + Three.js (React Three Fiber)
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
