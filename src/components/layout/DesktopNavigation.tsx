"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  label: string;
  href: string;
}

export function DesktopNavigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {items.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`focus-ring rounded-sm px-3 py-3 text-sm transition-colors ${active ? "bg-surface-sunken font-medium text-ink-900" : "text-ink-700 hover:bg-surface-sunken hover:text-ink-900"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
