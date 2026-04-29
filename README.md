# A Beginner's Guide to Digital Minds

A guide for newcomers to the field of AI consciousness, AI welfare, and digital minds research. The site orients new researchers, points to readings and active questions, and maps the people and institutions working in the area.

Live at: https://[user].github.io/beginners-guide-to-dm/

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

Open http://localhost:3000/beginners-guide-to-dm/ — note the path prefix.

The dev server emulates the GitHub Pages deploy by serving the site under `/beginners-guide-to-dm`. To test as if served from a domain root (no basePath), set `VERCEL=1`:

```bash
VERCEL=1 npm run dev    # serves at http://localhost:3000/
```

The `VERCEL` flag is also what production uses (when deployed to Vercel preview environments). For GitHub Pages production builds, leave it unset.

## Build

```bash
npm run build
```

Outputs static files to `out/` (used by the GitHub Pages deploy workflow).

## Project layout

```
src/
├── app/                              Next.js App Router routes
│   ├── layout.tsx                    Root layout (Navbar, Footer, fonts)
│   ├── page.tsx                      / (home)
│   ├── home-content.tsx              Home page content
│   └── [route]/
│       ├── page.tsx                  Route entry
│       └── [route]-content.tsx       Page content
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

Each route follows a `page.tsx` (entry) + `[route]-content.tsx` (UI) split. Data is colocated in `src/data/` as typed exports — interfaces and constants live in the same file.

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

## Contributing

For Claude Code agents and other AI assistants: see `CLAUDE.md` and `AGENTS.md` for project conventions and orientation.

For human contributors:
- TypeScript is strict — type new data and props.
- Animations use the wrappers in `src/components/animate.tsx`. Don't reach for `framer-motion` directly unless adding a genuinely new pattern.
- Static content lives in `src/data/` as typed exports. Page components import and render — no runtime fetches.
- British English spelling throughout user-facing copy.

## License

TBD.
