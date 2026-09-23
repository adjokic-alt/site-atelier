# M11.1 Navigation

Copy the complete `src` folder over the existing project and choose Replace files in destination.

Included:
- sticky responsive Header
- active desktop navigation states
- accessible mobile drawer
- body scroll lock while open
- Escape-key closing
- backdrop closing
- route-change closing
- focus return to menu trigger
- Skip to main content link
- My Brief access and Start your project CTA

Important: the application layout must render its content inside an element with `id="main-content"`. If the existing layout does not have that id, the skip link will not have a destination. The provided M11.1 package does not replace layout.tsx because the current project structure may already differ.

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```
