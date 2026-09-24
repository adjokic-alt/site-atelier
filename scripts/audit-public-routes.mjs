const baseUrl = (process.env.AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const routes = [
  "/", "/styles", "/styles/scandinavian", "/styles/modern", "/styles/minimalist",
  "/styles/industrial", "/styles/luxury", "/styles/rustic", "/styles/mediterranean",
  "/inspiration", "/services", "/how-it-works", "/about", "/contact",
  "/privacy", "/terms", "/imprint", "/cookies", "/robots.txt", "/sitemap.xml",
  "/opengraph-image",
];
const privateRoutes = ["/brief", "/moodboard", "/inquiry/style", "/inquiry/thank-you", "/styles/not-sure"];
let failed = false;

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
  const ok = response.status >= 200 && response.status < 400;
  console.log(`${ok ? "PASS" : "FAIL"} ${response.status} ${route}`);
  if (!ok) failed = true;
}

for (const route of privateRoutes) {
  const response = await fetch(`${baseUrl}${route}`);
  const html = await response.text();
  const noindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
    || /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots/i.test(html);
  console.log(`${noindex ? "PASS" : "FAIL"} noindex ${route}`);
  if (!noindex) failed = true;
}

if (failed) process.exit(1);
