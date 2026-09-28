export function StudioFit({ bestForTitle, strengthsTitle, cautionsTitle, bestFor, strengths, cautions }: { bestForTitle: string; strengthsTitle: string; cautionsTitle: string; bestFor: readonly string[]; strengths: readonly string[]; cautions: readonly string[] }) {
  return (
    <section className="border-y border-border bg-paper py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
        <ListCard eyebrow="Works best for" title={bestForTitle} items={bestFor} />
        <ListCard eyebrow="Strengths" title={strengthsTitle} items={strengths} />
        <ListCard eyebrow="Use with care" title={cautionsTitle} items={cautions} />
      </div>
    </section>
  );
}

function ListCard({ eyebrow, title, items }: { eyebrow: string; title: string; items: readonly string[] }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 font-display text-h2 text-ink-900">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-ink-700"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" /><span>{item}</span></li>
        ))}
      </ul>
    </article>
  );
}
