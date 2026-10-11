import Image from "next/image";
import type { InspirationItem } from "@/content/inspiration";
import { SaveInspirationButton } from "./SaveInspirationButton";

interface InspirationCardProps {
  item: InspirationItem;
  featured?: boolean;
  wide?: boolean;
}

export function InspirationCard({ item }: InspirationCardProps) {
  return (
    <article className="group min-w-0 w-full overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative w-full overflow-hidden bg-surface-sunken"
        style={{
          aspectRatio: "4 / 5",
          background: item.gradient,
        }}
      >
        <Image
          src={item.image}
          alt={item.altText}
          fill
          sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) 46vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/5 to-black/30"
        />

        <span className="absolute left-3 top-3 z-[3] max-w-[calc(100%-7.5rem)] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-white/25 bg-black/40 px-3 py-1 text-xs capitalize text-white shadow-sm backdrop-blur-md">
          Illustrative · {item.space}
        </span>

        <div className="absolute right-3 top-3 z-[3]">
          <SaveInspirationButton itemId={item.id} />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[2] p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/80">
            {item.styleId}
          </p>
          <h2 className="mt-2 font-display text-2xl leading-tight text-white">
            {item.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/85">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
