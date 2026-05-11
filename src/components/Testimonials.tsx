import { Icon } from "./Icon";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
            Kind Words
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
          >
            Trusted by neighbors across the lakes.
          </h2>
        </div>

        <ul
          role="list"
          className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <li key={i}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-line">
                <div
                  className="flex gap-0.5 text-sun"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Icon key={idx} name="star" className="w-5 h-5" />
                  ))}
                </div>
                <blockquote className="mt-4 grow font-display text-[17px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-sm text-ink-muted">{t.location}</div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
