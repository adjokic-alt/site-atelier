# Site Atelier — project handover

Last updated: 12 October 2026. Owner: Aleksandar Đokić (Master of Architecture, Niš). Read this first when picking the project up again.

## What the site is

An inspiration-first website for an interior design studio. A visitor **saves pictures they love → finds their style (45-second quiz) → fills a 5-step brief → receives a designed PDF with a serial number**. The brief reaches the studio by email. Clients: people in the EU and Serbia, mostly owners of new apartments.

- Repo: `adjokic-alt/site-atelier`, branch `main` (history was squashed on 11 Oct 2026; one fresh commit, then every change since).
- Stack: Next.js 16 (App Router, `src/`), Tailwind 4, Supabase (DB), Resend (email), pdf-lib (PDF), Vercel hosting.
- Next 16 differences: read `node_modules/next/dist/docs/` before coding (see AGENTS.md). Middleware is now `src/proxy.ts`.
- Design canvas (Claude Design artifact): "Site Atelier — Inspiration-first redesign" — boards 1–11 plus a "Live site review" page and a **Project notes** board summarising this file.

## Rules from the original brief (still apply)

Do **not** change routes, database structure, or business logic, and do not remove features. Redesign only the experience and visuals. Inspiration → Moodboard → Style → Brief. Visual and calm, not tool-like.

## Visual system

- Fonts: Instrument Serif (headlines, style names, quotes) + Manrope (everything else), self-hosted in `public/fonts` (Google Fonts is blocked in the build sandbox).
- Colours: paper `#f3f0ea`, surface `#fbfaf7`, linen `#e9e3d9`, ink `#1e1c19`, ink-700 `#4a453e`, ink-500 `#6b645a`, border `#ddd7cc`, oak accent `#7a5c40`. Quiz button cognac `#9c5f37` (hover `#844e2c`). Saved hearts Instagram red `#ed4956`.
- Pill buttons, 4 px image corners, thin rules, eyebrow labels 13 px uppercase. Reference board: "7 · Visual direction system".

## Pages and what was decided

- **Header**: transparent over photo heroes (Home, style pages) until scroll; heart with saved count; EN · SR switch; "Start my brief". Mobile menu is rendered into `<body>` (fixes clipping under the blurred header).
- **Home** (`/`): hero photo `industrial-brick-living-room.jpg` with slow scale drift (a video was tried and removed by request); buttons Explore Inspiration / Build a Moodboard / **Find my style · 45 sec quiz** (cognac, shared `QuizButton`). Then inspiration wall, dark quiz section, style rail, moodboard, brief, final CTA.
- **Inspiration**: masonry wall, reshuffled every visit, ~35 % landscapes spanning two columns at portrait height; room + style filters; lightbox. Hearts 48 px (mobile) / 56 px (desktop), red with a pop when saved.
- **Styles**: 7 styles (Scandinavian, Modern, Minimalist, Industrial, Luxury, Rustic, Mediterranean); each Style Studio page has hero, gallery, material board (real material crops), 4 characteristics, "Is it right for my home?", related rooms. `/styles/[style]` dynamic route is shadowed by the 7 fixed pages (not shown).
- **Quiz** (`/styles/not-sure`): 6 photo pairs, scoring unchanged.
- **Moodboard**: patterns (colours, materials, style lean), views all / room / style.
- **Brief** (`/inquiry/*`, same routes): order **Inspiration → Who → Spaces → Goals → Your brief**. `/inquiry` opens Inspiration.
  - Inspiration: title "Your inspiration **said X – Y**" + description of that style pair (7 singles + 42 ordered pairs in `src/content/style-pairings.ts`); bar of style shares; Pinterest link field; file drop (names only); style picker. Pictures set "Feels like" when the saved set changes; a hand-picked style wins after that.
  - Spaces: Whole home, Living room, Kitchen, Bedroom, Bathroom, Balcony; more: Gardening, Facade, Decoration only (new ids `living-room`, `bedroom`, `kids-room`, `garden` stored in the existing text[] column).
  - Goals: More light, Better storage, Warmer & cosier, More style, A fresh start; own words; budget **Under 10k / 10–20k / 20–50k / 50k+ / Not sure** in **EUR, USD, RSD** (RSD shows dinar equivalents ~117 RSD/EUR: Do 1,2 mil. … Preko 5,9 mil.; old bands still labelled for old briefs); home type; condition; size m²; final goals (ideas, sketches, 3D visualisations, full technical documentation); optional details.
  - Your brief: download PDF, name, email, **optional phone**, privacy, send.
  - Live brief panel beside every step.
- **PDF** (`src/lib/pdf/customer-brief.ts`): A4, cover photo + serial number (`BR-YYYY-XXXXXX`, drafts `DRAFT-…`/`NACRT-…`), style page with pairing text and material boards, moodboard grid (9 per page), full brief, "What happens next". Fonts/images from `pdf-assets/` (built by `scripts/build-pdf-assets.py`, traced via `next.config.ts`). Written in the brief's language.
- **Send**: `/api/brief` validates, creates the serial, attaches the PDF to client + studio emails (Resend) and saves to Supabase — only when production integrations are configured; otherwise demo mode (log only).
- **How it works**: 4 tabs Save / Discover / Describe / Receive with live mini-demos, auto-advance every **4.5 s**, pauses on hover, stops on click; Charles Eames quote. Replaces Services in the menu (`/services` still exists, linked from footer).
- **About**: "Homes made for one person at a time", belief, 3 principles, workspace photo, note from Aleksandar (written by Claude in his voice — he should review), **rotating quote** (8 verified quotes, new one each visit), contact card with portrait (`public/images/about/aleksandar-djokic.jpg`) at the end: +381 64 118 3004, adjokic@gmail.com.

## Languages (EN / SR)

- Same URLs; choice in cookie `locale` (1 year). First visit: `src/proxy.ts` uses Vercel header `x-vercel-ip-country` — **RS, ME, HR, MK, BA → Serbian**, else English; falls back to browser language.
- Serbian is Latin script, polite *vi*. Title "Master inženjer arhitekture".
- Server: `getLocale()` from `@/i18n/server`; client: `useLocale()` from `@/i18n/client`; shared names in `@/i18n/names`. Copy lives next to each component as `{ en, sr }`. Content layers: `inspiration-sr.ts`, `style-studios-sr.ts`, `quiz-sr.ts`, `getStyleCatalog(locale)`, `getBriefOptions(locale, currency)`.
- When adding text: add both languages.

## Service area

All 27 EU member states + Serbia (`src/config/service-areas.config.ts`): discovery, brief, remote design, scope definition. Partner and execution coordination currently off everywhere — **ask whether to switch on for Serbia** (the studio does design and execution).

## Open items / next steps

1. Business **name and logo** (everything still says "Studio Name — Placeholder"; site name in SEO is "Site Atelier").
2. Switch on production in Vercel env vars: `PRODUCTION_INTEGRATIONS_ENABLED=true`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `INQUIRY_NOTIFICATION_EMAIL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (+ Turnstile keys if bot protection is wanted). Until then sending is demo-only.
3. Real file uploads and Pinterest fetching (files are listed by name only).
4. Contact email in business config is still `hello@example.com`; legal pages are drafts that need a lawyer.
5. Minimalism suggestions not yet decided: drop Services from the footer, fold Contact into About, trim Home to Hero → Inspiration → Quiz → Styles, make every page end with the next step on the main path.
6. Review Serbian copy (especially the About note) and the 49 style descriptions.
7. Design canvas is behind the live site for later changes (languages, PDF, How it works, About); update if the canvas is used for reviews again.

## Working notes

- Build check: `npx tsc --noEmit && npx eslint src && npx next build` (two old Turnstile lint warnings are expected).
- Local run: `npx next start -p 3100`; Playwright with `executablePath: '/opt/pw-browsers/chromium'`.
- Commits end with the Claude co-author line; push straight to `main` (Vercel deploys production from `main`).
