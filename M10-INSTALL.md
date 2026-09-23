# M10 Demo Submission
Copy the complete `src` folder over the existing project and choose Replace files in destination.

Adds POST `/api/brief`, server validation, stable reference code, in-memory demo idempotency, server-side strength and fit flags, internal triage, console email previews, PDF generation during submission, `/inquiry/thank-you`, and the real Review submit button.

No real email, durable database record, external upload or durable Vercel storage is created.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```
