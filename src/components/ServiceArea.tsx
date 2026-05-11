import { Icon } from "./Icon";
import { serviceAreas, site } from "@/lib/site";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
              Where We Help
            </p>
            <h2
              id="service-area-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
            >
              Proudly serving Alexandria & the lakes area.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We come to you in {site.city} and the surrounding lakes
              communities. If your home or cabin is nearby, give us a call —
              we likely cover your area.
            </p>
            <ul
              role="list"
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5"
            >
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2 text-[15px] text-ink-soft"
                >
                  <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lake/10 text-lake">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-ink-muted">
              Don&rsquo;t see your town? We still might cover it.{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-lake hover:text-lake-700 underline-offset-2 hover:underline"
              >
                Call {site.phone}
              </a>{" "}
              and ask.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-line shadow-[var(--shadow-card)]">
              <iframe
                title={`Map of ${site.city}, ${site.region}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-95.6%2C45.7%2C-95.15%2C46.05&amp;layer=mapnik&amp;marker=45.8852%2C-95.3775"
                className="block h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
