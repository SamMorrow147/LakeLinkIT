type DividerTone = "white" | "cream" | "navy";

type SectionDividerProps = {
  /** the color of the section ABOVE the divider (the divider's "fill" appears as the section BELOW) */
  fromTone?: DividerTone;
  /** the color of the section BELOW the divider — used as the SVG fill */
  toTone?: DividerTone;
  /** flip vertically for "down"-curving variant */
  flip?: boolean;
  className?: string;
};

const toneFill: Record<DividerTone, string> = {
  white: "#ffffff",
  cream: "#fbf7f1",
  navy: "#0f2a47",
};

const toneBg: Record<DividerTone, string> = {
  white: "bg-white",
  cream: "bg-cream",
  navy: "bg-navy",
};

export function SectionDivider({
  fromTone = "white",
  toTone = "cream",
  flip = false,
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative ${toneBg[fromTone]} ${className ?? ""}`}
    >
      <svg
        className={`block w-full h-12 sm:h-16 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          fill={toneFill[toTone]}
        />
      </svg>
    </div>
  );
}
