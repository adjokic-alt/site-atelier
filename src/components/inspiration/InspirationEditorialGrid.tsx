import { InspirationCard } from "@/components/moodboard";
import { inspirationItems } from "@/content/inspiration";

export function InspirationEditorialGrid() {
  return (
    <div
      className="mt-12 grid w-full min-w-0 grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
      aria-label="Curated interior inspiration"
    >
      {inspirationItems.map((item) => (
        <InspirationCard key={item.id} item={item} />
      ))}
    </div>
  );
}
