"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { quizImages } from "@/content/quiz-images";
import { styleQuizQuestions as baseQuestions } from "@/content/quiz-questions";
import { localizeQuiz, profileNameSr, traitsSr } from "@/content/quiz-sr";
import { getStyleStudio } from "@/content/style-studios-sr";
import { useLocale } from "@/i18n/client";
import { pick } from "@/i18n/locales";
import { scoreStyleQuiz } from "@/lib/quiz/scoring";
import { useBrief } from "@/providers/BriefProvider";
import type { QuizAnswer, QuizResult } from "@/types";

const pad = "px-5 sm:px-8 lg:px-14";

const copy = {
  en: { eyebrow: "Style quiz · 45 seconds", h1: "Let’s find your style.", body: "Six pairs of rooms. Tap the one you’d rather live in. No account, no email, no wrong answers.", start: "Start the quiz", your: "Your style", added: "We’ve added this to your brief. Now see it in real rooms, or keep collecting.", see: (n: string) => `See ${n} rooms`, collect: "Collect inspiration", retake: "Retake", progress: "Quiz progress", of: (i: number, n: number) => `${i} of ${n}`, back: "← Back", skip: "Skip this one" },
  sr: { eyebrow: "Kviz stila · 45 sekundi", h1: "Pronađimo vaš stil.", body: "Šest parova prostorija. Dodirnite onu u kojoj biste radije živeli. Bez naloga, bez imejla, bez pogrešnih odgovora.", start: "Započnite kviz", your: "Vaš stil", added: "Dodali smo ga u vaš brief. Pogledajte ga u pravim prostorijama ili nastavite da sakupljate.", see: (n: string) => `Pogledajte prostorije: ${n}`, collect: "Sakupljajte inspiraciju", retake: "Ponovite kviz", progress: "Napredak kviza", of: (i: number, n: number) => `${i} od ${n}`, back: "← Nazad", skip: "Preskočite" },
};

/** The 45-second style quiz: six pairs of rooms, tap the one you'd rather live in. Same scoring as before. */
export function StyleQuiz() {
  const { dispatch } = useBrief();
  const locale = useLocale();
  const t = pick(copy, locale);
  const styleQuizQuestions = localizeQuiz(baseQuestions, locale);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const question = styleQuizQuestions[index];
  const total = styleQuizQuestions.length;

  const applyResult = (quizResult: QuizResult) => {
    dispatch({ type: "SET_PRIMARY_STYLE", styleId: quizResult.primaryStyleId });
    dispatch({ type: "SET_ACCENT_STYLE", styleId: quizResult.accentStyleId });
    setResult(quizResult);
  };
  const answer = (optionId: string | null) => {
    if (!question) return;
    const next = [...answers.filter((a) => a.questionId !== question.id), { questionId: question.id, optionId }];
    setAnswers(next);
    if (index === total - 1) applyResult(scoreStyleQuiz(next, styleQuizQuestions));
    else setIndex((v) => v + 1);
  };
  const retake = () => { setStarted(true); setIndex(0); setAnswers([]); setResult(null); };

  if (!started) {
    const preview = styleQuizQuestions.slice(0, 2).flatMap((q) => [q.optionA, q.optionB]);
    return (
      <div className={`${pad} pb-28 pt-[clamp(48px,7vw,96px)]`}>
        <div className="mx-auto grid max-w-[1328px] items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">{t.eyebrow}</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">{t.h1}</h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-700">{t.body}</p>
            <button type="button" onClick={() => setStarted(true)} className="focus-ring mt-10 inline-flex min-h-14 items-center rounded-full bg-ink-900 px-9 text-base font-semibold text-white hover:bg-ink-700">{t.start}</button>
          </div>
          <div className="grid grid-cols-2 gap-3" aria-hidden="true">
            {preview.map((o, i) => (
              <div key={o.id} className={`relative overflow-hidden rounded ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"} ${i === 1 ? "mt-10" : ""} ${i === 3 ? "-mt-10" : ""}`}>
                <Image src={quizImages[o.imageId]} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    const studio = getStyleStudio(result.primaryStyleId, locale);
    return (
      <div>
        <section className="relative isolate h-[70svh] min-h-[520px] overflow-hidden bg-ink-900">
          <Image src={studio.heroImage} alt={studio.heroAlt} fill priority sizes="100vw" className="atelier-drift object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,14,.1)_30%,rgba(20,17,14,.65)_100%)]" />
          <div className={`relative mx-auto flex h-full max-w-[1440px] items-end ${pad} pb-14 text-white`}>
            <div>
              <p className="mb-4 text-[13px] uppercase tracking-[0.14em] text-white/85">{t.your}</p>
              <h1 className="atelier-rise font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] text-white">{locale === "sr" ? profileNameSr(result.primaryStyleId, result.accentStyleId) : result.profileName.replace(/\b(scandinavian|modern|minimalist|industrial|luxury|rustic|mediterranean)\b/g, (w) => w[0].toUpperCase() + w.slice(1))}</h1>
              <ul className="mt-6 flex flex-wrap gap-2">
                {(locale === "sr" ? traitsSr[result.primaryStyleId] : result.traitTags).map((tag) => <li key={tag} className="rounded-full border border-white/50 px-4 py-2 text-sm capitalize">{tag}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <div className={`${pad} py-14`}>
          <div className="mx-auto flex max-w-[1328px] flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl text-[17px] leading-relaxed text-ink-700">{t.added}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/styles/${result.primaryStyleId}`} className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">{t.see(studio.name)}</Link>
              <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-7 text-[15px] font-medium text-ink-900 hover:bg-surface">{t.collect}</Link>
              <button type="button" onClick={retake} className="focus-ring min-h-[52px] rounded-full px-4 text-[15px] text-ink-700 underline underline-offset-4">{t.retake}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!question) return null;
  const chosen = answers.find((a) => a.questionId === question.id)?.optionId;

  return (
    <div className={`${pad} pb-24 pt-10 md:pt-14`}>
      <div className="mx-auto max-w-[1200px]">
        <ol aria-label={t.progress} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${total}, minmax(0,1fr))` }}>
          {styleQuizQuestions.map((q, i) => <li key={q.id} className={`h-[3px] rounded-full ${i <= index ? "bg-ink-900" : "bg-border"}`}><span className="sr-only">{i + 1}</span></li>)}
        </ol>
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-500">{t.of(index + 1, total)}</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-ink-900">{question.prompt}</h1>
        </div>
        <div role="radiogroup" aria-label={question.prompt} className="mt-10 grid grid-cols-2 gap-3 sm:gap-6">
          {[question.optionA, question.optionB].map((o) => (
            <button key={o.id} type="button" role="radio" aria-checked={chosen === o.id} onClick={() => answer(o.id)}
              className={`focus-ring group overflow-hidden rounded-md bg-surface text-left transition-shadow ${chosen === o.id ? "ring-2 ring-ink-900" : "ring-1 ring-border hover:ring-ink-500"}`}>
              <span className="relative block aspect-[4/5] overflow-hidden sm:aspect-[4/3]">
                <Image src={quizImages[o.imageId]} alt={o.ariaLabel} fill sizes="(min-width:1200px) 600px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </span>
              <span className="block p-4 font-display text-[clamp(1.25rem,2.4vw,1.75rem)] text-ink-900 sm:p-5">{o.caption}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between">
          <button type="button" disabled={index === 0} onClick={() => setIndex((v) => Math.max(0, v - 1))} className="focus-ring min-h-11 rounded-full px-3 text-[15px] text-ink-700 disabled:opacity-30">{t.back}</button>
          <button type="button" onClick={() => answer(null)} className="focus-ring min-h-11 rounded-full px-3 text-[15px] text-ink-700 underline underline-offset-4">{t.skip}</button>
        </div>
      </div>
    </div>
  );
}
