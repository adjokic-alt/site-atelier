import type { InspirationItem } from "@/content/inspiration";

function tally(values: string[]) {
  return values.reduce<Record<string, number>>((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
}

function ranked(values: string[]) {
  return Object.entries(tally(values))
    .sort((first, second) => second[1] - first[1])
    .map(([value]) => value);
}

function readable(value: string) {
  return value.replaceAll("-", " ");
}

interface MoodboardInsightProps {
  items: InspirationItem[];
  palette: string[];
  paletteReady: boolean;
}

export function MoodboardInsight({
  items,
  palette,
  paletteReady,
}: MoodboardInsightProps) {
  if (!items.length) return null;

  const styles = ranked(items.map((item) => item.styleId));
  const spaces = ranked(items.map((item) => item.space));
  const materials = ranked(items.flatMap((item) => item.materialIds));
  const primaryStyle = styles[0];
  const secondaryStyle = styles[1];

  return (
    <section className="space-y-5" aria-labelledby="moodboard-insight-title">
      <div className="mood-surface rounded-xl border p-6 shadow-sm">
        <p className="mood-accent text-xs font-semibold uppercase tracking-[.1em]">
          Emerging direction
        </p>
        <h2 id="moodboard-insight-title" className="mt-3 font-display text-h2 capitalize">
          {primaryStyle}
        </h2>
        <p className="mt-3 text-sm leading-7 opacity-75">
          Your board currently leans toward a {readable(primaryStyle)} direction
          {secondaryStyle ? `, with ${readable(secondaryStyle)} as a secondary influence` : ""}.
        </p>
        <p className="mt-3 text-xs leading-6 opacity-55">
          Rule-based summary from saved tags, not an AI design recommendation.
        </p>
      </div>

      <dl className="grid grid-cols-2 gap-3">
        <div className="mood-surface-strong rounded-lg p-4">
          <dt className="text-xs uppercase tracking-[.08em] opacity-55">References</dt>
          <dd className="mt-2 font-display text-3xl">{items.length}</dd>
        </div>
        <div className="mood-surface-strong rounded-lg p-4">
          <dt className="text-xs uppercase tracking-[.08em] opacity-55">Main space</dt>
          <dd className="mt-2 font-medium capitalize">{readable(spaces[0])}</dd>
        </div>
      </dl>

      <div className="mood-surface rounded-xl border p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold">Colours from your images</h3>
          <span className="text-xs opacity-55" aria-live="polite">
            {paletteReady ? "Extracted" : "Analysing…"}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-2" aria-label="Dominant colours extracted from saved reference images">
          {palette.map((color) => (
            <div key={color} className="min-w-0">
              <span className="block aspect-square rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: color }} title={color} />
              <span className="mt-2 block truncate text-center font-mono text-[10px] opacity-55">{color}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 opacity-55">
          Approximate dominant colours sampled locally from the saved reference images.
        </p>
      </div>

      <div className="mood-surface rounded-xl border p-5">
        <h3 className="text-sm font-semibold">Recurring signals</h3>
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <p className="opacity-55">Styles</p>
            <p className="mt-1 capitalize">{styles.slice(0, 3).map(readable).join(" · ")}</p>
          </div>
          <div>
            <p className="opacity-55">Spaces</p>
            <p className="mt-1 capitalize">{spaces.slice(0, 3).map(readable).join(" · ")}</p>
          </div>
          <div>
            <p className="opacity-55">Materials</p>
            <p className="mt-1">
              {materials.length
                ? materials.slice(0, 4).map(readable).join(" · ")
                : "Add more references to reveal a pattern"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
