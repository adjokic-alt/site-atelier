# M11.8 Accessibility and Production Audit

## Automated gates
- npm run lint
- npx tsc --noEmit
- npm run build
- Start production server: npm run start
- node scripts/audit-public-routes.mjs
- node scripts/audit-source.mjs

## Keyboard
- Tab order follows the visual order.
- Skip link moves focus to main content.
- All controls work with Enter or Space as appropriate.
- Mobile menu traps focus, closes on Escape and restores focus.
- Inquiry errors move focus to the first invalid field.
- No keyboard trap exists outside the open modal navigation.

## Screen reader
- One clear page heading per public page.
- Landmarks: header, nav, main and footer.
- Active navigation uses aria-current.
- Form errors use visible text and role alert.
- Decorative graphics are hidden from assistive technology.
- Meaningful visuals have useful alternative text.

## Visual
- Test 200% browser zoom at 1280px without horizontal scrolling.
- Test 320px, 390px, 768px, 1024px and desktop widths.
- Test Windows High Contrast or forced-colors mode.
- Test reduced-motion preference.
- Check text and control contrast with a contrast analyzer.
- Touch targets are at least 44 by 44 CSS pixels where practical.

## Functional production smoke test
- Home, Styles, all seven Studios, Inspiration, Services, How It Works, About, Contact and legal pages return 200.
- Quiz writes primary and accent styles to the brief.
- Moodboard saves and removes items after refresh.
- Inquiry validation routes to required fields.
- Brief PDF downloads and opens.
- Demo submission returns a stable reference.
- Thank-you page renders in production build.
- robots.txt, sitemap.xml and opengraph-image work.
- Private routes contain noindex.

## Browser coverage
- Current Chrome or Edge desktop and mobile emulation.
- Current Firefox.
- Current Safari or an iOS Safari device when available.

## Performance review
Run Lighthouse against the production build, not npm run dev. Record scores rather than treating a single run as absolute. Investigate large layout shifts, slow fonts, oversized JS and long main-thread tasks.
