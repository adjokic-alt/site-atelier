# M12.2C Cloudflare Turnstile

Copy `src` over the existing project and replace files. Copy the four Turnstile lines from `.env.example` into `.env.local`.

Safe initial state:
```env
TURNSTILE_ENABLED=false
NEXT_PUBLIC_TURNSTILE_ENABLED=false
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

The existing Supabase and Resend flow continues to work while disabled.

After creating a Cloudflare Turnstile widget, add the site key and secret, then set both enabled flags to true and restart Next.js.

The client widget produces a token. `/api/brief` verifies that token with Cloudflare before any database or email operation. Tokens are reset after failed submissions. The existing honeypot remains active.

Checks:
```powershell
npm run lint
npx tsc --noEmit
npm run build
```
