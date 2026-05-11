import { Icon } from "./Icon";

type JotformEmbedProps = {
  /**
   * Once you have your Jotform embed snippet, paste the form ID here
   * (the long number from the iframe `src`, e.g. `https://form.jotform.com/2519...`).
   * Leave undefined to render the styled placeholder.
   */
  formId?: string;
  height?: number;
};

export function JotformEmbed({ formId, height = 760 }: JotformEmbedProps) {
  if (formId) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line shadow-[var(--shadow-card)]">
        <iframe
          id={`JotFormIFrame-${formId}`}
          title="LakeLink IT appointment request form"
          src={`https://form.jotform.com/${formId}`}
          allow="geolocation; microphone; camera; fullscreen"
          allowFullScreen
          className="block w-full border-0 bg-white"
          style={{ height }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Appointment request form placeholder"
      className="relative flex flex-col items-center rounded-2xl border-2 border-dashed border-sky/60 bg-white/70 p-10 text-center"
    >
      <Icon name="mail" className="w-12 h-12 text-navy stroke-[1.6]" />
      <h3 className="mt-4 font-display text-xl font-semibold text-navy">
        Appointment Form Loads Here
      </h3>
      <p className="mt-2 text-[15px] text-ink-muted">
        The Jotform appointment request form will be embedded in this spot.
        Drop the form ID into{" "}
        <code className="rounded bg-sky-50 px-1.5 py-0.5 text-sm text-lake-700">
          &lt;JotformEmbed formId=&quot;...&quot; /&gt;
        </code>{" "}
        to activate.
      </p>
    </div>
  );
}
