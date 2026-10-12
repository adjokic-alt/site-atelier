import Image from "next/image";
import Link from "next/link";
import { quizImages } from "@/content/quiz-images";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const pairs: [string, string][] = [
  ["quiz-light-airy", "quiz-dark-architectural"],
  ["quiz-warm-natural", "quiz-cool-sleek"],
  ["quiz-raw-character", "quiz-refined-finish"],
];

const copy = {
  en: { section: "Style quiz", eyebrow: "Style quiz · 45 seconds", title: "Not sure what your style is?", body: "Six pairs of rooms. Tap the one you’d rather live in, and we’ll name your style.", cta: "Find my style", labels: ["Light or dark?", "Warm or cool?", "Raw or refined?"] },
  sr: { section: "Kviz stila", eyebrow: "Kviz stila · 45 sekundi", title: "Niste sigurni koji je vaš stil?", body: "Šest parova prostorija. Dodirnite onu u kojoj biste radije živeli, a mi ćemo imenovati vaš stil.", cta: "Pronađite svoj stil", labels: ["Svetlo ili tamno?", "Toplo ili hladno?", "Sirovo ili profinjeno?"] },
};

/** The style quiz, front and centre: the quickest way to know what someone likes. */
export async function HomeQuiz() {
  const t = pick(copy, await getLocale());
  return (
    <section aria-label={t.section} className="bg-ink-900 px-5 py-[clamp(72px,10vw,140px)] text-white sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1328px] items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-4 text-[13px] uppercase tracking-[0.12em] text-[#cfc7ba]">{t.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.98] text-white">{t.title}</h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#e9e3d9]">{t.body}</p>
          <Link href="/styles/not-sure" className="focus-ring mt-10 inline-flex min-h-14 items-center rounded-full bg-white px-9 text-base font-semibold text-ink-900 hover:bg-white/90">{t.cta}</Link>
        </div>
        <ul className="grid gap-4">
          {pairs.map(([a, b], i) => (
            <li key={a} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded"><Image src={quizImages[a]} alt="" fill sizes="(min-width:1024px) 25vw, 45vw" className="object-cover" /></div>
              <span className="w-[clamp(64px,8vw,104px)] text-center font-display text-[clamp(1rem,1.6vw,1.375rem)] italic leading-tight text-[#e9e3d9]">{t.labels[i]}</span>
              <div className="relative aspect-[16/10] overflow-hidden rounded"><Image src={quizImages[b]} alt="" fill sizes="(min-width:1024px) 25vw, 45vw" className="object-cover" /></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
