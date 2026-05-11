import { Icon } from "./Icon";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>

        <ul
          role="list"
          className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <li key={s.id}>
              <article className="group relative h-full rounded-2xl border border-line bg-white p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] hover:border-sky/60">
                <Icon
                  name={s.icon}
                  className="w-14 h-14 text-navy stroke-[1.6] group-hover:text-lake transition-colors"
                />
                <h3 className="mt-6 font-display text-xl font-semibold text-navy leading-tight">
                  {s.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
