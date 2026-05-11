"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";
import { PulseRing } from "./motion/PulseRing";

const trustItems = [
  "Local to Alexandria",
  "Patient & Jargon-Free",
  "Same-Week Appointments",
  "Honest, Up-Front Pricing",
];

const HEADLINE_PRIMARY = "Friendly Tech Support";
const HEADLINE_ACCENT = "You Can Trust.";

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const primaryWords = HEADLINE_PRIMARY.split(" ");
  const accentWords = HEADLINE_ACCENT.split(" ");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[65%_center] lg:object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/55 to-white/85 lg:bg-gradient-to-r lg:from-white lg:via-white/85 lg:to-transparent" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent"
          aria-hidden
        />

        {/* drifting gradient mesh blobs (decorative, hidden behind white-fade) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {!reduced && (
            <>
              <motion.span
                aria-hidden
                className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky/40 blur-3xl"
                animate={{ x: [0, 24, -12, 0], y: [0, -16, 12, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                aria-hidden
                className="absolute left-10 -bottom-12 h-80 w-80 rounded-full bg-leaf/25 blur-3xl"
                animate={{ x: [0, -18, 12, 0], y: [0, 16, -14, 0] }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                aria-hidden
                className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-sun/25 blur-3xl"
                animate={{ x: [0, 16, -12, 0], y: [0, -12, 16, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-white/85 px-4 py-1.5 text-sm font-semibold text-lake-700 backdrop-blur shadow-sm"
          >
            <Icon name="map-pin" className="w-4 h-4" />
            Serving Alexandria, MN &amp; the Lakes Area
          </motion.span>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-navy [text-wrap:balance]"
          >
            <motion.span
              className="inline-block"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                },
              }}
            >
              {primaryWords.map((w, i) => (
                <motion.span
                  key={`p-${i}`}
                  variants={wordVariant}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="sun-gradient-text inline-block"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.45 },
                },
              }}
            >
              {accentWords.map((w, i) => (
                <motion.span
                  key={`a-${i}`}
                  variants={wordVariant}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            We help everyday people — seniors, homeowners, lake-cabin owners,
            and small businesses — solve real-world tech problems. No jargon,
            no rush, no judgment. Just patient, local help that works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <span className="relative inline-flex w-full sm:w-auto">
              <PulseRing color="bg-leaf/35" interval={2.6} className="rounded-full" />
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.name} now at ${site.phone}`}
                className="relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf-600 px-7 py-4 text-base sm:text-lg font-semibold text-white shadow-card transition-all duration-200 active:scale-[0.98]"
              >
                <Icon name="phone-call" className="w-5 h-5" />
                Call {site.phone}
              </a>
            </span>
            <a
              href="#contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-sky-50 px-7 py-4 text-base sm:text-lg font-semibold text-navy ring-1 ring-line shadow-card transition-all duration-200 active:scale-[0.98]"
            >
              Request Help
              <Icon
                name="arrow-right"
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 1.05 } },
            }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm sm:text-base text-ink-soft"
          >
            {trustItems.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-flex items-center gap-2"
              >
                <Icon
                  name="check"
                  className="w-5 h-5 shrink-0 text-leaf stroke-[2.25]"
                />
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Scroll cue */}
      {!reduced && (
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          style={{ opacity: cueOpacity }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden sm:flex flex-col items-center gap-2 text-ink-soft/80 hover:text-navy transition-colors"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Icon name="chevron-down" className="w-5 h-5 stroke-[2]" />
          </motion.span>
        </motion.a>
      )}
    </section>
  );
}
