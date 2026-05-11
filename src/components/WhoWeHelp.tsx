"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "./Icon";
import { audiences } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import { RevealStagger } from "./motion/RevealStagger";

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.6, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 18 },
  },
};

export function WhoWeHelp() {
  const reduced = useReducedMotion();

  return (
    <section
      id="who-we-help"
      aria-labelledby="audiences-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(111,181,232,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
            Who We Help
          </p>
          <h2
            id="audiences-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
          >
            Built for Real People, Not Big Corporate IT
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            We focus on the folks traditional IT companies overlook — the
            people who just want their tech to <em>work</em>.
          </p>
        </Reveal>

        <RevealStagger
          as="ul"
          role="list"
          speed="normal"
          className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audiences.map((a) => (
            <motion.li key={a.id} variants={cardVariant}>
              <article className="group flex h-full flex-col items-center text-center rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                <motion.span
                  variants={reduced ? undefined : iconVariant}
                  className="inline-flex"
                >
                  <Icon
                    name={a.icon}
                    className="w-14 h-14 text-navy stroke-[1.6] transition-colors duration-300 group-hover:text-lake"
                  />
                </motion.span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                  {a.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {a.description}
                </p>
              </article>
            </motion.li>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
