export function AboutStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Why it exists</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Good projects often begin with incomplete information.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-ink-700">
          <p>A desired atmosphere may be clear even when the style name is not. Useful reference images may exist without an agreed budget, scope or timeline.</p>
          <p>Site Atelier connects those fragments. Visual preferences become a moodboard, practical answers become a brief, and uncertainty remains visible rather than being replaced with invented certainty.</p>
          <p>The result is not a finished design or specification. It is a stronger basis for deciding what support is needed and what should happen next.</p>
        </div>
      </div>
    </section>
  );
}
