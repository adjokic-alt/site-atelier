# Site Atelier — M0 foundation

Next.js App Router project scaffold for the style-selection / project-brief
website. This is **M0 only**: fonts, design tokens, layout container,
Header, Footer, Button, and a foundation-check Home page. No Brief data
model, no styles content, no forms, no database, and no external services
are part of this milestone.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first configuration — see `src/app/globals.css`)
- Fraunces (display) + Inter (body/UI), both via `next/font/google`

## Requirements

- Node.js 20 or later
- No environment variables required — the project runs with none set.
- An internet connection is required for `npm run build` / `npm run dev`
  the first time, purely so `next/font` can fetch and self-host Fraunces
  and Inter from Google Fonts at build time. After that first build, the
  fonts are cached locally and no further runtime requests are made.

## Commands

```bash
npm install       # install dependencies
npm run dev        # start the dev server at http://localhost:3000
npx tsc --noEmit   # strict TypeScript check
npm run lint        # ESLint
npm run build        # production build
npm run start          # run the production build locally
```

## Structure

```
src/
  app/                  Home page, root layout, global styles
  components/
    ui/                 Button, Container — generic, reusable primitives
    layout/              Header, Footer
  config/
    site.config.ts       Placeholder navigation/branding — NOT the full
                          business/legal configuration model, which
                          arrives in a later milestone
```

`content/`, `lib/`, `types/`, and `app/api/` are intentionally not created
yet — they belong to later milestones (M1 onward) and would sit empty here.

## Design tokens

All neutral, brand-default-accent, radius, shadow, and type-scale tokens
live in `src/app/globals.css` inside a single `@theme` block, per the
approved Phase 3A design system (with the Phase 3B accessibility and
sizing corrections applied). Per-style accent tokens are deliberately
**not** here — they're style content data, applied by a scoped theme
wrapper starting in a later milestone, not global CSS.

## Status

M0 complete. Do not start M1 content/logic in this codebase without
reviewing the approved Phase 3B architecture first.
