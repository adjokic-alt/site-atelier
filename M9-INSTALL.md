# M9 Brief Builder and PDF

1. Copy the complete `src` folder over the existing project and choose Replace files in destination.
2. Install the PDF library:

```powershell
npm install pdf-lib
```

3. Run:

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

4. Open `/brief` and click `Download A4 PDF`.

The generated PDF is customer-safe by structure. It consumes only ClientBrief and cannot include server-only internal notes or triage metadata. Local file bytes are not included.
