# M11.3 Services and How It Works

Copy the complete `src` folder over the existing M11.2 project and choose Replace files in destination.

New routes:
- `/services`
- `/how-it-works`

The pages explain:
- four support areas
- what each area may include
- what is not automatically included
- location-based availability
- the full product journey
- local browser storage
- PDF generation
- demo submission boundaries
- what happens after submission

No unsupported service promise is made.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Verify both routes at mobile and desktop widths and confirm Header active states, CTA links and keyboard focus.
