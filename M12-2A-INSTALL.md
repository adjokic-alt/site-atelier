# M12.2A Production Submission Foundation

This package adds production adapters for Supabase and Resend while preserving the existing console demo fallback.

## Install files
Copy `src`, `supabase`, and `.env.example` into the project.

## Install packages
```powershell
npm install @supabase/supabase-js resend
```

## Keep safe by default
Leave this false until setup and testing are complete:
```env
PRODUCTION_INTEGRATIONS_ENABLED=false
```

## Supabase
1. Create an EU project.
2. Open SQL Editor.
3. Run `supabase/migrations/202609240001_create_inquiries.sql`.
4. Copy the Project URL to `SUPABASE_URL`.
5. Copy the service-role key to `SUPABASE_SERVICE_ROLE_KEY`.
6. Never expose the service-role key to the browser or GitHub.

## Resend before a domain exists
Use Resend testing mode first. Keep `RESEND_FROM_EMAIL=Site Atelier <onboarding@resend.dev>` until a domain is purchased and verified. Testing restrictions may apply. Set `INQUIRY_NOTIFICATION_EMAIL=adjokic@gmail.com` locally and in Vercel.

## Activate only after a successful end-to-end test
```env
PRODUCTION_INTEGRATIONS_ENABLED=true
```

## Checks
```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Important behavior
- A successful production submission is stored in Supabase first.
- Customer and internal emails are sent through Resend with the PDF attached.
- Email provider IDs are stored after both sends.
- Duplicate `brief_id` values return the existing reference.
- Upload is intentionally deferred.
- Turnstile and Sentry are not yet activated by this package.
