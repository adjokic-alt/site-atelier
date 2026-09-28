import Link from "next/link";
import { InspirationCard } from "@/components/moodboard";
import { inspirationItems } from "@/content/inspiration";

export function StudioInspiration({ itemIds }: { itemIds: readonly string[] }) {
  const items = inspirationItems.filter((item) => itemIds.includes(item.id));
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Related inspiration</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">See the direction in a real room reference.</h2></div>
          <Link href="/inspiration" className="focus-ring text-sm font-semibold text-ink-900 underline underline-offset-4">Browse all inspiration</Link>
        </div>
        <div className="mt-10 grid max-w-md gap-6 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => <InspirationCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
