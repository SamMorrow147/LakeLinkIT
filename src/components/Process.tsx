"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { processSteps } from "@/lib/site";
import { Reveal } from "./motion/Reveal";

export function Process() {
  const reduced = useReducedMotion();
  const orderRef = useRef<HTMLOListElement>(null);
  const inView = useInView(orderRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28 bg-navy"
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-white/[0.06] dot-grid"
      />

      {/* Drifting blob accents */}
      {!reduced ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lake/30 blur-3xl"
            animate={{ x: [-10, 12, -10], y: [-6, 10, -6] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sun/20 blur-3xl"
            animate={{ x: [10, -12, 10], y: [6, -8, 6] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lake/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sun/20 blur-3xl"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold !text-white"
          >
            Getting help is simple.
          </h2>
          <p className="mt-5 text-lg text-sky-100/90">
            Three friendly steps from frustrated to fixed.
          </p>
        </Reveal>

        <ol
          ref={orderRef}
          role="list"
          className="relative mt-16 grid gap-10 sm:gap-12 md:grid-cols-3"
        >
          {/* Animated SVG connecting line (desktop) */}
          <svg
            aria-hidden
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-[2px] w-[66.66%]"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="processLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(111,181,232,0.3)" />
                <stop offset="50%" stopColor="rgba(111,181,232,0.85)" />
                <stop offset="100%" stopColor="rgba(111,181,232,0.3)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="url(#processLine)"
              strokeWidth="1"
              initial={{ pathLength: reduced ? 1 : 0 }}
              animate={{ pathLength: inView || reduced ? 1 : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {/* Mobile vertical line */}
          <svg
            aria-hidden
            className="md:hidden absolute top-20 bottom-20 left-1/2 -translate-x-1/2 w-[2px]"
            viewBox="0 0 1 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100"
              stroke="rgba(111,181,232,0.55)"
              strokeWidth="1"
              initial={{ pathLength: reduced ? 1 : 0 }}
              animate={{ pathLength: inView || reduced ? 1 : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {processSteps.map((s, i) => (
            <li key={s.step} className="relative text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  inView || reduced
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.6 }
                }
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 16,
                  delay: 0.2 + i * 0.18,
                }}
                className="relative z-10 mx-auto md:mx-0 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy font-display text-3xl font-bold shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] ring-4 ring-navy"
              >
                {s.step}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={
                  inView || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.18,
                }}
                className="mt-7 font-display text-2xl font-semibold !text-white"
              >
                {s.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={
                  inView || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.38 + i * 0.18,
                }}
                className="mt-3 text-[16px] leading-relaxed text-sky-100/90"
              >
                {s.description}
              </motion.p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
