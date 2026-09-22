import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-sunken">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ink-900">{siteConfig.name}</p>
            {/* ⚙ PLACEHOLDER — replace with the real registered business address. */}
            <p className="mt-3 text-sm text-ink-500">
              Placeholder address — registered business address to be added
              here before launch.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-medium text-ink-500">Explore</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded-sm text-sm text-ink-700 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="text-xs font-medium text-ink-500">Legal</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring rounded-sm text-sm text-ink-700 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* ⚙ PLACEHOLDER — replace with the real, monitored contact address. */}
        <p className="mt-10 text-xs text-ink-500">
          {siteConfig.contactEmail} — placeholder contact address.
        </p>
      </Container>
    </footer>
  );
}
