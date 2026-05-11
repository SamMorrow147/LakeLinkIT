# LakeLink IT — Marketing Site

A friendly, accessible one-page marketing site for **LakeLink IT** — patient,
in-home tech support for the Alexandria, MN lakes area.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.
Deployable to Vercel with zero config.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx           # site metadata, fonts (Inter + Fraunces), JSON-LD
    page.tsx             # composes all sections
    globals.css          # Tailwind + brand color tokens
    sitemap.ts
    robots.ts
    opengraph-image.tsx  # auto-generated 1200x630 social card
  components/
    Header.tsx · Hero.tsx · Services.tsx · WhoWeHelp.tsx
    WhyUs.tsx  · Process.tsx · Testimonials.tsx · ServiceArea.tsx
    FinalCTA.tsx · Footer.tsx · JotformEmbed.tsx · Icon.tsx
  lib/
    site.ts              # SINGLE SOURCE OF TRUTH for all copy/data
    seo.ts               # default metadata + LocalBusiness JSON-LD
public/
  logo.png               # the LakeLink IT logo
```

## Editing copy and data

All site copy (NAP, services, audiences, testimonials, service-area cities,
hours, etc.) lives in [`src/lib/site.ts`](src/lib/site.ts). Update values
there and the entire site picks up the change — no JSX edits required.

### Phone, email, hours

Edit the top of `src/lib/site.ts`:

```ts
phone: "(320) 555-0123",
phoneHref: "tel:+13205550123",
email: "hello@lakelinkit.com",
```

These are placeholders — replace before launch.

## Wiring up the Jotform appointment form

The site already has a styled placeholder where the form will appear (in the
**Get In Touch** section). To activate it:

1. In Jotform, copy your form ID — the long number from your form's URL
   (e.g. `https://form.jotform.com/251234567890123` → `251234567890123`).
2. In [`src/components/FinalCTA.tsx`](src/components/FinalCTA.tsx), replace:

   ```tsx
   <JotformEmbed />
   ```

   with:

   ```tsx
   <JotformEmbed formId="251234567890123" />
   ```

3. (Optional) pass a custom `height` prop if your form is taller/shorter.

That's it — the iframe-based embed will load the live form.

## SEO & local search

- Page metadata, Open Graph, and Twitter cards are configured in
  [`src/lib/seo.ts`](src/lib/seo.ts).
- `LocalBusiness` JSON-LD is auto-injected via the root layout, including
  address, geo coordinates, hours, service catalog, and `areaServed`.
- A 1200×630 OG/social-card image is generated at `/opengraph-image` from
  [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).
- `/sitemap.xml` and `/robots.txt` are generated automatically.

Update `site.url` in `src/lib/site.ts` to your real production domain so
canonical URLs and OG images point to the right place.

## Brand tokens

Brand colors and fonts are defined as Tailwind v4 theme variables in
[`src/app/globals.css`](src/app/globals.css):

| Token   | Value     | Usage                           |
| ------- | --------- | ------------------------------- |
| `navy`  | `#0F2A47` | Headings, primary text          |
| `lake`  | `#1E78C8` | Primary brand, links            |
| `sky`   | `#6FB5E8` | Accents, gradients              |
| `leaf`  | `#2FA84F` | Success, "Call" CTAs (the IT)   |
| `sun`   | `#F39B2C` | Warm accent, focus rings        |
| `cream` | `#FBF7F1` | Soft section background         |

Fonts: **Fraunces** (display) + **Inter** (body), loaded via `next/font`.

## Accessibility

- Semantic landmarks (`<header>` / `<main>` / `<footer>`) and a skip-link.
- All icons are decorative (`aria-hidden`); CTAs have descriptive labels.
- 18px base font, 1.65 line-height, AA contrast, large tap targets,
  visible focus rings, and `prefers-reduced-motion` honored.

## Deploying to Vercel

1. Push this folder to a Git repo.
2. Import the repo in Vercel — the framework auto-detects Next.js.
3. No environment variables are required for the static build.

Done.
