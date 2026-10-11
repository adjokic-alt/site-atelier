"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { SavedCount } from "./SavedCount";

/** Pages that open with a full-bleed photograph: the header floats over it until you scroll. */
function hasPhotoHero(pathname: string) {
  return pathname === "/";
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overPhoto = hasPhotoHero(pathname) && !scrolled;

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header
        data-over-photo={overPhoto || undefined}
        className={`${hasPhotoHero(pathname) ? "fixed inset-x-0" : "sticky"} top-0 z-40 transition-colors duration-500 ${
          overPhoto ? "bg-transparent text-white" : "border-b border-border bg-paper/95 text-ink-900 backdrop-blur-md"
        }`}
      >
        <Container className="flex min-h-16 items-center justify-between gap-3 py-2 md:min-h-20">
          <Link
            href="/"
            className="focus-ring min-w-0 shrink rounded-sm font-display text-2xl leading-none md:text-[28px]"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="block truncate">{siteConfig.name}</span>
          </Link>

          <DesktopNavigation items={siteConfig.primaryNav} overPhoto={overPhoto} />

          <div className="flex shrink-0 items-center gap-2">
            <SavedCount />
            <Link
              href="/inquiry"
              className={`focus-ring hidden min-h-11 items-center rounded-full px-5 text-sm font-semibold transition-colors xl:inline-flex ${
                overPhoto ? "bg-white text-ink-900 hover:bg-white/90" : "bg-ink-900 text-white hover:bg-ink-700"
              }`}
            >
              Start my brief
            </Link>
            <MobileNavigation items={siteConfig.primaryNav} overPhoto={overPhoto} />
          </div>
        </Container>
      </header>
    </>
  );
}
