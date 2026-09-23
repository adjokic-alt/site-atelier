# M11.4 About and Contact

Copy the complete `src` folder over the existing M11.3 project and choose Replace files in destination.

New routes:
- `/about`
- `/contact`

Included:
- product purpose and working principles
- intended audience and professional boundaries
- separate routes for new projects, existing drafts and general questions
- central `businessConfig` values displayed for development review
- explicit placeholder warnings for unconfirmed business identity and contact data
- page-specific metadata

The package intentionally does not invent a founder name, biography, legal entity, address, phone number, response-time promise or booking availability.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Verify `/about` and `/contact` at mobile and desktop widths. Confirm Header active states and all CTA links.
