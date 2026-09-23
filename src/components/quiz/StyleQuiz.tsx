"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Container, ProgressBar } from "@/components/ui";
import { styleQuizQuestions } from "@/content/quiz-questions";
import { scoreStyleQuiz } from "@/lib/quiz/scoring";
import { useBrief } from "@/providers/BriefProvider";
import type { QuizAnswer, QuizResult } from "@/types";

export function StyleQuiz() {
  const { dispatch } = useBrief();
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const question = styleQuizQuestions[index];
  const currentAnswer = question ? answers.find((answer) => answer.questionId === question.id) : undefined;
  const progress = result ? styleQuizQuestions.length : index;

  const applyResult = (quizResult: QuizResult) => {
    dispatch({ type: "SET_PRIMARY_STYLE", styleId: quizResult.primaryStyleId });
    dispatch({ type: "SET_ACCENT_STYLE", styleId: quizResult.accentStyleId });
    setResult(quizResult);
  };

  const answer = (optionId: string | null) => {
    if (!question) return;
    const nextAnswers = [...answers.filter((item) => item.questionId !== question.id), { questionId: question.id, optionId }];
    setAnswers(nextAnswers);
    if (index === styleQuizQuestions.length - 1) applyResult(scoreStyleQuiz(nextAnswers, styleQuizQuestions));
    else setIndex((value) => value + 1);
  };

  const retake = () => { setStarted(true); setIndex(0); setAnswers([]); setResult(null); };

  const profileGradient = useMemo(() => {
    const gradients: Record<string, string> = { scandinavian: "linear-gradient(145deg,#eff1ed,#bccccc,#789095)", modern: "linear-gradient(145deg,#a9b0bd,#566279,#283248)", minimalist: "linear-gradient(145deg,#f0ece5,#c8beb2,#948a7e)", industrial: "linear-gradient(145deg,#c7b6a8,#9e603e,#49433e)", luxury: "linear-gradient(145deg,#b6beb5,#5d6e60,#2c382f)", rustic: "linear-gradient(145deg,#dbc3ab,#9a6949,#5c4432)", mediterranean: "linear-gradient(145deg,#eee1c8,#82abb1,#397481)" };
    return result ? gradients[result.primaryStyleId] : gradients.scandinavian;
  }, [result]);

  if (!started) return <main className="py-16 md:py-24"><Container><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Visual style quiz</p><h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-display">Let&apos;s find your style.</h1><p className="mx-auto mt-5 max-w-2xl text-lead text-ink-700">Six quick visual choices. No account, no email and no wrong answers.</p><div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3" aria-hidden="true"><span className="aspect-[4/3] rounded-lg bg-[#dce5e7]"/><span className="aspect-[4/3] rounded-lg bg-[#526078]"/><span className="aspect-[4/3] rounded-lg bg-[#b77d59]"/><span className="aspect-[4/3] rounded-lg bg-[#5c7968]"/></div><Button size="lg" className="mt-10" onClick={() => setStarted(true)}>Start the 45-second quiz</Button></div></Container></main>;

  if (result) return <main className="py-16 md:py-24"><Container><div className="mx-auto max-w-4xl"><div className="aspect-[16/7] rounded-xl" style={{ background: profileGradient }} role="img" aria-label={`Illustrative colour direction for ${result.profileName}`}/><div className="mx-auto -mt-12 max-w-2xl rounded-xl bg-paper p-6 text-center shadow-lg md:p-10"><p className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Your style profile</p><h1 className="mt-4 font-display text-4xl text-ink-900 md:text-h1">{result.profileName}</h1><div className="mt-6 flex flex-wrap justify-center gap-2">{result.traitTags.map((trait)=><span key={trait} className="rounded-full border border-border-strong px-4 py-2 text-sm capitalize text-ink-700">{trait}</span>)}</div><p className="mt-6 text-ink-700">The result has been added to your brief. The recommendation is deterministic and based only on the six choices you made.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link href={`/styles/${result.primaryStyleId}`} className="focus-ring inline-flex min-h-[52px] items-center rounded-sm bg-ink-900 px-6 font-medium text-white">Explore your Style Studio</Link><Button variant="secondary" size="lg" onClick={retake}>Retake</Button></div></div></div></Container></main>;

  if (!question) return null;

  return <main className="py-10 md:py-16"><Container><div className="mx-auto max-w-5xl"><ProgressBar current={progress + 1} total={styleQuizQuestions.length} label="Style quiz"/><div className="mt-10 text-center"><p className="text-sm text-ink-500">Choice {index + 1} of {styleQuizQuestions.length}</p><h1 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight text-ink-900 md:text-h1">{question.prompt}</h1></div><div role="radiogroup" aria-label={question.prompt} className="mt-10 grid gap-5 md:grid-cols-2">{[question.optionA, question.optionB].map((option)=><button key={option.id} type="button" role="radio" aria-checked={currentAnswer?.optionId===option.id} onClick={()=>answer(option.id)} className="focus-ring group overflow-hidden rounded-xl border border-border bg-surface text-left shadow-sm transition-transform hover:-translate-y-1"><span className="block aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]" style={{background:option.gradient}} role="img" aria-label={option.ariaLabel}/><span className="block p-5 font-display text-h3 text-ink-900">{option.caption}</span></button>)}</div><div className="mt-8 flex items-center justify-between"><Button variant="tertiary" disabled={index===0} onClick={()=>setIndex((value)=>Math.max(0,value-1))}>← Back</Button><Button variant="tertiary" onClick={()=>answer(null)}>Skip this one</Button></div></div></Container></main>;
}
