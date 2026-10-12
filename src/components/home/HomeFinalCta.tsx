import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const copy = {
  en: { label: "Begin", alt: "Sunny balcony with an olive tree and a travertine table", title: "Every home begins with a single image.", cta: "Explore Inspiration" },
  sr: { label: "Počnite", alt: "Sunčana terasa sa maslinom i stolom od travertina", title: "Svaki dom počinje jednom slikom.", cta: "Istražite inspiraciju" },
};

export async function HomeFinalCta() {
  const t = pick(copy, await getLocale());
  return (
    <section aria-label={t.label} className="relative isolate h-[clamp(560px,60vw,760px)] overflow-hidden">
      <Image src="/images/inspiration/mediterranean-olive-balcony.jpg" alt={t.alt} fill sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(20,17,14,0.4)]" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="max-w-[900px] font-display text-[clamp(2.75rem,6vw,6rem)] leading-none text-white">{t.title}</h2>
        <Link href="/inspiration" className="focus-ring mt-11 inline-flex min-h-[52px] items-center rounded-full bg-white px-8 text-[15px] font-semibold text-ink-900 hover:bg-white/90">
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
