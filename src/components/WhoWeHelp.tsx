import { Icon } from "./Icon";
import { audiences } from "@/lib/site";

export function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="audiences-heading"
      className="relative scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lake">
            Who We Help
          </p>
          <h2
            id="audiences-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy"
          >
            Built for Real People, Not Big Corporate IT
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            We focus on the folks traditional IT companies overlook — the
            people who just want their tech to <em>work</em>.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audiences.map((a) => (
            <li key={a.id}>
              <article className="group flex h-full flex-col items-center text-center rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
                <Icon
                  name={a.icon}
                  className="w-14 h-14 text-navy stroke-[1.6]"
                />
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                  {a.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {a.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
