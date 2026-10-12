"use client";

import { useLocale, useSetLocale } from "@/i18n/client";
import { locales } from "@/i18n/locales";

/** EN · SR — small text switch in the header and the mobile menu. */
export function LanguageSwitch({ overPhoto = false, className = "" }: { overPhoto?: boolean; className?: string }) {
  const locale = useLocale();
  const setLocale = useSetLocale();
  return (
    <div role="group" aria-label={locale === "sr" ? "Jezik" : "Language"} className={`flex items-center text-[13px] font-medium ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? <span aria-hidden="true" className={overPhoto ? "text-white/50" : "text-border-strong"}>·</span> : null}
          <button
            type="button"
            lang={l}
            aria-pressed={locale === l}
            aria-label={l === "sr" ? "Srpski" : "English"}
            onClick={() => locale !== l && setLocale(l)}
            className={`focus-ring inline-flex min-h-11 min-w-9 items-center justify-center rounded-full uppercase tracking-[0.08em] transition-colors ${
              locale === l
                ? overPhoto ? "text-white underline underline-offset-4" : "text-ink-900 underline underline-offset-4"
                : overPhoto ? "text-white/70 hover:text-white" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
