"use client";

import Image from "next/image";
import { inspirationItems } from "@/content/inspiration";
import { useBrief } from "@/providers/BriefProvider";
import { styleCombo } from "./StyleMix";
import { goalLabel, spaceLabel, whoLabel } from "./brief-options";


/** The paper brief beside every step — fills in as the person answers. */
export function LiveBrief() {
  const { brief, saved } = useBrief();
  const thumbs = inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id)).slice(0, 8);
  const rows: [string, string][] = [
    ["Feels like", styleCombo(brief.style.primaryStyleId, brief.style.accentStyleId) ?? "—"],
    ["For", whoLabel(brief.space.ownership) ?? "—"],
    ["Where", [brief.project.city, brief.project.country].filter(Boolean).join(", ") || "—"],
    ["Spaces", brief.project.projectCategoryIds.map(spaceLabel).join(", ") || "—"],
    ["Goals", brief.goals.goalIds.map(goalLabel).join(", ") || "—"],
  ];

  return (
    <aside aria-label="Your brief so far" className="sticky top-28 rounded-md bg-surface p-8 shadow-[0_24px_60px_rgba(30,28,25,0.10)]">
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <span className="font-display text-[30px] text-ink-900">Our home brief</span>
        <span aria-live="polite" className="text-xs text-ink-500">{saved ? "Saved" : "Saving…"}</span>
      </div>
      <dl className="grid grid-cols-[88px_1fr] gap-x-4 gap-y-3.5 py-5 text-sm leading-normal">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-ink-500">{k}</dt>
            <dd className="text-ink-900">{v}</dd>
          </div>
        ))}
      </dl>
      {thumbs.length ? (
        <div className="grid grid-cols-4 gap-1.5">
          {thumbs.map((t) => (
            <div key={t.id} className="relative aspect-square overflow-hidden rounded-sm"><Image src={t.image} alt="" fill sizes="80px" className="object-cover" /></div>
          ))}
        </div>
      ) : (
        <p className="rounded-sm border border-dashed border-border-strong p-4 text-center text-xs text-ink-500">Saved images will appear here</p>
      )}
      {brief.visuals.inspirationLinks.length || brief.visuals.localFileNames.length ? (
        <p className="mt-4 text-xs text-ink-500">
          {[brief.visuals.inspirationLinks.length ? `${brief.visuals.inspirationLinks.length} board link${brief.visuals.inspirationLinks.length > 1 ? "s" : ""}` : "", brief.visuals.localFileNames.length ? `${brief.visuals.localFileNames.length} file${brief.visuals.localFileNames.length > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ")}
        </p>
      ) : null}
    </aside>
  );
}
