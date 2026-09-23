import Link from "next/link";
import { BriefChip } from "@/components/brief";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-[70] -translate-y-24 rounded-sm bg-ink-900 px-4 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur-md">
        <Container className="flex min-h-16 items-center justify-between gap-3 py-2 md:min-h-20">
          <Link
            href="/"
            className="focus-ring min-w-0 shrink rounded-sm font-display text-lg font-medium text-ink-900 sm:text-xl"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="block truncate">{siteConfig.name}</span>
          </Link>

          <DesktopNavigation items={siteConfig.primaryNav} />

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <BriefChip />
            </div>
            <Link
              href="/inquiry/style"
              className="focus-ring hidden min-h-12 items-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white hover:opacity-90 xl:inline-flex"
            >
              Start your project
            </Link>
            <MobileNavigation items={siteConfig.primaryNav} />
          </div>
        </Container>
      </header>
    </>
  );
}
