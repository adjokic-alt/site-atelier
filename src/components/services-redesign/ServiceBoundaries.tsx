const included = [
  "A structured browser-based project draft",
  "Clearly labelled illustrative references",
  "A customer-safe downloadable PDF",
  "Storage and email delivery after submission",
  "A human-readable reference code",
];

const notIncluded = [
  "Construction or permit drawings",
  "Structural, legal or engineering advice",
  "Automatic product specification or ordering",
  "A guaranteed appointment or quotation",
  "Automatic acceptance of the project",
];

export function ServiceBoundaries() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Clear boundaries</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Know what the brief can and cannot do.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <BoundaryCard title="Included" items={included} positive />
          <BoundaryCard title="Not included" items={notIncluded} />
        </div>
      </div>
    </section>
  );
}

function BoundaryCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <h3 className="font-display text-h2 text-ink-900">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-ink-700">
            <span aria-hidden="true" className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] ${positive ? "bg-accent-tint text-accent" : "bg-surface-sunken text-ink-500"}`}>{positive ? "✓" : "−"}</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
