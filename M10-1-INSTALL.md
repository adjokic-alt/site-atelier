# M10.1 Validation UX

Copy the complete `src` folder over the existing M10 project and choose Replace files in destination.

Behavior:
- Send validates the five required fields before any request.
- The browser navigates to the first invalid step.
- The first invalid control is focused and scrolled into view.
- Project category, country, name, email and consent receive red visual states and accessible error messages.
- An error summary links directly to every missing field.
- Errors disappear when corrected.
- Server validation from M10 remains unchanged and authoritative.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```
