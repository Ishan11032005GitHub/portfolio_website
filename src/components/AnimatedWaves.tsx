import { motion } from "framer-motion";

export default function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary flowing wave */}
      <motion.svg
        className="absolute -right-20 top-20 w-[800px] h-[600px] opacity-30"
        viewBox="0 0 800 600"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(250, 89%, 67%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(280, 80%, 55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(320, 75%, 50%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,300 Q200,200 400,300 T800,300 T1200,300"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          className="animate-wave"
        />
        <motion.path
          d="M-100,350 Q150,250 450,350 T850,350 T1250,350"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="1.5"
          className="animate-wave"
          style={{ animationDelay: "0.5s" }}
        />
        <motion.path
          d="M-50,400 Q180,300 480,400 T880,400 T1280,400"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="1"
          className="animate-wave"
          style={{ animationDelay: "1s" }}
        />
      </motion.svg>

      {/* Secondary flowing lines */}
      <motion.svg
        className="absolute -left-10 bottom-20 w-[600px] h-[400px] opacity-20"
        viewBox="0 0 600 400"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 90%, 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(250, 89%, 67%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 C100,150 200,250 300,200 S500,150 600,200"
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="1.5"
          className="animate-wave"
          style={{ animationDelay: "0.2s" }}
        />
        <motion.path
          d="M0,250 C80,200 180,300 280,250 S480,200 580,250"
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="1"
          className="animate-wave"
          style={{ animationDelay: "0.7s" }}
        />
      </motion.svg>

      {/* Floating orbs for depth */}
      <motion.div
        className="absolute top-32 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
