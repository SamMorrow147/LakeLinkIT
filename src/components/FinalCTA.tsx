import { Icon } from "./Icon";
import { JotformEmbed } from "./JotformEmbed";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-cream to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
              Get In Touch
            </p>
            <h2
              id="cta-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
            >
              Ready for tech help that{" "}
              <span className="sun-gradient-text">finally makes sense?</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Call us, send a message, or fill out the quick form. We&rsquo;ll
              listen, talk through what&rsquo;s going on, and let you know
              exactly how we can help — no pressure.
            </p>

            <ul role="list" className="mt-8 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-line shadow-[var(--shadow-card)] hover:ring-leaf/50 hover:shadow-[var(--shadow-card-hover)] transition-all"
                >
                  <Icon
                    name="phone-call"
                    className="w-10 h-10 shrink-0 text-navy stroke-[1.6] group-hover:text-leaf-700 transition-colors"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-ink-muted">
                      Call us
                    </span>
                    <span className="font-display text-xl font-semibold text-navy group-hover:text-leaf-700">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-line shadow-[var(--shadow-card)] hover:ring-lake/40 hover:shadow-[var(--shadow-card-hover)] transition-all"
                >
                  <Icon
                    name="mail"
                    className="w-10 h-10 shrink-0 text-navy stroke-[1.6] group-hover:text-lake-700 transition-colors"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-ink-muted">
                      Email us
                    </span>
                    <span className="font-display text-lg font-semibold text-navy group-hover:text-lake-700 break-all">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-5 rounded-2xl bg-white p-5 ring-1 ring-line shadow-[var(--shadow-card)]">
                  <Icon
                    name="clock"
                    className="w-10 h-10 shrink-0 text-navy stroke-[1.6]"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-ink-muted">
                      Hours
                    </span>
                    <ul className="mt-1 space-y-0.5">
                      {site.hours.map((h) => (
                        <li
                          key={h.days}
                          className="text-[15px] text-ink-soft"
                        >
                          <span className="font-semibold text-navy">
                            {h.days}:
                          </span>{" "}
                          {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <JotformEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
