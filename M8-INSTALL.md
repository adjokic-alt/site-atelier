# M8 Inquiry Flow

Copy the complete `src` folder over the existing project and choose Replace files in destination. No manual editing is required.

Important: this replaces ClientBrief, its initializer, reducer and schema. Existing M4-M7 drafts are migrated by Zod defaults when loaded.

Routes:
- /inquiry/style
- /inquiry/project
- /inquiry/goals
- /inquiry/space
- /inquiry/budget
- /inquiry/photos
- /inquiry/review

Run:
```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

M8 is local demo only. File names are recorded but file bytes are not persisted or uploaded. The final button validates contact details and shows a demo reference without sending data.
