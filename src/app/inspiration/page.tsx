import type { Metadata } from "next";
import Link from "next/link";
import { InspirationMasonry } from "@/components/inspiration/InspirationMasonry";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const copy = {
  en: { title: "Inspiration", metaDesc: "Browse rooms across seven styles, tap the heart on what you love and let your moodboard find the pattern.", eyebrow: "Inspiration", h1: "Collect what feels right.", body: "Tap the heart on anything you love. Your moodboard notices the pattern. The wall reshuffles every visit.", cta: "Open my moodboard" },
  sr: { title: "Inspiracija", metaDesc: "Pregledajte prostorije u sedam stilova, označite srcem ono što volite i pustite da vaš moodboard pronađe obrazac.", eyebrow: "Inspiracija", h1: "Sakupite ono što vam prija.", body: "Dodirnite srce na svemu što volite. Vaš moodboard primećuje obrazac. Zid se meša pri svakoj poseti.", cta: "Otvorite moodboard" },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = pick(copy, await getLocale());
  return { title: t.title, description: t.metaDesc };
}

export default async function InspirationPage() {
  const t = pick(copy, await getLocale());
  return (
    <div className="px-5 pb-28 pt-[clamp(56px,8vw,104px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1328px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">{t.eyebrow}</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">{t.h1}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-700">{t.body}</p>
          </div>
          <Link href="/moodboard" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">{t.cta}</Link>
        </div>
        <InspirationMasonry showStyleFilter />
      </div>
    </div>
  );
}
