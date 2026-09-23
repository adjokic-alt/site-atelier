# M11.5 Legal Pages

This package adds:
- `/privacy`
- `/terms`
- `/imprint`
- `/cookies`
- reusable legal page components
- a production-style Footer with Product, Company and Legal links

Copy the complete `src` folder over the existing M11.4 project and choose Replace files in destination.

Important:
- These pages are development drafts, not final legal advice.
- Placeholder business and legal information is displayed deliberately.
- Final texts require review for the confirmed entity, markets, providers and service model.
- The privacy draft reflects the current browser draft, PDF and demo-submission architecture.
- The local-storage notice documents the current storage keys.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Verify all four legal routes, Footer links, mobile layout, keyboard focus and placeholder warnings.
