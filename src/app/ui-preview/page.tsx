"use client";

import { Button, Card, Chip, Container, Input, ProgressBar, SectionHeading, Select, StyleTile } from "@/components/ui";

export default function UiPreviewPage() {
  return (
    <main className="py-16 md:py-24">
      <Container className="space-y-20">
        <SectionHeading eyebrow="M2 UI foundation" title="Component preview" description="A development-only page showing reusable interface components and their visual states." />

        <section aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" className="font-display text-h2 text-ink-900">Buttons</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="tertiary">Tertiary action</Button><Button variant="style">Style action</Button><Button isLoading>Saving</Button><Button disabled>Disabled</Button>
          </div>
        </section>

        <section aria-labelledby="forms-heading">
          <h2 id="forms-heading" className="font-display text-h2 text-ink-900">Form controls</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Input label="Project city" placeholder="Example: Utrecht" helperText="City is enough at this stage." />
            <Input label="Email" type="email" defaultValue="incorrect-value" error="Enter a valid email address." />
            <Select label="Timeline" defaultValue="exploring" options={[{value:"exploring",label:"Just exploring"},{value:"three-months",label:"Within 3 months"}]} />
          </div>
        </section>

        <section aria-labelledby="chips-heading">
          <h2 id="chips-heading" className="font-display text-h2 text-ink-900">Chips and progress</h2>
          <div className="mt-6 flex flex-wrap gap-3"><Chip selected>Natural light</Chip><Chip>Built-in storage</Chip><Chip>Warm materials</Chip></div>
          <div className="mt-8 max-w-xl"><ProgressBar current={3} total={7} label="Project brief" /></div>
        </section>

        <section aria-labelledby="cards-heading">
          <h2 id="cards-heading" className="font-display text-h2 text-ink-900">Cards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card><h3 className="font-display text-h3">Surface card</h3><p className="mt-3 text-ink-700">For calm explanatory content.</p></Card>
            <Card variant="sunken"><h3 className="font-display text-h3">Sunken card</h3><p className="mt-3 text-ink-700">For supporting information.</p></Card>
            <Card variant="interactive"><h3 className="font-display text-h3">Interactive card</h3><p className="mt-3 text-ink-700">Hover and keyboard focus are both visible.</p></Card>
          </div>
        </section>

        <section aria-labelledby="style-heading">
          <h2 id="style-heading" className="font-display text-h2 text-ink-900">Style tile</h2>
          <div className="mt-6 max-w-sm"><StyleTile name="Scandinavian" description="Light, calm and practical." href="/styles/scandinavian" keywords={["Airy","Natural","Functional"]} /></div>
        </section>
      </Container>
    </main>
  );
}
