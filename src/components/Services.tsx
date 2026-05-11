import { Icon } from "./Icon";
import { services } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import { RevealStagger, RevealItem } from "./motion/RevealStagger";
import { DrawIcon } from "./motion/DrawIcon";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* faint dot-grid backdrop for "tech blueprint" feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-navy/[0.07] dot-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
          >
            In-Home Tech Support in Alexandria, MN
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Real solutions for the tech in your everyday life — from slow
            laptops and weak Wi-Fi to smart TVs, phones, and everything in
            between.
          </p>
        </Reveal>

        <RevealStagger
          as="ul"
          speed="fast"
          role="list"
          className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <RevealItem as="li" key={s.id} direction="up">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-sky/70">
                {/* animated gradient border on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lake/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(140px 90px at 80% 0%, rgba(30,120,200,0.10), transparent 60%)",
                  }}
                />

                <span className="absolute top-5 right-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-line group-hover:text-lake/70 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex justify-center">
                  <DrawIcon duration={0.7} delay={0.05 * i}>
                    <Icon
                      name={s.icon}
                      className="w-14 h-14 text-navy stroke-[1.6] group-hover:text-lake transition-colors duration-300"
                    />
                  </DrawIcon>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-navy leading-tight text-center">
                  {s.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft text-center">
                  {s.blurb}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[15px] text-ink-soft"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 w-5 h-5 shrink-0 text-leaf stroke-[2]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
