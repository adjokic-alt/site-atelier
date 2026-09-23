import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Style Quiz Preview | Site Atelier" };

export default function NotSurePage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="Coming in M6" title="The visual style quiz is planned, not faked." description="The Not sure journey is intentionally separate from the seven real styles. M6 will add six visual comparisons and deterministic scoring." />
        <Card variant="sunken" className="mt-10 max-w-2xl">
          <h2 className="font-display text-h3 text-ink-900">What will happen here</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-ink-700">
            <li>Choose between six balanced image pairs.</li>
            <li>Receive a primary style and optional accent style.</li>
            <li>Continue into the matching Style Studio.</li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button type="button" disabled>Start quiz in M6</Button>
            <Link href="/styles" className="focus-ring inline-flex min-h-12 items-center rounded-sm border-[1.5px] border-ink-900 px-5 text-sm font-medium text-ink-900 hover:bg-surface">Back to styles</Link>
          </div>
        </Card>
      </Container>
    </main>
  );
}
