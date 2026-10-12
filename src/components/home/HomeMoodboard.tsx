import Image from "next/image";
import Link from "next/link";

import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const tile = "relative overflow-hidden rounded";

const copy = {
  en: { eyebrow: "Your moodboard", title: "Patterns appear naturally.", body: "Save images as you browse. Your moodboard quietly finds the colours, materials and moods you keep coming back to.", cta: "Open my moodboard", keep: "You keep choosing", keepValue: "Warm oak, linen and soft daylight" },
  sr: { eyebrow: "Vaš moodboard", title: "Obrasci se pojave sami.", body: "Čuvajte slike dok pregledate. Vaš moodboard tiho pronalazi boje, materijale i atmosferu kojima se stalno vraćate.", cta: "Otvorite moodboard", keep: "Stalno birate", keepValue: "Topli hrast, lan i meko dnevno svetlo" },
};

export async function HomeMoodboard() {
  const t = pick(copy, await getLocale());
  return (
    <section id="moodboard" className="px-5 py-[clamp(72px,10vw,140px)] sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1328px] items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
        <div className="max-w-[480px]">
          <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">{t.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">{t.title}</h2>
          <p className="mt-7 text-[17px] leading-[1.7] text-ink-700">
            {t.body}
          </p>
          <Link href="/moodboard" className="focus-ring mt-9 inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">
            {t.cta}
          </Link>
        </div>

        <div className="relative pb-8">
          <div className="grid grid-cols-6 auto-rows-[56px] gap-3 sm:auto-rows-[72px]">
            <div className={`${tile} col-span-3 row-span-4`}><Image src="/images/inspiration/daylight-living-room.png" alt="" fill sizes="33vw" className="object-cover" /></div>
            <div className={`${tile} col-span-3 row-span-3`}><Image src="/images/inspiration/warm-minimal-bathroom.png" alt="" fill sizes="33vw" className="object-cover" /></div>
            <div className={`${tile} col-span-2 row-span-3`}><Image src="/images/inspiration/soft-bedroom-layers.png" alt="" fill sizes="22vw" className="object-cover" /></div>
            <div className="col-span-1 row-span-3 flex flex-col gap-1.5" aria-hidden="true">
              {["#E7DFD3", "#C9B49A", "#8C7158", "#4B4036"].map((c) => <div key={c} className="flex-1 rounded-sm" style={{ background: c }} />)}
            </div>
            <div className={`${tile} col-span-3 row-span-2`}><Image src="/images/inspiration/calm-concealed-kitchen.png" alt="" fill sizes="33vw" className="object-cover" /></div>
          </div>
          <div className="absolute -left-2 bottom-0 max-w-[300px] rounded-md bg-surface px-6 py-5 shadow-[0_18px_50px_rgba(30,28,25,0.14)] lg:-left-8">
            <p className="mb-2.5 text-xs uppercase tracking-[0.12em] text-ink-500">{t.keep}</p>
            <p className="font-display text-[26px] leading-[1.15] text-ink-900">{t.keepValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
