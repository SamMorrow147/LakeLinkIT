"use client";

import { motion } from "motion/react";
import { Icon } from "./Icon";
import { testimonials } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import { RevealStagger, RevealItem } from "./motion/RevealStagger";

const starVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 18 },
  },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 100%, rgba(243,155,44,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
            Kind Words
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
          >
            Trusted by neighbors across the lakes.
          </h2>
        </Reveal>

        <RevealStagger
          as="ul"
          role="list"
          speed="normal"
          className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <RevealItem as="li" key={i} direction="up">
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                <Icon
                  name="quote"
                  className="absolute -top-2 -left-2 w-28 h-28 text-sky/15"
                />
                <motion.div
                  className="relative flex gap-0.5 text-sun"
                  aria-label="5 out of 5 stars"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px 0px" }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.15,
                      },
                    },
                  }}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <motion.span key={idx} variants={starVariant}>
                      <Icon name="star" className="w-5 h-5" />
                    </motion.span>
                  ))}
                </motion.div>
                <blockquote className="relative mt-4 grow font-display text-[17px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-6 border-t border-line pt-4">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-sm text-ink-muted">{t.location}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
