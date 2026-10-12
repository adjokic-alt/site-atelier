"use client";

import Image from "next/image";
import Link from "next/link";
import { DownloadBriefButton } from "@/components/brief";
import { budgetLabel, conditionLabel, goalLabel, propertyLabel, spaceLabel, stageLabel, whoLabel, wordLabel } from "@/components/inquiry/brief-options";
import { localizeInspiration } from "@/content/inspiration-sr";
import { useLocale } from "@/i18n/client";
import { inspirationItems } from "@/content/inspiration";
import { useBrief } from "@/providers/BriefProvider";
import { styleCombo } from "@/components/inquiry/StyleMix";


export default function BriefPage() {
  const { brief, hydrated, resetBrief } = useBrief();
  const locale = useLocale();
  const sr = locale === "sr";
  if (!hydrated) return <div className="px-5 py-24 sm:px-8 lg:px-14"><p className="text-sm text-ink-500">{sr ? "Učitavamo vaš brief…" : "Loading your brief…"}</p></div>;

  const saved = inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id)).map((i) => localizeInspiration(i, locale));
  const budget = brief.budget.rangeId ? `${budgetLabel(brief.budget.rangeId, locale)}${brief.budget.rangeId !== "not-sure" && brief.budget.currency ? ` ${brief.budget.currency}` : ""}` : "";
  const L = (en: string, srText: string) => (sr ? srText : en);

  const sections: { title: string; edit: string; rows: [string, string][] }[] = [
    { title: L("Inspiration", "Inspiracija"), edit: "/inquiry/photos", rows: [
      [L("Feels like", "Osećaj"), styleCombo(brief.style.primaryStyleId, brief.style.accentStyleId, locale) ?? ""],
      [L("Saved images", "Sačuvane slike"), saved.length ? String(saved.length) : ""],
      [L("Board links", "Linkovi ka tablama"), brief.visuals.inspirationLinks.join(", ")],
      [L("Files", "Fajlovi"), brief.visuals.localFileNames.join(", ")],
    ] },
    { title: L("Who and where", "Za koga i gde"), edit: "/inquiry/project", rows: [
      [L("For", "Za"), whoLabel(brief.space.ownership, locale) ?? ""],
      [L("Where", "Gde"), [brief.project.city, brief.project.postcode, brief.project.country].filter(Boolean).join(", ")],
    ] },
    { title: L("Spaces", "Prostori"), edit: "/inquiry/space", rows: [[L("Spaces", "Prostori"), brief.project.projectCategoryIds.map((v) => spaceLabel(v, locale)).join(", ")]] },
    { title: L("Goals and the home", "Ciljevi i dom"), edit: "/inquiry/goals", rows: [
      [L("Goals", "Ciljevi"), brief.goals.goalIds.map((v) => goalLabel(v, locale)).join(", ")],
      [L("In their words", "Njihovim rečima"), brief.goals.ownWords],
      [L("Budget", "Budžet"), budget],
      [L("Home", "Dom"), propertyLabel(brief.space.propertyType, locale) ?? ""],
      [L("Condition", "Stanje"), conditionLabel(brief.space.condition, locale) ?? ""],
      [L("Size", "Površina"), brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit === "m2" ? "m²" : "ft²"}` : ""],
      [L("Final goal", "Krajnji cilj"), stageLabel(brief.space.stage, locale) ?? ""],
      [L("Flexibility", "Fleksibilnost"), wordLabel(brief.budget.flexibility, locale)],
      [L("Start", "Početak"), wordLabel(brief.budget.startWindow, locale)],
      [L("Avoid", "Izbegavati"), brief.goals.avoid],
      [L("Help wanted", "Željena pomoć"), brief.project.helpNeeded.map((v) => wordLabel(v, locale)).join(", ")],
    ] },
    { title: L("Contact", "Kontakt"), edit: "/inquiry/review", rows: [
      [L("Name", "Ime"), brief.contact.name],
      [L("Email", "Imejl"), brief.contact.email],
      [L("Phone", "Telefon"), brief.contact.phone ?? ""],
    ] },
  ];

  return (
    <div className="px-5 pb-28 pt-[clamp(56px,8vw,104px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">{L("Your brief", "Vaš brief")} · ref {brief.id.slice(0, 8).toUpperCase()}</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">{L("Our home brief", "Brief našeg doma")}</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <DownloadBriefButton />
            <Link href="/inquiry/review" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-ink-900 px-6 text-[15px] font-medium text-ink-900 hover:bg-surface">{L("Send to a designer", "Pošaljite dizajneru")}</Link>
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
                <Link href={sec.edit} className="focus-ring rounded-sm text-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900">{L("Edit", "Izmeni")}</Link>
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
          <p>{L("Saved in this browser. The PDF leaves out internal notes. Files are listed by name only.", "Sačuvano u ovom pregledaču. PDF ne sadrži interne beleške. Fajlovi su navedeni samo po imenu.")}</p>
          <button type="button" onClick={resetBrief} className="focus-ring min-h-11 rounded-full px-2 underline underline-offset-4 hover:text-ink-900">{L("Start over", "Počnite iznova")}</button>
        </div>
      </div>
    </div>
  );
}
