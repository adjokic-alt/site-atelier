"use client";

import Image from "next/image";
import Link from "next/link";
import { DownloadBriefButton } from "@/components/brief";
import { budgetLabel, conditionLabel, goalLabel, propertyLabel, spaceLabel, stageLabel, whoLabel } from "@/components/inquiry/brief-options";
import { inspirationItems } from "@/content/inspiration";
import { useBrief } from "@/providers/BriefProvider";
import { styleCombo } from "@/components/inquiry/StyleMix";

const words = (v: string | null | undefined) => (v ? v.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase()) : "");

export default function BriefPage() {
  const { brief, hydrated, resetBrief } = useBrief();
  if (!hydrated) return <div className="px-5 py-24 sm:px-8 lg:px-14"><p className="text-sm text-ink-500">Loading your brief…</p></div>;

  const saved = inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id));
  const budget = brief.budget.rangeId ? `${budgetLabel(brief.budget.rangeId)}${brief.budget.rangeId !== "not-sure" && brief.budget.currency ? ` ${brief.budget.currency}` : ""}` : "";

  const sections: { title: string; edit: string; rows: [string, string][] }[] = [
    { title: "Inspiration", edit: "/inquiry/photos", rows: [
      ["Feels like", styleCombo(brief.style.primaryStyleId, brief.style.accentStyleId) ?? ""],
      ["Saved images", saved.length ? String(saved.length) : ""],
      ["Board links", brief.visuals.inspirationLinks.join(", ")],
      ["Files", brief.visuals.localFileNames.join(", ")],
    ] },
    { title: "Who and where", edit: "/inquiry/project", rows: [
      ["For", whoLabel(brief.space.ownership) ?? ""],
      ["Where", [brief.project.city, brief.project.postcode, brief.project.country].filter(Boolean).join(", ")],
    ] },
    { title: "Spaces", edit: "/inquiry/space", rows: [["Spaces", brief.project.projectCategoryIds.map(spaceLabel).join(", ")]] },
    { title: "Goals and the home", edit: "/inquiry/goals", rows: [
      ["Goals", brief.goals.goalIds.map(goalLabel).join(", ")],
      ["In their words", brief.goals.ownWords],
      ["Budget", budget],
      ["Home", propertyLabel(brief.space.propertyType) ?? ""],
      ["Condition", conditionLabel(brief.space.condition) ?? ""],
      ["Size", brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit === "m2" ? "m²" : "ft²"}` : ""],
      ["Final goal", stageLabel(brief.space.stage) ?? ""],
      ["Flexibility", words(brief.budget.flexibility)],
      ["Start", words(brief.budget.startWindow)],
      ["Avoid", brief.goals.avoid],
      ["Help wanted", brief.project.helpNeeded.map(words).join(", ")],
    ] },
    { title: "Contact", edit: "/inquiry/review", rows: [
      ["Name", brief.contact.name],
      ["Email", brief.contact.email],
      ["Phone", brief.contact.phone ?? ""],
    ] },
  ];

  return (
    <div className="px-5 pb-28 pt-[clamp(56px,8vw,104px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">Your brief · ref {brief.id.slice(0, 8).toUpperCase()}</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">Our home brief</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <DownloadBriefButton />
            <Link href="/inquiry/review" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-ink-900 px-6 text-[15px] font-medium text-ink-900 hover:bg-surface">Send to a designer</Link>
          </div>
        </div>

        <article className="mt-12 rounded-md bg-surface p-[clamp(24px,5vw,56px)] shadow-[0_24px_60px_rgba(30,28,25,0.10)]">
          {saved.length ? (
            <div className="mb-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              {saved.slice(0, 16).map((i) => (
                <div key={i.id} className="relative aspect-square overflow-hidden rounded-sm"><Image src={i.image} alt={i.altText} fill sizes="120px" className="object-cover" /></div>
              ))}
            </div>
          ) : null}

          {sections.map((sec) => (
            <section key={sec.title} className="border-b border-border py-8 last:border-0 last:pb-0">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-[30px] leading-tight text-ink-900">{sec.title}</h2>
                <Link href={sec.edit} className="focus-ring rounded-sm text-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900">Edit</Link>
              </div>
              <dl className="grid gap-x-6 gap-y-3 text-[15px] leading-relaxed sm:grid-cols-[160px_1fr]">
                {sec.rows.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-ink-500">{k}</dt>
                    <dd className={v ? "break-words text-ink-900" : "text-ink-300"}>{v || "—"}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </article>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-500">
          <p>Saved in this browser. The PDF leaves out internal notes. Files are listed by name only.</p>
          <button type="button" onClick={resetBrief} className="focus-ring min-h-11 rounded-full px-2 underline underline-offset-4 hover:text-ink-900">Start over</button>
        </div>
      </div>
    </div>
  );
}
