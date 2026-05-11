"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "./Icon";
import { serviceAreas, site } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import { RevealStagger, RevealItem } from "./motion/RevealStagger";

export function ServiceArea() {
  const reduced = useReducedMotion();

  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-navy/[0.05] dot-grid"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
              Where We Help
            </p>
            <h2
              id="service-area-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
            >
              Proudly serving Alexandria &amp; the lakes area.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We come to you in {site.city} and the surrounding lakes
              communities. If your home or cabin is nearby, give us a call —
              we likely cover your area.
            </p>
            <RevealStagger
              as="ul"
              role="list"
              speed="fast"
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5"
            >
              {serviceAreas.map((area) => (
                <RevealItem
                  as="li"
                  key={area}
                  direction="left"
                  className="flex items-start gap-2 text-[15px] text-ink-soft"
                >
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lake/10 text-lake">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{area}</span>
                </RevealItem>
              ))}
            </RevealStagger>
            <p className="mt-7 text-sm text-ink-muted">
              Don&rsquo;t see your town? We still might cover it.{" "}
              <a
                href={site.phoneHref}
                className="fancy-underline font-semibold text-lake hover:text-lake-700"
              >
                Call {site.phone}
              </a>{" "}
              and ask.
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-sky/30 via-white/0 to-leaf/20 blur-md opacity-70" />
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-line shadow-[var(--shadow-card)] bg-white">
              <iframe
                title={`Map of ${site.city}, ${site.region}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-95.6%2C45.7%2C-95.15%2C46.05&amp;layer=mapnik&amp;marker=45.8852%2C-95.3775"
                className="block h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating pin marker */}
              <motion.span
                aria-hidden
                initial={{ y: 0 }}
                animate={reduced ? undefined : { y: [-4, 0, -4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[140%]"
              >
                <span className="relative flex">
                  <span className="absolute inset-0 rounded-full bg-sun/40 blur-md" />
                  <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sun shadow-lg ring-2 ring-sun/40">
                    <Icon name="map-pin" className="w-5 h-5 stroke-[2.2]" />
                  </span>
                </span>
              </motion.span>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
