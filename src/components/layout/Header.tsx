import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

/**
 * M0 scope: a static, always-visible header. The scroll-aware transparent
 * hero treatment and the full-screen mobile menu from the Phase 2/3A spec
 * both need client-side state and are deferred to the milestone that first
 * needs them, rather than being built ahead of any page that uses them.
 * Nav links wrap in a horizontally scrolling row on narrow screens instead,
 * so every link stays reachable without new interactive state.
 */
export function Header() {
  return (
    <header className="border-b border-border bg-paper">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="focus-ring shrink-0 rounded-sm font-display text-lg font-medium text-ink-900"
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex min-w-0 items-center gap-6 overflow-x-auto"
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
      </Container>
    </header>
  );
}
