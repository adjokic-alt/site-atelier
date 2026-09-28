interface PaletteColor { name: string; hex: string }
interface Material { name: string; note: string; color: string }

export function StudioMaterials({ heading, description, palette, materials }: { heading: string; description: string; palette: readonly PaletteColor[]; materials: readonly Material[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Material language</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">{heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-700">{description}</p>
          <div className="mt-8 grid grid-cols-5 gap-3" aria-label="Style colour palette">
            {palette.map((color) => (
              <div key={color.hex} className="min-w-0">
                <span className="block aspect-square rounded-full border border-black/10 shadow-sm" style={{ backgroundColor: color.hex }} title={`${color.name} ${color.hex}`} />
                <p className="mt-2 truncate text-center text-[10px] text-ink-500">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {materials.map((material) => (
            <article key={material.name} className="rounded-xl border border-border bg-surface p-6">
              <span aria-hidden="true" className="block h-24 rounded-lg border border-black/10" style={{ background: `linear-gradient(135deg, ${material.color}, color-mix(in srgb, ${material.color} 68%, white))` }} />
              <h3 className="mt-5 font-display text-h3 text-ink-900">{material.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-700">{material.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
