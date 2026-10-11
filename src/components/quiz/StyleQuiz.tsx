"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { quizImages } from "@/content/quiz-images";
import { styleQuizQuestions } from "@/content/quiz-questions";
import { styleStudios } from "@/content/style-studios";
import { scoreStyleQuiz } from "@/lib/quiz/scoring";
import { useBrief } from "@/providers/BriefProvider";
import type { QuizAnswer, QuizResult } from "@/types";

const pad = "px-5 sm:px-8 lg:px-14";

/** The 45-second style quiz: six pairs of rooms, tap the one you'd rather live in. Same scoring as before. */
export function StyleQuiz() {
  const { dispatch } = useBrief();
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
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">Style quiz · 45 seconds</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">Let&apos;s find your style.</h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-700">Six pairs of rooms. Tap the one you&apos;d rather live in. No account, no email, no wrong answers.</p>
            <button type="button" onClick={() => setStarted(true)} className="focus-ring mt-10 inline-flex min-h-14 items-center rounded-full bg-ink-900 px-9 text-base font-semibold text-white hover:bg-ink-700">Start the quiz</button>
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
    const studio = styleStudios[result.primaryStyleId];
    return (
      <div>
        <section className="relative isolate h-[70svh] min-h-[520px] overflow-hidden bg-ink-900">
          <Image src={studio.heroImage} alt={studio.heroAlt} fill priority sizes="100vw" className="atelier-drift object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,14,.1)_30%,rgba(20,17,14,.65)_100%)]" />
          <div className={`relative mx-auto flex h-full max-w-[1440px] items-end ${pad} pb-14 text-white`}>
            <div>
              <p className="mb-4 text-[13px] uppercase tracking-[0.14em] text-white/85">Your style</p>
              <h1 className="atelier-rise font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] text-white">{result.profileName.replace(/\b(scandinavian|modern|minimalist|industrial|luxury|rustic|mediterranean)\b/g, (w) => w[0].toUpperCase() + w.slice(1))}</h1>
              <ul className="mt-6 flex flex-wrap gap-2">
                {result.traitTags.map((t) => <li key={t} className="rounded-full border border-white/50 px-4 py-2 text-sm capitalize">{t}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <div className={`${pad} py-14`}>
          <div className="mx-auto flex max-w-[1328px] flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl text-[17px] leading-relaxed text-ink-700">We&apos;ve added this to your brief. Now see it in real rooms, or keep collecting.</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/styles/${result.primaryStyleId}`} className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">See {studio.name} rooms</Link>
              <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-7 text-[15px] font-medium text-ink-900 hover:bg-surface">Collect inspiration</Link>
              <button type="button" onClick={retake} className="focus-ring min-h-[52px] rounded-full px-4 text-[15px] text-ink-700 underline underline-offset-4">Retake</button>
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
        <ol aria-label="Quiz progress" className="grid gap-2" style={{ gridTemplateColumns: `repeat(${total}, minmax(0,1fr))` }}>
          {styleQuizQuestions.map((q, i) => <li key={q.id} className={`h-[3px] rounded-full ${i <= index ? "bg-ink-900" : "bg-border"}`}><span className="sr-only">{i + 1}</span></li>)}
        </ol>
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-500">{index + 1} of {total}</p>
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
          <button type="button" disabled={index === 0} onClick={() => setIndex((v) => Math.max(0, v - 1))} className="focus-ring min-h-11 rounded-full px-3 text-[15px] text-ink-700 disabled:opacity-30">← Back</button>
          <button type="button" onClick={() => answer(null)} className="focus-ring min-h-11 rounded-full px-3 text-[15px] text-ink-700 underline underline-offset-4">Skip this one</button>
        </div>
      </div>
    </div>
  );
}
