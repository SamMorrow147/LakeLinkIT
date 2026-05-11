export const site = {
  name: "LakeLink IT",
  tagline: "Friendly Tech Support You Can Trust",
  description:
    "Patient, in-home tech support for seniors, homeowners, lake cabin owners, and small businesses in Alexandria, MN and the surrounding lakes communities.",
  url: "https://lakelinkit.com",
  city: "Alexandria",
  region: "MN",
  zip: "56308",
  street: "Alexandria, MN", // placeholder — swap with mailing address
  phone: "(320) 555-0123", // placeholder
  phoneHref: "tel:+13205550123", // placeholder
  email: "hello@lakelinkit.com", // placeholder
  hours: [
    { days: "Mon – Fri", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  geo: { lat: 45.8852, lng: -95.3775 }, // Alexandria, MN
  socials: {
    facebook: "https://facebook.com/lakelinkit",
    google: "https://g.page/lakelinkit",
  },
} as const;

export type Service = {
  id: string;
  name: string;
  shortName: string;
  blurb: string;
  bullets: string[];
  icon: IconName;
};

export type IconName =
  | "computer"
  | "wifi"
  | "tv"
  | "phone"
  | "smartHome"
  | "shield"
  | "newDevice"
  | "printer"
  | "remote"
  | "lessons";

export const services: Service[] = [
  {
    id: "computer-help",
    name: "In-Home Computer Help",
    shortName: "Computer Help",
    blurb:
      "Slow computer? Mystery pop-ups? We come to your home and patiently walk through every fix.",
    bullets: [
      "Slow computer tune-ups",
      "Virus & malware cleanup",
      "Password & email setup",
      "Printer troubleshooting",
    ],
    icon: "computer",
  },
  {
    id: "wifi",
    name: "Wi-Fi & Internet Troubleshooting",
    shortName: "Wi-Fi & Internet",
    blurb:
      "Strong Wi-Fi from the kitchen to the dock. We fix dead zones, slow speeds, and streaming hiccups.",
    bullets: [
      "Router setup & configuration",
      "Whole-home & cabin Wi-Fi",
      "Dead zone fixes",
      "Streaming & speed issues",
    ],
    icon: "wifi",
  },
  {
    id: "smart-tv",
    name: "Smart TV & Home Theater Setup",
    shortName: "Smart TV Setup",
    blurb:
      "Mounted TVs, simple remotes, and streaming that just works. No more juggling apps and inputs.",
    bullets: [
      "TV mounting",
      "Roku, Apple TV & Fire TV",
      "Sound bars & speakers",
      "Universal remote setup",
    ],
    icon: "tv",
  },
  {
    id: "phone-help",
    name: "Phone & Tablet Help for Seniors",
    shortName: "Phone Help for Seniors",
    blurb:
      "We sit down with you, in plain language, and make your phone do exactly what you want it to.",
    bullets: [
      "iPhone & Android help",
      "App setup & cleanup",
      "Photo backups",
      "FaceTime, texts & scam calls",
    ],
    icon: "phone",
  },
  {
    id: "smart-home",
    name: "Smart Home Device Setup",
    shortName: "Smart Home Setup",
    blurb:
      "From video doorbells to thermostats, we make smart-home gear feel as easy as a light switch.",
    bullets: [
      "Ring, Nest & smart cameras",
      "Smart thermostats & locks",
      "Alexa & Google Home",
      "App connections & routines",
    ],
    icon: "smartHome",
  },
  {
    id: "scam-protection",
    name: "Scam Protection & Password Help",
    shortName: "Scam & Password Help",
    blurb:
      "Worried about an email, text, or pop-up? We'll check it out, lock things down, and teach you what to watch for.",
    bullets: [
      "Password resets & managers",
      "Account recovery",
      "Scam education",
      "Security checkups",
    ],
    icon: "shield",
  },
  {
    id: "new-device",
    name: "New Device Setup & Data Transfer",
    shortName: "New Device Setup",
    blurb:
      "New laptop or phone? We move your photos, contacts, and email so nothing important is left behind.",
    bullets: [
      "New computer setup",
      "Phone-to-phone transfers",
      "Email & cloud migration",
      "Backups you can rely on",
    ],
    icon: "newDevice",
  },
  {
    id: "printer",
    name: "Printer & Peripheral Setup",
    shortName: "Printer Setup",
    blurb:
      "Wireless printers, scanners, and webcams — connected, tested, and ready to go.",
    bullets: [
      "Wireless printer setup",
      "Scanner & fax setup",
      "Webcams & accessories",
      "Connection troubleshooting",
    ],
    icon: "printer",
  },
  {
    id: "remote-support",
    name: "Remote Tech Support",
    shortName: "Remote Support",
    blurb:
      "Quick fixes without waiting for a house call. We connect securely and solve it together.",
    bullets: [
      "Remote troubleshooting",
      "Software fixes & updates",
      "Walk-throughs by phone",
      "Ongoing support plans",
    ],
    icon: "remote",
  },
  {
    id: "lessons",
    name: "Tech Lessons & Digital Confidence",
    shortName: "Tech Lessons",
    blurb:
      "One-on-one lessons at your kitchen table — at your pace, on your devices, with no judgment.",
    bullets: [
      "One-on-one guidance",
      "Device walkthroughs",
      "Senior-friendly training",
      "Technology coaching",
    ],
    icon: "lessons",
  },
];

export type Audience = {
  id: string;
  name: string;
  description: string;
  icon: IconName;
};

export const audiences: Audience[] = [
  {
    id: "seniors",
    name: "Seniors & Retirees",
    description:
      "Patient, jargon-free help that meets you where you are — whether it's your first smartphone or your fifth.",
    icon: "phone",
  },
  {
    id: "homeowners",
    name: "Homeowners & Families",
    description:
      "From Wi-Fi that reaches the basement to printers that finally print, we tame the technology in your home.",
    icon: "smartHome",
  },
  {
    id: "lake-cabins",
    name: "Lake Cabin Owners",
    description:
      "Reliable cabin Wi-Fi, security cameras you can check from home, and TVs ready for movie night on the lake.",
    icon: "wifi",
  },
  {
    id: "small-business",
    name: "Small Businesses",
    description:
      "Fast help for shops, offices, and home-based businesses — without the contracts or corporate IT runaround.",
    icon: "computer",
  },
];

export type Reason = {
  title: string;
  description: string;
};

export const whyUs: Reason[] = [
  {
    title: "Patient & Kind",
    description:
      "We never rush, never judge, and never make you feel silly for asking a question.",
  },
  {
    title: "Plain Language",
    description:
      "No tech jargon. We explain what's going on in words that actually make sense.",
  },
  {
    title: "Local & Reliable",
    description:
      "Based right here in Alexandria. We show up on time and stand behind our work.",
  },
  {
    title: "Honest, Fair Pricing",
    description:
      "Up-front pricing with no surprise fees. If we can't help, you don't pay.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Contact Us",
    description:
      "Call, text, or fill out our short request form. Tell us what's going on — in your own words.",
  },
  {
    step: 2,
    title: "We Diagnose",
    description:
      "We come to your home (or connect remotely) and figure out exactly what's wrong, with no jargon.",
  },
  {
    step: 3,
    title: "We Fix It",
    description:
      "We solve the problem, walk you through what we did, and make sure you feel confident before we go.",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They were so patient with my mom when her email stopped working. Finally, a tech person who treats older folks with respect.",
    name: "Sarah M.",
    location: "Alexandria, MN",
  },
  {
    quote:
      "Our cabin Wi-Fi never reached the porch — until LakeLink IT. Now the grandkids can stream and we can actually relax.",
    name: "Tom & Linda K.",
    location: "Lake Miltona",
  },
  {
    quote:
      "Showed up on time, fixed my printer, set up our new Smart TV, and explained everything along the way. Worth every penny.",
    name: "Greg P.",
    location: "Osakis, MN",
  },
];

export const serviceAreas = [
  "Alexandria",
  "Osakis",
  "Glenwood",
  "Garfield",
  "Carlos",
  "Nelson",
  "Miltona",
  "Lake Le Homme Dieu",
  "Lake Darling",
  "Lake Mary",
  "Lake Ida",
  "Lake Carlos",
  "Lake Victoria",
  "Lake L'Homme Dieu",
] as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#process", label: "How It Works" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
] as const;
