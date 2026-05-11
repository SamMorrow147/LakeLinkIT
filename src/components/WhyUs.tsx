import { Icon } from "./Icon";
import { whyUs, site } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
              Why Choose LakeLink IT
            </p>
            <h2
              id="why-us-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
            >
              Tech help that actually feels{" "}
              <span className="sun-gradient-text">helpful.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We started LakeLink IT because too many people in our community
              were left frustrated by impatient tech support and confusing
              jargon. We do things differently — one neighbor at a time.
            </p>
            <a
              href={site.phoneHref}
              style={{ color: "#ffffff" }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy-700 px-6 py-3 font-semibold shadow-card transition-colors"
            >
              <Icon name="phone-call" className="w-5 h-5" />
              Talk to a Real Person
            </a>
          </div>

          <ul
            role="list"
            className="lg:col-span-7 grid gap-4 sm:gap-5 sm:grid-cols-2"
          >
            {whyUs.map((r) => (
              <li
                key={r.title}
                className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <Icon name="check" className="w-10 h-10 text-leaf stroke-[2]" />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {r.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
