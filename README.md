# Digital Minds Guide

A guide for newcomers to the field of AI consciousness, AI welfare, and digital minds research. The site orients new researchers, points to readings and active questions, and maps the people and institutions working in the area.

Live at: https://digitalminds.guide/

## Stack

- Next.js 16 (App Router) with static export
- React 19, TypeScript (strict mode)
- Tailwind CSS 4
- Framer Motion for scroll-triggered animations
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs static files to `out/` (used by the GitHub Pages deploy workflow). The site is a fully static export — no server, no database, no runtime data fetching.

## Project layout

```
src/
├── app/                              Next.js App Router routes
│   ├── layout.tsx                    Root layout (Navbar, Footer, fonts)
│   ├── page.tsx                      / (home)
│   └── [route]/
│       ├── layout.tsx                Per-route metadata (title, description)
│       └── page.tsx                  Page UI
├── components/                       Shared UI
│   ├── animate.tsx                   Framer Motion wrappers (FadeIn, etc.)
│   ├── frosted-lava-background.tsx   Hero animation
│   ├── navbar.tsx, footer.tsx        Layout chrome
│   ├── page-header.tsx               Standard page header
│   └── network-canvas.tsx, node-mark.tsx
└── data/                             Typed static content
    ├── events.ts, organisations.ts, pathways.ts
    ├── research-areas.ts, open-questions.ts
    └── start-here.ts
```

Each route is one folder containing `page.tsx` (UI) and `layout.tsx` (metadata only). Data is centralised in `src/data/` as typed exports — interfaces and constants live in the same file.

## Routes

| Path | Purpose |
|---|---|
| `/` | Home — hero, intro banner, "What you can do this week" |
| `/start-here` | Orientation for newcomers |
| `/research-areas` | Annotated readings by research area |
| `/open-questions` | Open research questions, filterable |
| `/field-map` | People and organisations working in the field |
| `/pathways` | Entry points for different disciplines |
| `/events` | Programmes and opportunities |
| `/methodology` | How the site is constructed |

## Hosting

The site is deployed to GitHub Pages from the `out/` directory produced by `npm run build`. The custom domain is configured via a `CNAME` record (managed in the repo's GitHub Pages settings or via a `public/CNAME` file).

Each push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes automatically. Typical deploy time is 1–2 minutes.

## Contributing

For Claude Code agents and other AI assistants: see `CLAUDE.md` and `AGENTS.md` for project conventions and orientation.

For human contributors:
- TypeScript is strict — type new data and props.
- Animations use the wrappers in `src/components/animate.tsx`. Don't reach for `framer-motion` directly unless adding a genuinely new pattern.
- Static content lives in `src/data/` as typed exports. Page components import and render — no runtime fetches.
- British English spelling throughout user-facing copy.

## License

TBD.
