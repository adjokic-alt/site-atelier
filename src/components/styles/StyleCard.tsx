import Image from "next/image";
import Link from "next/link";
import type { StyleCatalogItem } from "@/content/style-catalog";

interface StyleCardProps {
  style: StyleCatalogItem;
  priority?: boolean;
}

export function StyleCard({ style, priority = false }: StyleCardProps) {
  return (
    <Link
      href={style.href}
      className="focus-ring group block overflow-hidden rounded-xl bg-surface shadow-sm transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-md"
      aria-label={`Explore ${style.name} style`}
      data-priority={priority || undefined}
    >
      <article className="relative aspect-[4/5] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: style.gradient }}
        />

        {style.image ? (
          <Image
            src={style.image}
            alt={style.altText ?? `${style.name} interior style direction`}
            fill
            priority={priority}
            sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 48vw, 32vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_25%_25%,white_0,transparent_35%),linear-gradient(115deg,transparent_48%,white_49%,transparent_51%)] transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/20 to-black/5"
        />

        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-xs text-ink-700 shadow-sm backdrop-blur-sm">
          Illustrative direction
        </span>

        {style.status === "preview" ? (
          <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-ink-900/55 px-3 py-1 text-xs text-white backdrop-blur-sm">
            Preview
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-5 pt-24 text-white md:p-6">
          <h2 className="font-display text-h3">{style.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/90">
            {style.shortFeel}
          </p>
          <ul
            aria-label={`${style.name} qualities`}
            className="mt-4 flex flex-wrap gap-2"
          >
            {style.keywords.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full border border-white/40 bg-black/10 px-2.5 py-1 text-xs backdrop-blur-sm"
              >
                {keyword}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex text-sm font-medium">
            Explore style
            <span
              aria-hidden="true"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
