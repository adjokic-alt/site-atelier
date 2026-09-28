import Link from "next/link";

const prompts = [
  "Notice the quality of light, not only the furniture.",
  "Save materials and textures you would enjoy living with.",
  "Look for layouts that support your everyday routines.",
];

export function MoodboardEmptyState() {
  return (
    <section className="mt-12 overflow-hidden rounded-xl border border-dashed border-border-strong bg-surface-sunken">
      <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
        <div className="p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Start collecting</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Your moodboard is ready for its first reference.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-700">
            Save visual directions that feel relevant. The strongest recurring styles, spaces and materials will appear here automatically.
          </p>
          <Link href="/inspiration" className="focus-ring mt-8 inline-flex min-h-[52px] items-center rounded-sm bg-ink-900 px-6 text-sm font-medium text-white">
            Browse inspiration
          </Link>
        </div>

        <div className="border-t border-border bg-paper p-8 md:p-12 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold text-ink-900">What to look for</p>
          <ol className="mt-6 space-y-5">
            {prompts.map((prompt, index) => (
              <li key={prompt} className="flex gap-4 text-sm leading-7 text-ink-700">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-xs font-semibold text-accent">0{index + 1}</span>
                <span>{prompt}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
