# M3 installation

Copy into the existing M0 + M1 + M2 project:

- `src/app/styles`
- `src/components/styles`
- `src/content/style-catalog.ts`

This milestone expects the existing M1 files:

- `src/content/styles/scandinavian.ts`
- `src/content/materials.ts`
- `src/content/project-ideas.ts`
- `src/types/*`

And the existing M2 component barrel:

- `src/components/ui/index.ts`

Run:

```powershell
npm run verify:m1
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

Open:

- `http://localhost:3000/styles`
- `http://localhost:3000/styles/scandinavian`
- `http://localhost:3000/styles/not-sure`
