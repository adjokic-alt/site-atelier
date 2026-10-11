"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Input, Select } from "@/components/ui";
import { inspirationItems } from "@/content/inspiration";
import { styleCatalog } from "@/content/style-catalog";
import { getServiceAreaMessage } from "@/lib/inquiry/service-area";
import type { InquiryStepId } from "@/lib/inquiry/steps";
import { useBrief } from "@/providers/BriefProvider";
import type { ClientBrief, CurrencyCode, ProjectCategoryId, StyleId } from "@/types";
import { budgetOptions, conditionOptions, goalOptions, moreSpaceOptions, propertyOptions, spaceOptions, stageOptions, whoOptions } from "./brief-options";
import { FileDrop } from "./FileDrop";
import { ProjectErrorSummary, useProjectValidation } from "./ProjectValidationBridge";
import { StepShell } from "./StepShell";

const cardBase = "focus-ring rounded-md bg-surface text-left text-ink-900 transition-shadow";
const cardOn = "ring-2 ring-ink-900";
const cardOff = "ring-1 ring-inset ring-border hover:ring-ink-500";
const chip = (on: boolean) =>
  `focus-ring min-h-12 rounded-full border px-6 text-[15px] font-medium transition-colors ${on ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong text-ink-900 hover:border-ink-900"}`;
const sub = "font-display text-[28px] leading-tight text-ink-900";

type Flex = ClientBrief["budget"]["flexibility"];

export function InquiryStep({ step }: { step: InquiryStepId }) {
  const { brief, dispatch } = useBrief();
  const setGoals = (patch: Partial<ClientBrief["goals"]>) => {
    const g = { ...brief.goals, ...patch };
    dispatch({ type: "SET_GOALS", goalIds: g.goalIds, topGoalIds: g.goalIds.slice(0, 3), mustHaves: g.mustHaves, avoid: g.avoid, ownWords: g.ownWords });
  };
  const setSpace = (patch: Partial<ClientBrief["space"]>) => dispatch({ type: "SET_SPACE", value: { ...brief.space, ...patch } });
  const addFiles = (names: string[]) => dispatch({ type: "SET_LOCAL_FILES", fileNames: [...new Set([...brief.visuals.localFileNames, ...names])] });
  const removeFile = (name: string) => dispatch({ type: "SET_LOCAL_FILES", fileNames: brief.visuals.localFileNames.filter((n) => n !== name) });

  if (step === "project") return <WhoStep />;
  if (step === "space") return <SpacesStep />;
  if (step === "photos") return <InspirationStep addFiles={addFiles} removeFile={removeFile} />;

  if (step === "goals")
    return (
      <StepShell step={step} title="What should change?" intro="Pick what matters most, then a few quick questions about the home.">
        <div role="group" aria-label="Goals" className="flex flex-wrap gap-2.5">
          {goalOptions.map((g) => {
            const on = brief.goals.goalIds.includes(g.value);
            return (
              <button key={g.value} type="button" aria-pressed={on} className={chip(on)}
                onClick={() => setGoals({ goalIds: on ? brief.goals.goalIds.filter((x) => x !== g.value) : [...brief.goals.goalIds, g.value] })}>
                {g.label}
              </button>
            );
          })}
        </div>

        <div>
          <label htmlFor="own-words" className="mb-2.5 block text-[15px] font-medium text-ink-900">
            In your own words <span className="font-normal text-ink-500">(optional)</span>
          </label>
          <textarea id="own-words" rows={4} value={brief.goals.ownWords} onChange={(e) => setGoals({ ownWords: e.target.value })}
            placeholder="We cook every evening and want the kitchen to feel part of the living room."
            className="focus-ring w-full resize-y rounded-md border border-border-strong bg-surface p-4 text-base leading-relaxed text-ink-900 placeholder:text-ink-300" />
        </div>

        <ChipQuestion title="What budget do you have in mind?" value={brief.budget.rangeId}
          onPick={(v) => dispatch({ type: "SET_BUDGET", currency: brief.budget.currency ?? "EUR", rangeId: v })}
          options={budgetOptions}
          aside={
            <label className="inline-flex items-center gap-2 text-sm text-ink-500">
              Currency
              <select value={brief.budget.currency ?? "EUR"} onChange={(e) => dispatch({ type: "SET_BUDGET", currency: e.target.value as CurrencyCode, rangeId: brief.budget.rangeId })}
                className="focus-ring min-h-10 rounded-full border border-border-strong bg-surface px-3 text-sm text-ink-900">
                {["EUR", "GBP", "SEK", "NOK", "DKK", "CHF"].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>
          } />

        <ChipQuestion title="What kind of home is it?" value={brief.space.propertyType} onPick={(v) => setSpace({ propertyType: v })} options={propertyOptions} />

        <ChipQuestion title="What state is it in now?" value={brief.space.condition} onPick={(v) => setSpace({ condition: v })} options={conditionOptions} />

        <div>
          <label htmlFor="home-size" className={`${sub} mb-3 block`}>How big is it?</label>
          <div className="flex items-center gap-2.5">
            <input id="home-size" type="number" min="0" inputMode="numeric" placeholder="70" value={brief.space.approxSize?.value ?? ""}
              onChange={(e) => setSpace({ approxSize: e.target.value ? { value: Number(e.target.value), unit: "m2" } : null })}
              className="focus-ring min-h-[52px] w-36 rounded-full border border-border-strong bg-surface px-5 text-base text-ink-900 placeholder:text-ink-300" />
            <span className="text-[15px] text-ink-700">m²</span>
          </div>
        </div>

        <ChipQuestion title="What are your final goals?" value={brief.space.stage} onPick={(v) => setSpace({ stage: v })} options={stageOptions} />

        <details className="group border-t border-border pt-4">
          <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between rounded-sm text-[15px] font-medium text-ink-900">
            <span>A few more details <span className="font-normal text-ink-500">— optional</span></span>
            <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="grid gap-5 pt-6 sm:grid-cols-2">
            <Select label="Budget flexibility" value={brief.budget.flexibility ?? ""} onChange={(e) => dispatch({ type: "SET_BUDGET", currency: brief.budget.currency, rangeId: brief.budget.rangeId, flexibility: (e.target.value || null) as Flex })}
              options={[{ value: "", label: "Select" }, { value: "firm", label: "Firm" }, { value: "some-flexibility", label: "Some flexibility" }, { value: "depends", label: "Depends on scope" }]} />
            <Select label="Preferred start" value={brief.budget.startWindow ?? ""} onChange={(e) => dispatch({ type: "SET_BUDGET", currency: brief.budget.currency, rangeId: brief.budget.rangeId, startWindow: e.target.value || null })}
              options={[{ value: "", label: "Select" }, { value: "asap", label: "As soon as possible" }, { value: "within-3-months", label: "Within 3 months" }, { value: "3-6-months", label: "3–6 months" }, { value: "6-12-months", label: "6–12 months" }, { value: "just-exploring", label: "Just exploring" }]} />
            <div className="sm:col-span-2">
              <Input label="Anything to avoid?" value={brief.goals.avoid} onChange={(e) => setGoals({ avoid: e.target.value })} />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="mb-2.5 text-sm font-medium text-ink-700">What help would you like?</legend>
              <div className="flex flex-wrap gap-2">
                {[["design", "Design direction"], ["scope-definition", "Scope definition"], ["find-compare-partners", "Find and compare partners"], ["coordinate-through-completion", "Coordination to completion"], ["not-sure", "Not sure yet"]].map(([value, label]) => {
                  const on = brief.project.helpNeeded.includes(value);
                  return (
                    <button key={value} type="button" aria-pressed={on} className={chip(on).replace("min-h-12", "min-h-11").replace("px-6", "px-5")}
                      onClick={() => dispatch({ type: "SET_HELP_NEEDED", values: on ? brief.project.helpNeeded.filter((x) => x !== value) : [...brief.project.helpNeeded, value] })}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </details>
      </StepShell>
    );

  /* Optional detail pages kept on their existing routes. */
  if (step === "style")
    return (
      <StepShell step={step} title="Your style" intro="Pick the direction closest to your moodboard. You can change it any time.">
        <StylePicker />
      </StepShell>
    );
  if (step === "budget") {
    return (
      <StepShell step={step} title="Budget and timing" intro="Ranges help set a realistic scope. They are not quotes or price promises.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Select label="Budget range" value={brief.budget.rangeId ?? ""} onChange={(e) => dispatch({ type: "SET_BUDGET", currency: brief.budget.currency ?? "EUR", rangeId: e.target.value || null })}
            options={[{ value: "", label: "Select" }, { value: "under-15", label: "Under 15,000" }, { value: "15-30", label: "15,000–30,000" }, { value: "30-60", label: "30,000–60,000" }, { value: "60-120", label: "60,000–120,000" }, { value: "120-plus", label: "120,000+" }, { value: "not-sure", label: "Not sure yet" }]} />
          <Select label="Preferred start" value={brief.budget.startWindow ?? ""} onChange={(e) => dispatch({ type: "SET_BUDGET", currency: brief.budget.currency, rangeId: brief.budget.rangeId, startWindow: e.target.value || null })}
            options={[{ value: "", label: "Select" }, { value: "asap", label: "As soon as possible" }, { value: "within-3-months", label: "Within 3 months" }, { value: "3-6-months", label: "3–6 months" }, { value: "6-12-months", label: "6–12 months" }, { value: "just-exploring", label: "Just exploring" }]} />
        </div>
      </StepShell>
    );
  }
  return null;
}

function WhoStep() {
  const { brief, dispatch } = useBrief();
  const validation = useProjectValidation("project");
  const service = useMemo(() => getServiceAreaMessage(brief.project.country), [brief.project.country]);
  return (
    <StepShell step="project" title="Who is this home for?">
      <ProjectErrorSummary errors={validation.errors} />
      <div role="radiogroup" aria-label="Who is this home for?" className="grid gap-3.5 sm:grid-cols-2">
        {whoOptions.map((o) => {
          const on = brief.space.ownership === o.value;
          return (
            <button key={o.value} type="button" role="radio" aria-checked={on} onClick={() => dispatch({ type: "SET_SPACE", value: { ...brief.space, ownership: o.value } })}
              className={`${cardBase} min-h-[120px] p-6 ${on ? cardOn : cardOff}`}>
              <span className="block font-display text-[28px] leading-tight">{o.label}</span>
              <span className="mt-1.5 block text-sm text-ink-500">{o.sub}</span>
            </button>
          );
        })}
      </div>
      <div>
        <h2 className={sub}>And where is it?</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          <div id="country-field" tabIndex={-1} className={validation.fieldError("country") ? "rounded-lg ring-2 ring-error ring-offset-2" : ""}>
            <Input label="Country code" value={brief.project.country} placeholder="NL" maxLength={2} error={validation.fieldError("country")}
              onChange={(e) => { dispatch({ type: "SET_LOCATION", country: e.target.value.toUpperCase() }); if (e.target.value.trim()) validation.resolve("country"); }} />
          </div>
          <Input label="City" value={brief.project.city} onChange={(e) => dispatch({ type: "SET_LOCATION", country: brief.project.country, city: e.target.value })} />
          <Input label="Postcode (optional)" value={brief.project.postcode} onChange={(e) => dispatch({ type: "SET_LOCATION", country: brief.project.country, postcode: e.target.value })} />
        </div>
        {service ? (
          <p className="mt-4 rounded-md bg-surface-sunken p-4 text-sm text-ink-700"><span className="font-semibold text-ink-900">{service.status}.</span> {service.message}</p>
        ) : brief.project.country.length === 2 ? (
          <p className="mt-4 rounded-md bg-surface-sunken p-4 text-sm text-ink-700">We don&apos;t work in this country yet, but you can still send your brief for an honest review.</p>
        ) : null}
      </div>
    </StepShell>
  );
}

function SpacesStep() {
  const { brief, dispatch } = useBrief();
  const validation = useProjectValidation("space");
  const selected = brief.project.projectCategoryIds;
  const set = (ids: ProjectCategoryId[]) => { dispatch({ type: "SET_PROJECT_CATEGORIES", categoryIds: ids }); if (ids.length) validation.resolve("projectCategoryIds"); };
  const toggle = (id: ProjectCategoryId) => {
    if (id === "whole-home-renovation") return set(selected.includes(id) ? [] : [id]);
    const rest = selected.filter((x) => x !== "whole-home-renovation");
    set(rest.includes(id) ? rest.filter((x) => x !== id) : [...rest, id]);
  };
  const err = validation.fieldError("projectCategoryIds");

  return (
    <StepShell step="space" title="Which spaces?" canContinue={selected.length > 0}>
      <ProjectErrorSummary errors={validation.errors} />
      <div id="project-category-field" tabIndex={-1} role="group" aria-label="Spaces" aria-describedby={err ? "spaces-error" : undefined}
        className={`grid grid-cols-2 gap-3.5 lg:grid-cols-3 ${err ? "rounded-lg ring-2 ring-error ring-offset-4" : ""}`}>
        {spaceOptions.map((o) => {
          const on = selected.includes(o.value);
          return (
            <button key={o.value} type="button" aria-pressed={on} onClick={() => toggle(o.value)} className={`${cardBase} p-2 ${on ? cardOn : cardOff}`}>
              <span className="relative block h-[clamp(110px,14vw,150px)] overflow-hidden rounded-sm"><Image src={o.image} alt="" fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" /></span>
              <span className="flex items-center justify-between gap-2 px-1 pb-1 pt-3 text-[15px] font-medium">
                {o.label}
                <span aria-hidden="true" className={`size-[18px] shrink-0 rounded-full ${on ? "bg-ink-900" : "border border-ink-300"}`} />
              </span>
            </button>
          );
        })}
      </div>
      {err ? <p id="spaces-error" role="alert" className="text-sm font-medium text-error">{err}</p> : null}
      <div>
        <p className="mb-2.5 text-sm text-ink-500">Something bigger?</p>
        <div className="flex flex-wrap gap-2">
          {moreSpaceOptions.map((o) => {
            const on = selected.includes(o.value);
            return <button key={o.value} type="button" aria-pressed={on} onClick={() => toggle(o.value)} className={chip(on).replace("min-h-12", "min-h-11").replace("px-6", "px-5")}>{o.label}</button>;
          })}
        </div>
      </div>
    </StepShell>
  );
}

function InspirationStep({ addFiles, removeFile }: { addFiles: (n: string[]) => void; removeFile: (n: string) => void }) {
  const { brief, dispatch } = useBrief();
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");
  const saved = inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id));
  const addLink = () => {
    const value = link.trim();
    if (!/^https?:\/\/\S+\.\S+/.test(value)) { setLinkError("Paste a full link, starting with https://"); return; }
    setLinkError("");
    dispatch({ type: "SET_INSPIRATION_LINKS", links: [...new Set([...brief.visuals.inspirationLinks, value])] });
    setLink("");
  };

  return (
    <StepShell step="photos" title="Your inspiration">
      {saved.length ? (
        <div>
          <p className="mb-4 text-[17px] text-ink-700">Already here from your moodboard. Untick anything that no longer feels right.</p>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2.5">
            {saved.map((item) => (
              <li key={item.id} className="relative">
                <div className="relative h-[140px] overflow-hidden rounded-sm"><Image src={item.image} alt={item.altText} fill sizes="160px" className="object-cover" /></div>
                <button type="button" aria-label={`Remove ${item.title}`} onClick={() => dispatch({ type: "REMOVE_MOODBOARD_ITEM", itemId: item.id })}
                  className="focus-ring absolute right-1 top-1 inline-flex size-11 items-center justify-center rounded-full">
                  <span className="flex size-6 items-center justify-center rounded-full bg-ink-900 text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true" className="size-3.5"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[17px] text-ink-700">
          Your moodboard is empty. <Link href="/inspiration" className="font-medium text-ink-900 underline underline-offset-4">Browse inspiration</Link> and tap the heart on what you love — or add your own below.
        </p>
      )}

      <div>
        <label htmlFor="board-link" className="mb-2.5 block text-[15px] font-semibold text-ink-900">Add a Pinterest board</label>
        <div className="flex flex-wrap gap-2.5">
          <input id="board-link" type="url" inputMode="url" value={link} onChange={(e) => setLink(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addLink(); } }}
            placeholder="https://pinterest.com/yourname/our-new-home" aria-invalid={Boolean(linkError)} aria-describedby="board-link-help"
            className="focus-ring min-h-14 min-w-0 flex-[1_1_320px] rounded-full border border-ink-900 bg-surface px-5 text-base text-ink-900 placeholder:text-ink-300" />
          <button type="button" onClick={addLink} className="focus-ring min-h-14 rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">Add board</button>
        </div>
        <p id="board-link-help" className={`mt-2.5 text-[13px] ${linkError ? "font-medium text-error" : "text-ink-500"}`} role={linkError ? "alert" : undefined}>
          {linkError || "Add as many boards as you like — Houzz and Instagram links work too."}
        </p>
        {brief.visuals.inspirationLinks.length ? (
          <ul className="mt-3 space-y-2">
            {brief.visuals.inspirationLinks.map((l) => (
              <li key={l} className="flex items-center justify-between gap-3 rounded-md bg-surface py-1.5 pl-4 pr-1.5 text-sm">
                <span className="truncate text-ink-900">{l}</span>
                <button type="button" aria-label={`Remove ${l}`} onClick={() => dispatch({ type: "SET_INSPIRATION_LINKS", links: brief.visuals.inspirationLinks.filter((x) => x !== l) })}
                  className="focus-ring inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink-500 hover:text-ink-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="size-4"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div>
        <p className="mb-3 text-[15px] font-semibold text-ink-900">Or drop your own pictures, sketches or plans</p>
        <FileDrop title="Drop files here" hint="JPG, PNG, HEIC, PDF, DWG, DXF, SKP · up to 25 MB each" accept="image/*,.heic,.pdf,.dwg,.dxf,.skp"
          files={brief.visuals.localFileNames} onAdd={addFiles} onRemove={removeFile} />
      </div>

      <div>
        <h2 className={sub}>Which style feels closest?</h2>
        <p className="mb-4 mt-1.5 text-[15px] text-ink-700">Optional — your images already say a lot.</p>
        <StylePicker />
      </div>
    </StepShell>
  );
}

function StylePicker() {
  const { brief, dispatch } = useBrief();
  const suggested = useMemo(() => {
    const counts = new Map<string, number>();
    inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id)).forEach((i) => counts.set(i.styleId, (counts.get(i.styleId) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  }, [brief.visuals.moodboardItemIds]);

  return (
    <div role="radiogroup" aria-label="Style" className="flex flex-wrap gap-2">
      {styleCatalog.map((s) => {
        const on = brief.style.primaryStyleId === s.id;
        return (
          <button key={s.id} type="button" role="radio" aria-checked={on} onClick={() => dispatch({ type: "SET_PRIMARY_STYLE", styleId: on ? null : (s.id as StyleId) })}
            className={chip(on).replace("min-h-12", "min-h-11").replace("px-6", "px-5")}>
            {s.name}
            {suggested === s.id && !on ? <span className="ml-1.5 text-xs font-normal text-accent">suggested</span> : null}
          </button>
        );
      })}
    </div>
  );
}

/** One question, answered with a single tap. Tapping the chosen answer again clears it. */
function ChipQuestion({ title, value, options, onPick, aside }: { title: string; value: string | null; options: { value: string; label: string }[]; onPick: (v: string | null) => void; aside?: React.ReactNode }) {
  return (
    <fieldset>
      <legend className={`${sub} mb-3`}>{title}</legend>
      {aside ? <div className="-mt-1 mb-3">{aside}</div> : null}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o.value;
          return (
            <button key={o.value} type="button" aria-pressed={on} onClick={() => onPick(on ? null : o.value)} className={chip(on).replace("min-h-12", "min-h-11").replace("px-6", "px-5")}>
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
