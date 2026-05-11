"use client";

import { motion, useReducedMotion } from "motion/react";

type PulseRingProps = {
  className?: string;
  /** Tailwind background utility for the ring color, e.g. "bg-leaf/40" */
  color?: string;
  /** seconds between pulses */
  interval?: number;
};

/**
 * Renders 2 expanding/fading rings behind a CTA. Place inside a
 * `relative` parent. Decorative only.
 */
export function PulseRing({
  className,
  color = "bg-leaf/40",
  interval = 2.4,
}: PulseRingProps) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`}
    >
      {[0, interval / 2].map((delay, i) => (
        <motion.span
          key={i}
          className={`absolute inset-0 rounded-full ${color}`}
          initial={{ scale: 1, opacity: 0.45 }}
          animate={{ scale: 1.45, opacity: 0 }}
          transition={{
            duration: interval,
            delay,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />
      ))}
    </span>
  );
}
