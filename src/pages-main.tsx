import React from "react";
import ReactDOM from "react-dom/client";
import { FamilyGallery } from "@/components/FamilyGallery";
import bgImage from "@/assets/bg.jpg";
import { motion } from "framer-motion";
import "./styles.css";

const PARTICLES = Array.from({ length: 8 }).map((_, i) => ({
  size: (i % 4) + 3,
  left: (i * 13.7) % 100,
  top: (i * 23.3) % 100,
  duration: 6 + (i % 3) * 2,
  delay: (i % 5) * 0.6,
}));

function PagesApp() {
  return (
    <div className="relative min-h-screen vignette">
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.18 0.03 55 / 0.92), oklch(0.22 0.04 60 / 0.92)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--gold)]/30"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              willChange: "transform, opacity",
            }}
            animate={{ y: [0, -24, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-12 pb-6 px-4 text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide shimmer leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            আমরা হটু মন্ডলের পরিবার
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base text-[var(--gold-light)]/70 italic max-w-xl mx-auto"
          >
            ❖ আমাদের বংশের ছবি ও পরিচিতি ❖
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mt-6"
          />
        </motion.header>

        <main className="px-4 pb-16">
          <FamilyGallery />
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="border-t border-[var(--gold)]/20 py-6 px-4 text-center bg-black/40"
        >
          <p className="text-sm text-[var(--gold-light)]/80">
            <span className="gold-text font-semibold">Developed by Rakib</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PagesApp />
  </React.StrictMode>
);
