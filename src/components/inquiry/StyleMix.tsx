"use client";

import { styleCatalog } from "@/content/style-catalog";
import { styleMix } from "@/lib/brief/style-mix";
import { useBrief } from "@/providers/BriefProvider";

const styleName = Object.fromEntries(styleCatalog.map((s) => [s.id, s.name]));

/** Beside "Your inspiration": the 1–3 styles your saved pictures mostly show. */
export function StyleMix() {
  const { brief, hydrated } = useBrief();
  const mix = hydrated ? styleMix(brief.visuals.moodboardItemIds) : [];
  if (!mix.length) return null;
  const sum = mix.reduce((n, s) => n + s.share, 0);

  return (
    <div className="w-full max-w-[420px] rounded-md bg-surface p-5 shadow-[0_8px_30px_rgba(30,28,25,0.06)]">
      <p className="text-[13px] uppercase tracking-[0.12em] text-ink-500">Your pictures mostly say</p>
      <p className="mt-2 font-display text-[clamp(1.6rem,2.4vw,2rem)] leading-tight text-ink-900">
        {mix.map((s) => styleName[s.styleId]).join(" · ")}
      </p>
      <div aria-hidden="true" className="mt-4 flex h-2 overflow-hidden rounded-full bg-border">
        {mix.map((s, i) => (
          <span key={s.styleId} style={{ width: `${(s.share / sum) * 100}%` }} className={["bg-ink-900", "bg-accent", "bg-[#c9a27e]"][i]} />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-ink-700">
        {mix.map((s, i) => (
          <li key={s.styleId} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className={`size-2 rounded-full ${["bg-ink-900", "bg-accent", "bg-[#c9a27e]"][i]}`} />
            {styleName[s.styleId]} {Math.round(s.share * 100)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
