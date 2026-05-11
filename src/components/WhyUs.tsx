import { Icon } from "./Icon";
import { whyUs, site } from "@/lib/site";
import { Reveal } from "./motion/Reveal";
import { RevealStagger, RevealItem } from "./motion/RevealStagger";
import { DrawIcon } from "./motion/DrawIcon";
import { PulseRing } from "./motion/PulseRing";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal direction="left" className="lg:col-span-5">
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
            <span className="relative mt-8 inline-flex">
              <PulseRing color="bg-navy/30" interval={3.2} className="rounded-full" />
              <a
                href={site.phoneHref}
                style={{ color: "#ffffff" }}
                className="relative inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy-700 px-6 py-3 font-semibold shadow-card transition-all duration-200 active:scale-[0.98]"
              >
                <Icon name="phone-call" className="w-5 h-5" />
                Talk to a Real Person
              </a>
            </span>
          </Reveal>

          <RevealStagger
            as="ul"
            role="list"
            speed="normal"
            className="lg:col-span-7 grid gap-4 sm:gap-5 sm:grid-cols-2"
          >
            {whyUs.map((r) => (
              <RevealItem
                as="li"
                key={r.title}
                direction="right"
                className="group rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-leaf/40"
              >
                <DrawIcon duration={0.6}>
                  <Icon
                    name="check"
                    className="w-10 h-10 text-leaf stroke-[2]"
                  />
                </DrawIcon>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {r.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
