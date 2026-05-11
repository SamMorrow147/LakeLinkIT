import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28 bg-navy"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lake/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sun/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold !text-white"
          >
            Getting help is simple.
          </h2>
          <p className="mt-5 text-lg text-sky-100/90">
            Three friendly steps from frustrated to fixed.
          </p>
        </div>

        <ol
          role="list"
          className="relative mt-16 grid gap-10 sm:gap-12 md:grid-cols-3"
        >
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-sky/30 via-sky/60 to-sky/30"
          />
          {processSteps.map((s) => (
            <li key={s.step} className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy font-display text-3xl font-bold shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] ring-4 ring-navy">
                {s.step}
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold !text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-sky-100/90">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
