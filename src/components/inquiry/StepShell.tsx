"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { styleMix } from "@/lib/brief/style-mix";
import { useBrief } from "@/providers/BriefProvider";
import { flowIndex, flowSteps, type InquiryStepId } from "@/lib/inquiry/steps";
import { LiveBrief } from "./LiveBrief";

interface StepShellProps {
  step: InquiryStepId;
  title: string;
  /** Shown beside the title on wide screens, under it on phones. */
  titleAside?: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
  canContinue?: boolean;
  onContinue?: () => void;
  continueLabel?: string;
}

/** Calm five-step frame: thin step rail, one question, the brief filling in beside it. */
export function StepShell({ step, title, titleAside, intro, children, canContinue = true, onContinue, continueLabel }: StepShellProps) {
  const router = useRouter();
  useAutoStyle();
  const index = flowIndex(step);
  const inFlow = index >= 0;
  const previous = inFlow && index > 0 ? flowSteps[index - 1] : null;
  const next = inFlow && index < flowSteps.length - 1 ? flowSteps[index + 1] : null;
  const go = () => {
    onContinue?.();
    router.push(next ? `/inquiry/${next.id}` : "/inquiry/goals");
  };

  return (
    <div className="px-5 pb-28 pt-10 sm:px-8 md:pt-14 lg:px-14">
      <div className="mx-auto max-w-[1328px]">
        <ol aria-label="Brief steps" className="grid grid-cols-5 gap-2">
          {flowSteps.map((s, i) => {
            const state = !inFlow ? "todo" : i < index ? "done" : i === index ? "current" : "todo";
            return (
              <li key={s.id}>
                <Link href={`/inquiry/${s.id}`} aria-current={state === "current" ? "step" : undefined} className="focus-ring block rounded-sm pb-1">
                  <span className={`mb-2.5 block h-[3px] rounded-full ${state === "todo" ? "bg-border" : "bg-ink-900"}`} />
                  <span className={`text-[13px] ${state === "current" ? "font-semibold text-ink-900" : "text-ink-500"}`}>{s.title}</span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="mt-[clamp(40px,6vw,80px)] flex flex-wrap items-start gap-[clamp(40px,6vw,96px)]">
          <section className="min-w-0 flex-[999_1_560px]">
            <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">
              {inFlow ? `Step ${index + 1} of ${flowSteps.length}` : "Optional details"}
            </p>
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
              <h1 tabIndex={-1} className="font-display text-[clamp(2.75rem,5.6vw,5rem)] leading-none text-ink-900">{title}</h1>
              {titleAside}
            </div>
            {intro ? <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-700">{intro}</p> : null}
            <div className="mt-9 space-y-9">{children}</div>

            <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6">
              {previous ? (
                <Link href={`/inquiry/${previous.id}`} className="focus-ring inline-flex min-h-12 items-center rounded-full px-2 text-[15px] font-medium text-ink-700 hover:text-ink-900">← Back</Link>
              ) : (
                <Link href={inFlow ? "/moodboard" : "/inquiry/goals"} className="focus-ring inline-flex min-h-12 items-center rounded-full px-2 text-[15px] font-medium text-ink-700 hover:text-ink-900">
                  {inFlow ? "← Back to moodboard" : "← Back to goals"}
                </Link>
              )}
              {next || !inFlow ? (
                <button type="button" disabled={!canContinue} onClick={go} className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-8 text-[15px] font-semibold text-white hover:bg-ink-700 disabled:opacity-40">
                  {continueLabel ?? (next?.id === "review" ? "Create my brief" : inFlow ? "Continue" : "Done")}
                </button>
              ) : null}
            </div>
          </section>

          <div className="hidden min-w-0 max-w-[480px] flex-[1_1_360px] lg:block">
            <LiveBrief />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Feels like": a style from the quiz (or picked by hand) always wins. Without one, take the first impression from the saved pictures. */
let autoStyleDone = false; // once per visit, so clearing the style by hand sticks
function useAutoStyle() {
  const { brief, dispatch, hydrated } = useBrief();
  const ids = brief.visuals.moodboardItemIds;
  const primary = brief.style.primaryStyleId;
  useEffect(() => {
    if (!hydrated || primary || autoStyleDone) return;
    const mix = styleMix(ids);
    if (!mix.length) return;
    autoStyleDone = true;
    dispatch({ type: "SET_PRIMARY_STYLE", styleId: mix[0].styleId });
    if (mix[1]) dispatch({ type: "SET_ACCENT_STYLE", styleId: mix[1].styleId });
  }, [hydrated, primary, ids, dispatch]);
}
