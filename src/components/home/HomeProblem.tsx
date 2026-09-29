const scattered = ["Saved screenshots", "Pinterest boards", "Instagram posts", "Notes and messages"];
const clear = ["A clear style direction", "Organised visual references", "Shared project priorities", "A structured brief"];

export function HomeProblem() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">From noise to direction</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Good projects rarely begin with the right words.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-700">Most people begin with images, partial ideas and practical questions. Site Atelier helps organise those signals before the first serious design conversation.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
          <ListBlock eyebrow="What you have" items={scattered} muted />
          <div aria-hidden="true" className="hidden items-center justify-center text-2xl text-accent sm:flex">→</div>
          <ListBlock eyebrow="What you build" items={clear} />
        </div>
      </div>
    </section>
  );
}

function ListBlock({ eyebrow, items, muted = false }: { eyebrow: string; items: string[]; muted?: boolean }) {
  return (
    <article className={`rounded-xl border border-border p-6 ${muted ? "bg-surface-sunken" : "bg-surface shadow-sm"}`}>
      <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{eyebrow}</p>
      <ul className="mt-5 space-y-4">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm text-ink-700"><span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
      </ul>
    </article>
  );
}
