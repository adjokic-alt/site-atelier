"use client";

import { useEffect } from "react";
import { styleCatalog } from "@/content/style-catalog";
import { describeStyle } from "@/content/style-pairings";
import { styleMix } from "@/lib/brief/style-mix";
import { useBrief } from "@/providers/BriefProvider";
import type { StyleId } from "@/types";

const styleName = Object.fromEntries(styleCatalog.map((s) => [s.id, s.name])) as Record<string, string>;
const dots = ["bg-ink-900", "bg-accent", "bg-[#c9a27e]"];

/** "Scandinavian – Minimalist": the same words in the step title and in the brief's "Feels like". */
export function styleCombo(primary: StyleId | null, accent: StyleId | null) {
  if (!primary) return null;
  return accent ? `${styleName[primary]} – ${styleName[accent]}` : styleName[primary];
}

/**
 * On the Inspiration step the pictures speak first: whenever the set of saved pictures
 * changes, "Feels like" becomes their main + secondary style. A style picked by hand
 * afterwards stays until the pictures change again.
 */
export function useStyleFromPictures() {
  const { brief, dispatch, hydrated } = useBrief();
  const ids = brief.visuals.moodboardItemIds;
  const key = ids.join(",");
  useEffect(() => {
    if (!hydrated) return;
    const mix = styleMix(key ? key.split(",") : []);
    if (!mix.length) return;
    let last: string | null = null;
    try { last = localStorage.getItem("atelier-style-from-pictures"); } catch {}
    if (last === key) return;
    try { localStorage.setItem("atelier-style-from-pictures", key); } catch {}
    dispatch({ type: "SET_PRIMARY_STYLE", styleId: mix[0].styleId });
    dispatch({ type: "SET_ACCENT_STYLE", styleId: mix[1]?.styleId ?? null });
  }, [hydrated, key, dispatch]);
}

/** Beside the title: "said Scandinavian – Minimalist". */
export function StyleSaid() {
  const { brief, hydrated } = useBrief();
  const combo = hydrated ? styleCombo(brief.style.primaryStyleId, brief.style.accentStyleId) : null;
  if (!combo) return null;
  return (
    <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-none text-accent">
      <span className="text-ink-500">said </span>{combo}
    </p>
  );
}

/** Under the title: what that combination means, plus how the pictures split. */
export function StyleStory() {
  const { brief, hydrated } = useBrief();
  const primary = brief.style.primaryStyleId;
  if (!hydrated || !primary) return null;
  const mix = styleMix(brief.visuals.moodboardItemIds);

  return (
    <div className="max-w-2xl">
      <p className="text-[19px] leading-relaxed text-ink-700">{describeStyle(primary, brief.style.accentStyleId)}</p>
      {mix.length ? (
        <div className="mt-5 max-w-md">
          <div aria-hidden="true" className="flex h-1.5 overflow-hidden rounded-full bg-border">
            {mix.map((s, i) => <span key={s.styleId} style={{ width: `${s.share * 100}%` }} className={dots[i]} />)}
          </div>
          <ul aria-label="Styles in your pictures" className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-ink-500">
            {mix.map((s, i) => (
              <li key={s.styleId} className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className={`size-2 rounded-full ${dots[i]}`} />
                {styleName[s.styleId]} {Math.round(s.share * 100)}% of your pictures
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
