import { Card } from "@/components/ui";

export function LegalDraftNotice() {
  return (
    <Card variant="sunken" className="border-2 border-accent">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        Draft for development review
      </p>
      <p className="mt-3 text-sm leading-7 text-ink-700">
        This page is not final legal advice. The business identity, processing
        activities, service model, retention rules and applicable jurisdiction
        must be confirmed by an appropriately qualified professional before launch.
      </p>
    </Card>
  );
}
