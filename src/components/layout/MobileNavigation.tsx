"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousPathname = useRef(pathname);

  const closeMenu = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      const timer = window.setTimeout(() => setOpen(false), 0);
      return () => window.clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Open main menu"
        onClick={() => setOpen(true)}
        className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-border-strong bg-surface text-ink-900"
      >
        <span aria-hidden="true" className="grid gap-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close main menu"
            className="absolute inset-0 bg-ink-900/45 backdrop-blur-[2px]"
            onClick={() => closeMenu()}
          />
          <div
            ref={dialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="absolute inset-y-0 right-0 flex w-[min(88vw,390px)] flex-col overflow-y-auto bg-paper p-5 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 id="mobile-menu-title" className="font-display text-lg text-ink-900">Menu</h2>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close main menu"
                onClick={() => closeMenu()}
                className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-border-strong text-2xl text-ink-900"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <nav aria-label="Mobile primary" className="mt-6">
              <ul className="divide-y divide-border">
                {items.map((item) => {
                  const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`focus-ring flex min-h-14 items-center justify-between rounded-sm px-2 text-base font-medium ${active ? "text-accent" : "text-ink-900"}`}
                      >
                        {item.label}<span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto grid gap-3 border-t border-border pt-6">
              <Link href="/inquiry/style" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white">Start your project</Link>
              <Link href="/brief" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-ink-900 px-5 text-sm font-medium text-ink-900">Open my brief</Link>
              <p className="text-center text-xs text-ink-500">Your draft is stored in this browser.</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
