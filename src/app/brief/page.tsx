"use client";
import { BriefPanel, BriefSection, DownloadBriefButton } from "@/components/brief";
import { Card, Container, SectionHeading } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";

const present = (value: string | null | undefined) => value ? value.replaceAll("-", " ") : "Not provided";

export default function BriefPage() {
  const { brief, hydrated, strength } = useBrief();
  if (!hydrated) return <main className="py-16"><Container><p>Loading your brief...</p></Container></main>;

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Project brief" title="A clear record of what you have defined so far." description="Review each section, return to the inquiry to edit it, or download a customer-safe A4 PDF." />
          <DownloadBriefButton />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="rounded-xl bg-surface p-6 shadow-sm md:p-10">
            <header className="border-b border-border pb-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-ink-500">Reference {brief.id.slice(0, 8).toUpperCase()}</p>
                <span className="rounded-full bg-accent-tint px-3 py-1 text-xs capitalize text-ink-900">{strength.level} brief</span>
              </div>
              <h1 className="mt-3 font-display text-h1 capitalize text-ink-900">{brief.project.projectCategoryIds[0] ? present(brief.project.projectCategoryIds[0]) : "Your project"}</h1>
              <p className="mt-3 capitalize text-ink-700">{brief.style.primaryStyleId ? `${present(brief.style.primaryStyleId)} direction` : "Style not selected"}</p>
            </header>

            <BriefSection title="Style and materials" editHref="/inquiry/style">
              <p><strong>Primary:</strong> {present(brief.style.primaryStyleId)}</p>
              <p><strong>Accent:</strong> {brief.style.accentStyleId ? present(brief.style.accentStyleId) : "None selected"}</p>
              <p><strong>Materials:</strong> {brief.style.materialIdsLiked.map(present).join(", ") || "None selected"}</p>
            </BriefSection>

            <BriefSection title="Project and place" editHref="/inquiry/project">
              <p><strong>Categories:</strong> {brief.project.projectCategoryIds.map(present).join(", ") || "Not provided"}</p>
              <p><strong>Help needed:</strong> {brief.project.helpNeeded.map(present).join(", ") || "Not provided"}</p>
              <p><strong>Location:</strong> {[brief.project.city, brief.project.postcode, brief.project.country].filter(Boolean).join(", ") || "Not provided"}</p>
            </BriefSection>

            <BriefSection title="Goals" editHref="/inquiry/goals">
              <p><strong>Selected:</strong> {brief.goals.goalIds.map(present).join(", ") || "Not provided"}</p>
              <p><strong>Own words:</strong> {brief.goals.ownWords || "Not provided"}</p>
              <p><strong>Avoid:</strong> {brief.goals.avoid || "Not provided"}</p>
            </BriefSection>

            <BriefSection title="Your space" editHref="/inquiry/space">
              <p><strong>Property:</strong> {present(brief.space.propertyType)}</p>
              <p><strong>Size:</strong> {brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit}` : "Not provided"}</p>
              <p><strong>Condition:</strong> {present(brief.space.condition)}</p>
              <p><strong>Stage:</strong> {present(brief.space.stage)}</p>
              <p><strong>Notes:</strong> {brief.space.notes || "Not provided"}</p>
            </BriefSection>

            <BriefSection title="Budget and timeline" editHref="/inquiry/budget">
              <p><strong>Budget:</strong> {[brief.budget.currency, brief.budget.rangeId ? present(brief.budget.rangeId) : ""].filter(Boolean).join(" ") || "Not provided"}</p>
              <p><strong>Flexibility:</strong> {present(brief.budget.flexibility)}</p>
              <p><strong>Preferred start:</strong> {present(brief.budget.startWindow)}</p>
            </BriefSection>

            <BriefSection title="Photos and visual references" editHref="/inquiry/photos">
              <p><strong>Moodboard:</strong> {brief.visuals.moodboardItemIds.length} saved items</p>
              <p><strong>Local files:</strong> {brief.visuals.localFileNames.join(", ") || "None selected"}</p>
              <p className="text-ink-500">Only file names are recorded in M9. File bytes are not included in the PDF.</p>
            </BriefSection>

            <BriefSection title="Contact" editHref="/inquiry/review">
              <p><strong>Name:</strong> {brief.contact.name || "Not provided"}</p>
              <p><strong>Email:</strong> {brief.contact.email || "Not provided"}</p>
              <p><strong>Phone:</strong> {brief.contact.phone || "Not provided"}</p>
            </BriefSection>

            <Card variant="sunken" className="mt-7">
              <h2 className="font-display text-h3 text-ink-900">What this PDF is for</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">Use the document to discuss scope and priorities. It deliberately excludes internal service-area notes, triage information and unconfirmed business claims.</p>
            </Card>
          </article>
          <BriefPanel />
        </div>
      </Container>
    </main>
  );
}
