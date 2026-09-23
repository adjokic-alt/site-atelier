# Complete M4 installation

Copy the complete `src` directory from this package over the existing project and choose **Replace files in destination** when asked.

This package now includes the complete integrated replacements for:

- `src/app/layout.tsx`
- `src/components/layout/Header.tsx`
- `src/app/styles/[style]/page.tsx`

No manual code editing is required.

Run:

```powershell
npm run verify:m1
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

Test:

- `/styles/scandinavian`
- `/brief`
- select Scandinavian and materials
- refresh the page
- confirm choices remain saved
