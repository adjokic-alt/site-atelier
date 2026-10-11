export function AvailabilityPanel() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-ink-900 p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">Availability</p>
            <h2 className="mt-4 font-display text-3xl leading-tight">Support depends on the project context.</h2>
          </div>
          <div className="p-7 md:p-10">
            <p className="text-base leading-8 text-ink-700">
              Location, project stage, requested support, timing and brief completeness all affect what may be possible. Uncertainty does not automatically reject a project. It simply identifies what should be clarified next.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Location", "Where the project is based"],
                ["Stage", "Idea, planning or active renovation"],
                ["Support", "Direction, scope or coordination"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-surface-sunken p-4"><p className="text-sm font-semibold text-ink-900">{title}</p><p className="mt-2 text-xs leading-6 text-ink-500">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
