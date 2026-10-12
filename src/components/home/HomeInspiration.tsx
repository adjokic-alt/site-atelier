"use client";

import Link from "next/link";
import { InspirationMasonry } from "@/components/inspiration/InspirationMasonry";
import { useLocale } from "@/i18n/client";
import { pick } from "@/i18n/locales";

const copy = {
  en: { label: "Inspiration", title: "Start with what you love.", all: "See all inspiration" },
  sr: { label: "Inspiracija", title: "Počnite od onoga što volite.", all: "Pogledajte svu inspiraciju" },
};

export function HomeInspiration() {
  const t = pick(copy, useLocale());
  return (
    <section id="inspiration" className="px-5 pb-20 pt-[clamp(72px,10vw,140px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1328px]">
        <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">{t.label}</p>
        <h2 className="mb-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">{t.title}</h2>
        <InspirationMasonry limit={12} />
        <div className="mt-10 flex justify-center">
          <Link href="/inspiration" className="focus-ring inline-flex min-h-12 items-center gap-2.5 border-b border-ink-900 text-[15px] font-medium text-ink-900">
            {t.all} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
