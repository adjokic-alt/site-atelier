# Complete M5 installation

Copy the full `src` folder over the existing project and select **Replace files in destination**. No manual code editing is required.

New routes:
- `/inspiration`
- `/moodboard`

Run:
```powershell
npm run verify:m1
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

Test saving and removing inspiration, refresh persistence, moodboard insight, Header count and `/brief` visual count.
