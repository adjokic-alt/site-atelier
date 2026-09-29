import Image from "next/image";
import Link from "next/link";

const styles = [
  { name: "Scandinavian", text: "Light, calm and practical.", href: "/styles/scandinavian", image: "/images/inspiration/daylight-living-room.png" },
  { name: "Modern", text: "Crisp lines and architectural clarity.", href: "/styles/modern", image: "/images/inspiration/architectural-living-space.png" },
  { name: "Mediterranean", text: "Filtered light and indoor-outdoor ease.", href: "/styles/mediterranean", image: "/images/inspiration/shaded-outdoor-connection.png" },
];

export function HomeStyles() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Featured Style Studios</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Start with the atmosphere that feels closest.</h2></div>
          <Link href="/styles" className="focus-ring text-sm font-semibold text-ink-900 underline underline-offset-4">Explore all seven styles</Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {styles.map((style) => (
            <Link key={style.name} href={style.href} className="focus-ring group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-900">
              <Image src={style.image} alt={`${style.name} interior direction`} fill sizes="(max-width:1023px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="font-display text-3xl">{style.name}</h3><p className="mt-2 text-sm text-white/80">{style.text}</p><span className="mt-5 inline-flex text-sm font-semibold">Explore studio <span aria-hidden="true" className="ml-2">→</span></span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
