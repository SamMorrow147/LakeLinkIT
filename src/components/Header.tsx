"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_12px_-6px_rgba(15,42,71,0.18)]"
          : "bg-white/80 backdrop-blur",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — ${site.tagline}`}
          className="flex items-center shrink-0 -my-2"
        >
          <Image
            src="/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={480}
            height={320}
            priority
            className="h-24 w-auto object-contain sm:h-32 lg:h-40"
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft hover:text-lake transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name} at ${site.phone}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-leaf hover:bg-leaf-600 px-5 py-2.5 text-white font-semibold shadow-card transition-colors"
          >
            <Icon name="phone-call" className="w-4 h-4" />
            <span>{site.phone}</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-navy hover:bg-sky-50 transition-colors"
          >
            <Icon name={open ? "close" : "menu"} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-line bg-white"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-3 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-sky-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf-600 px-5 py-3 text-white font-semibold"
            >
              <Icon name="phone-call" className="w-5 h-5" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
