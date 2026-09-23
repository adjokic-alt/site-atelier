import Link from "next/link";
import { BriefChip } from "@/components/brief";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

export function Header() {
  return (
    <header className="border-b border-border bg-paper">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-2 md:min-h-20">
        <Link
          href="/"
          className="focus-ring shrink-0 rounded-sm font-display text-lg font-medium text-ink-900"
        >
          {siteConfig.name}
        </Link>

        <div className="flex min-w-0 items-center gap-3">
          <nav
            aria-label="Primary"
            className="hidden min-w-0 items-center gap-5 overflow-x-auto lg:flex"
          >
            {siteConfig.primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring shrink-0 rounded-sm text-sm text-ink-700 transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <BriefChip />
          <Link
            href="/styles"
            className="focus-ring hidden min-h-12 items-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white hover:opacity-90 sm:inline-flex"
          >
            Find your style
          </Link>
        </div>
      </Container>
    </header>
  );
}
