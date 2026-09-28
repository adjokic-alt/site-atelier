import type { InspirationItem } from "@/content/inspiration";
import { InspirationCard } from "./InspirationCard";

export function MoodboardGallery({ items }: { items: InspirationItem[] }) {
  return (
    <section aria-labelledby="saved-references-title">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Saved references</p>
          <h2 id="saved-references-title" className="mt-3 font-display text-3xl text-ink-900">
            The visual choices behind your direction.
          </h2>
        </div>
        <p className="hidden text-sm text-ink-500 sm:block">{items.length} saved</p>
      </div>

      <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <InspirationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
