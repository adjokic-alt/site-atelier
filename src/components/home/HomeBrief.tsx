import Link from "next/link";

const sections = ["Project scope", "Rooms and priorities", "Style direction", "Saved references", "Budget and timeline", "Goals and constraints"];

export function HomeBrief() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Project brief</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">A better conversation starts with a clearer brief.</h2>
          <p className="mt-5 text-base leading-8 text-ink-700">Bring practical requirements and visual preferences into one organised project document that can be reviewed, shared and downloaded.</p>
          <Link href="/brief" className="focus-ring mt-8 inline-flex min-h-[52px] items-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Build my brief</Link>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-xs uppercase tracking-[.1em] text-accent">Project brief</p><p className="mt-2 font-display text-h2 text-ink-900">Interior direction summary</p></div><span className="rounded-full bg-surface-sunken px-3 py-1 text-xs text-ink-500">Draft</span></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">{sections.map((section, index) => <div key={section} className="rounded-lg bg-surface-sunken p-4"><p className="text-[10px] font-semibold tracking-[.1em] text-accent">0{index + 1}</p><p className="mt-3 text-sm font-medium text-ink-900">{section}</p><span className="mt-4 block h-1.5 rounded-full bg-border" /><span className="mt-2 block h-1.5 w-2/3 rounded-full bg-border" /></div>)}</div>
        </div>
      </div>
    </section>
  );
}
