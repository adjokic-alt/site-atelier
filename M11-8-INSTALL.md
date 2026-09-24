# M11.8 Accessibility and Production Audit

Copy the complete `src` folder and `scripts` folder over the existing M11.7 project.
Then add this single import directly below globals.css in src/app/layout.tsx:

import "@/styles/accessibility.css";

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

In a second terminal:
```powershell
node scripts/audit-public-routes.mjs
node scripts/audit-source.mjs
```

Use M11-8-AUDIT-CHECKLIST.md for manual keyboard, screen-reader, responsive, contrast and browser checks.
