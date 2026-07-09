import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <span className="status-dot" />
          </div>
          <div>
            <p className="mission-label">Mission Control</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-border via-primary/30 to-transparent md:block" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
