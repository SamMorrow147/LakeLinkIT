import type { IconName } from "@/lib/site";

type IconProps = {
  name: IconName | "check" | "phone-call" | "mail" | "map-pin" | "menu" | "close" | "arrow-right" | "clock" | "star";
  className?: string;
};

export function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "computer":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common}>
          <path d="M2 8.5a16 16 0 0 1 20 0" />
          <path d="M5 12.5a11 11 0 0 1 14 0" />
          <path d="M8.5 16a6 6 0 0 1 7 0" />
          <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tv":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 18v3" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="6" y="2" width="12" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
      );
    case "smartHome":
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "newDevice":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="13" height="14" rx="2" />
          <path d="M16 9h4v10a2 2 0 0 1-2 2H8" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case "printer":
      return (
        <svg {...common}>
          <path d="M6 9V3h12v6" />
          <rect x="3" y="9" width="18" height="9" rx="2" />
          <rect x="7" y="14" width="10" height="6" rx="1" />
        </svg>
      );
    case "remote":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
          <path d="M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
        </svg>
      );
    case "lessons":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M7 9.5V14c0 1.5 2.5 3 5 3s5-1.5 5-3V9.5" />
          <path d="M21 7v6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l4.5 4.5L19 7" />
        </svg>
      );
    case "phone-call":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 7 9-7" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6l-12 12" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 18.27l-6.18 3.25L7 14.63l-5-4.87 6.91-1L12 2.5z" />
        </svg>
      );
    default:
      return null;
  }
}
