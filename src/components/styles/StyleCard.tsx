import Image from "next/image";
import Link from "next/link";
import type { StyleCatalogItem } from "@/content/style-catalog";
import { getLocale } from "@/i18n/server";

interface StyleCardProps {
  style: StyleCatalogItem;
  priority?: boolean;
}

export async function StyleCard({ style, priority = false }: StyleCardProps) {
  const sr = (await getLocale()) === "sr";
  return (
    <Link
      href={style.href}
      className="focus-ring group block overflow-hidden rounded-xl bg-surface shadow-sm transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-md"
      aria-label={sr ? `Istražite stil: ${style.name}` : `Explore ${style.name} style`}
      data-priority={priority || undefined}
    >
      <article className="relative aspect-[4/5] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: style.gradient }}
        />

        <Image
          src={style.image}
          alt={style.altText}
          fill
          priority={priority}
          sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 48vw, 32vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: style.imagePosition ?? "center" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/18 to-black/5"
        />

        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-xs text-ink-700 shadow-sm backdrop-blur-sm">
          {sr ? "Ilustrativni pravac" : "Illustrative direction"}
        </span>

        {style.status === "preview" ? (
          <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-ink-900/55 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {sr ? "Pregled" : "Preview"}
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-5 pt-24 text-white md:p-6">
          <h2 className="font-display text-h3">{style.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/90">
            {style.shortFeel}
          </p>
          <ul
            aria-label={sr ? `Odlike: ${style.name}` : `${style.name} qualities`}
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
            {sr ? "Istražite stil" : "Explore style"}
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
