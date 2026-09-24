# M11.6 SEO, Sitemap and Robots

Copy the complete `src` folder over the existing M11.5 project and choose Replace files in destination.

Included:
- central SEO configuration
- metadataBase and title template
- default Open Graph and Twitter metadata
- generated Open Graph image at `/opengraph-image`
- `/sitemap.xml`
- `/robots.txt`
- WebSite and minimal Organization JSON-LD
- noindex layouts for Brief, Moodboard, Inquiry, Style Quiz and UI Preview
- canonical base configuration
- skip-link target on the root main element

Production URL:
- Default: https://site-atelier-eta.vercel.app
- Recommended: set NEXT_PUBLIC_SITE_URL in Vercel to the final production origin when a custom domain is connected.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Verify:
- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`
- page source metadata
- noindex on `/brief`, `/moodboard`, `/inquiry/*`, `/styles/not-sure`, `/ui-preview`
