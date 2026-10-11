import Image from "next/image";
import Link from "next/link";
import { quizImages } from "@/content/quiz-images";

const pairs: [string, string, string][] = [
  ["quiz-light-airy", "quiz-dark-architectural", "Light or dark?"],
  ["quiz-warm-natural", "quiz-cool-sleek", "Warm or cool?"],
  ["quiz-raw-character", "quiz-refined-finish", "Raw or refined?"],
];

/** The style quiz, front and centre: the quickest way to know what someone likes. */
export function HomeQuiz() {
  return (
    <section aria-label="Style quiz" className="bg-ink-900 px-5 py-[clamp(72px,10vw,140px)] text-white sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1328px] items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-4 text-[13px] uppercase tracking-[0.12em] text-[#cfc7ba]">Style quiz · 45 seconds</p>
          <h2 className="font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.98] text-white">Not sure what your style is?</h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#e9e3d9]">Six pairs of rooms. Tap the one you&apos;d rather live in, and we&apos;ll name your style.</p>
          <Link href="/styles/not-sure" className="focus-ring mt-10 inline-flex min-h-14 items-center rounded-full bg-white px-9 text-base font-semibold text-ink-900 hover:bg-white/90">Find my style</Link>
        </div>
        <ul className="grid gap-4">
          {pairs.map(([a, b, label]) => (
            <li key={label} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded"><Image src={quizImages[a]} alt="" fill sizes="(min-width:1024px) 25vw, 45vw" className="object-cover" /></div>
              <span className="w-[clamp(64px,8vw,104px)] text-center font-display text-[clamp(1rem,1.6vw,1.375rem)] italic leading-tight text-[#e9e3d9]">{label}</span>
              <div className="relative aspect-[16/10] overflow-hidden rounded"><Image src={quizImages[b]} alt="" fill sizes="(min-width:1024px) 25vw, 45vw" className="object-cover" /></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
