@AGENTS.md

# Orientation for Claude Code

This file is your starting point. Read it before making changes.

## What this is

"A Beginner's Guide to Digital Minds" — a Next.js site that orients newcomers to AI consciousness, AI welfare, and digital minds research. Static content (no runtime data fetches), deployed to GitHub Pages at https://digitalminds.guide/.

## Stack

- **Next.js 16** with App Router and static export (`output: "export"` in non-Vercel builds). See `AGENTS.md` — Next.js 16 has breaking changes from your training data. Check `node_modules/next/dist/docs/` if anything feels off.
- **React 19**, **TypeScript strict mode**, **Tailwind CSS 4**.
- **Framer Motion** via wrappers in `src/components/animate.tsx`.

## Where things live

```
src/
├── app/                       routes (App Router)
│   ├── layout.tsx             root layout: Navbar + Footer + fonts + global metadata
│   ├── page.tsx               / (home — uses root layout's metadata)
│   └── <route>/
│       ├── layout.tsx         per-route metadata (title + description)
│       └── page.tsx           full UI for the route ("use client" where needed)
├── components/                shared UI (flat — no feature folders)
└── data/                      typed static content
```

**Convention:** every route is a folder containing a `page.tsx` (the UI) and usually a `layout.tsx` (just metadata, ~10 lines). The split exists because Next.js requires metadata in a Server Component, while interactive UI needs `"use client"`. Keep all UI in `page.tsx`.

**Data flow:** all content is statically authored in `src/data/<topic>.ts` as typed exports — `export interface Foo` + `export const foos: Foo[]`. The matching `page.tsx` imports and renders. No runtime fetching, no API routes.

## Code patterns to follow

- **Animations**: use `FadeIn`, `SlideIn`, `StaggerContainer`, `StaggerItem` from `@/components/animate`. They use `whileInView` with `once: true` (so animations fire on scroll-in and don't replay). Don't import `motion` directly unless you're adding a new wrapper or a genuinely one-off animation.
- **Page header**: every non-home route uses `<PageHeader title=... description=... />` from `@/components/page-header`. It already includes the cobalt accent stripe and standard top spacing for the sticky navbar.
- **Accent colour**: `--accent` in `globals.css` is the site's cobalt (`#4098ff`). Use Tailwind classes like `text-accent`, `bg-accent`, `border-accent` rather than hardcoding the hex.
- **Typography**: serif (Cormorant Garamond) is `font-serif`, sans (Plus Jakarta Sans) is the default. Headings tend to be serif; body and UI is sans.
- **Copy**: British English (organise, behaviour, programmes). Match the existing tone — observational and grounded, not breathless.

## Dev workflow

```bash
npm install
npm run dev    # http://localhost:3000
```

That's it. The site is served at the viewport root because the production deploy uses a custom domain (`digitalminds.guide`), so there's no basePath to emulate locally.

## Build and deploy

- `npm run build` — static export to `out/`.
- Deploy is automated via `.github/workflows/deploy.yml` on push to `main`. The workflow runs `next build` and uploads `out/` to GitHub Pages.
- Custom domain is configured via the GitHub Pages settings (and/or a `public/CNAME` file). If you change the domain, update both.

## Common tasks

**Add a reading to a research area**: edit `src/data/research-areas.ts`. Find the right `groups[].areas[].startHere` or `goDeeper` array; append a `Reading` object. The `description` is shown under the title; keep it 1–2 sentences and observational.

**Add an organisation to the field map**: edit `src/data/organisations.ts`. The schema is in the same file. Logos go in `public/logos/`.

**Add a new route**: create `src/app/<name>/page.tsx` (the UI, with `"use client"` if it has any interactivity) + `src/app/<name>/layout.tsx` (just metadata, copy the pattern from any existing route). Add a navbar link in `src/components/navbar.tsx`. Use `<PageHeader>` for consistency.

**Change the hero**: `src/components/frosted-lava-background.tsx` is the animated gradient hero. The breathing animation uses CSS keyframes in `globals.css` (`lava-blob-left`, `lava-blob-right`). Pass `animated={false}` to use it as a static texture (the page headers do this).

## Things to avoid

- Don't add API routes or runtime data fetching. The site is a static export.
- Don't introduce alternative animation libraries — Framer Motion is already wired up.
- Don't commit `.env.local`, `.next/`, `out/`, or `tsconfig.tsbuildinfo` — already gitignored.

## When in doubt

Read the most similar existing thing and mirror it. Routes mirror routes; data files mirror data files. Consistency across the site is more valuable than micro-optimisation in any one place.
