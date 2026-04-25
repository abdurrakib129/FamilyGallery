import { memo } from "react";
import { motion } from "framer-motion";
import type { Person } from "@/data/family";

type Props = {
  person: Person;
  onClick?: () => void;
  clickable?: boolean;
  index?: number;
};

function PersonFrameImpl({ person, onClick, clickable = false, index = 0 }: Props) {
  // Cap stagger so later items don't have huge delays
  const delay = Math.min(index, 6) * 0.06;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      whileHover={clickable ? { y: -6 } : undefined}
      onClick={onClick}
      className={`group flex flex-col items-center w-full max-w-[280px] mx-auto ${
        clickable ? "cursor-pointer" : ""
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Frame */}
      <div className={`ornate-frame w-full ${clickable ? "glow-pulse" : ""}`}>
        <div className="relative overflow-hidden rounded-sm bg-black">
          <img
            src={person.image}
            alt={person.name}
            width={512}
            height={640}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
        </div>
      </div>

      {/* Nameplate */}
      <div
        className="parchment mt-4 px-5 py-3 rounded-md shadow-lg w-full max-w-[260px] border border-[var(--gold)]/40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, oklch(0.94 0.04 80), oklch(0.88 0.05 75))",
          boxShadow:
            "0 8px 20px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        <h3 className="text-center font-bold text-base sm:text-lg mb-2 text-[var(--frame)] tracking-wide">
          {person.name}
        </h3>
        <ul className="space-y-1 text-xs sm:text-sm text-[var(--ink)]">
          {person.info.map((item, i) => (
            <li key={i} className="flex gap-1.5">
              <span className="text-[var(--frame)] font-semibold shrink-0">•</span>
              <span className="font-semibold shrink-0">{item.label}:</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[var(--frame)] truncate"
                >
                  {item.value}
                </a>
              ) : (
                <span className="truncate">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {clickable && (
        <span className="mt-2 text-xs text-[var(--gold)] italic">
          ↑ ছবিতে ক্লিক করুন
        </span>
      )}
    </motion.div>
  );
}

export const PersonFrame = memo(PersonFrameImpl);
