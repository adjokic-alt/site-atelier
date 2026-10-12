"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/client";
import { navLabel } from "@/i18n/names";

interface NavigationItem {
  label: string;
  href: string;
}

export function DesktopNavigation({ items, overPhoto = false }: { items: NavigationItem[]; overPhoto?: boolean }) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <nav aria-label={locale === "sr" ? "Glavni meni" : "Primary"} className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`focus-ring rounded-full px-3 py-3 text-sm tracking-[0.01em] underline-offset-[6px] transition-colors ${
              overPhoto ? "text-white hover:underline" : active ? "font-semibold text-ink-900 underline" : "text-ink-700 hover:text-ink-900 hover:underline"
            }`}
          >
            {navLabel(item.href, item.label, locale)}
          </Link>
        );
      })}
    </nav>
  );
}
