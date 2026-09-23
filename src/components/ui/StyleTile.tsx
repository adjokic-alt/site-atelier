import Link from "next/link";

interface StyleTileProps { name: string; description: string; href: string; imageLabel?: string; keywords?: string[]; }
export function StyleTile({ name, description, href, imageLabel = "Illustrative placeholder", keywords = [] }: StyleTileProps) {
  return (
    <Link href={href} className="focus-ring group block overflow-hidden rounded-xl bg-surface shadow-sm transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-sunken">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#dfe7e8,#b6c7ca_56%,#788f95)] transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-xs text-ink-700">{imageLabel}</span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent p-5 pt-16 text-white">
          <h3 className="font-display text-h3">{name}</h3>
          <p className="mt-2 text-sm text-white/90">{description}</p>
          {keywords.length ? <ul aria-label="Style qualities" className="mt-4 flex flex-wrap gap-2">{keywords.map((keyword) => <li key={keyword} className="rounded-full border border-white/40 px-2.5 py-1 text-xs">{keyword}</li>)}</ul> : null}
        </div>
      </div>
    </Link>
  );
}
