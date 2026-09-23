import { Card } from "@/components/ui";

export function CompanyPlaceholderNotice() {
  return (
    <Card variant="sunken" className="border border-border">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        Business details awaiting confirmation
      </p>
      <p className="mt-3 text-sm leading-7 text-ink-700">
        The studio name, legal entity, registered address, response-time promise
        and production contact details are still placeholders. They must be
        confirmed before this website is presented as a live business service.
      </p>
    </Card>
  );
}
