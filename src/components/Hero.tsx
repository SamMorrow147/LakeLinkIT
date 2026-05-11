import Image from "next/image";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const trustItems = [
  "Local to Alexandria",
  "Patient & Jargon-Free",
  "Same-Week Appointments",
  "Honest, Up-Front Pricing",
];

export function Hero() {
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
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-white/85 px-4 py-1.5 text-sm font-semibold text-lake-700 backdrop-blur shadow-sm">
            <Icon name="map-pin" className="w-4 h-4" />
            Serving Alexandria, MN & the Lakes Area
          </span>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-navy [text-wrap:balance]"
          >
            Friendly Tech Support{" "}
            <span className="sun-gradient-text">You Can Trust.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto lg:mx-0">
            We help everyday people — seniors, homeowners, lake-cabin owners,
            and small businesses — solve real-world tech problems. No jargon,
            no rush, no judgment. Just patient, local help that works.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name} now at ${site.phone}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf-600 px-7 py-4 text-base sm:text-lg font-semibold text-white shadow-card transition-colors"
            >
              <Icon name="phone-call" className="w-5 h-5" />
              Call {site.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-sky-50 px-7 py-4 text-base sm:text-lg font-semibold text-navy ring-1 ring-line shadow-card transition-colors"
            >
              Request Help
              <Icon name="arrow-right" className="w-5 h-5" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm sm:text-base text-ink-soft">
            {trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Icon
                  name="check"
                  className="w-5 h-5 shrink-0 text-leaf stroke-[2.25]"
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
