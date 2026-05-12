import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-navy text-sky-100 pb-safe">
      {/* Wave divider */}
      <div aria-hidden className="absolute inset-x-0 -top-px pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block h-16 sm:h-20 w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,0 L0,0 Z"
            fill="#ffffff"
            opacity="0.06"
          />
          <path
            d="M0,55 C240,90 480,15 720,48 C960,80 1200,30 1440,60 L1440,0 L0,0 Z"
            fill="#6fb5e8"
            opacity="0.10"
          />
          <path
            d="M0,70 C240,100 480,30 720,62 C960,92 1200,42 1440,72 L1440,0 L0,0 Z"
            fill="#1e78c8"
            opacity="0.10"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 pt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label={`${site.name} — ${site.tagline}`}
              className="inline-flex items-center"
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3">
                <Image
                  src="/logo.png"
                  alt={`${site.name} — ${site.tagline}`}
                  width={480}
                  height={320}
                  className="h-28 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-sky-100/85">
              Patient, in-home tech help for seniors, homeowners, lake-cabin
              owners, and small businesses across the Alexandria, MN area.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-leaf hover:bg-leaf-600 px-5 py-2.5 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                <Icon name="phone-call" className="w-4 h-4" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-5 py-2.5 text-white font-semibold ring-1 ring-white/15 transition-all duration-200 active:scale-[0.98]"
              >
                <Icon name="mail" className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-base font-semibold text-white">
              Services
            </h3>
            <ul role="list" className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="fancy-underline text-[15px] text-sky-100/85 hover:text-white transition-colors"
                  >
                    {s.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold text-white">
              Visit &amp; Hours
            </h3>
            <address className="mt-4 not-italic">
              <div className="flex items-start gap-2 text-[15px] text-sky-100/85">
                <Icon name="map-pin" className="mt-0.5 w-4 h-4" />
                <span>
                  {site.city}, {site.region} {site.zip}
                </span>
              </div>
            </address>
            <ul role="list" className="mt-4 space-y-1.5">
              {site.hours.map((h) => (
                <li
                  key={h.days}
                  className="text-[15px] text-sky-100/85"
                >
                  <span className="font-semibold text-white">{h.days}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-sky-100/70">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Proudly local to {site.city}, {site.region}.
          </p>
        </div>
      </div>

      {/* Giant low-opacity wordmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden select-none"
      >
        <div className="font-display font-bold text-white/[0.04] leading-[0.85] tracking-tight whitespace-nowrap text-[18vw] -mb-[2vw] text-center">
          LakeLink IT
        </div>
      </div>
    </footer>
  );
}
