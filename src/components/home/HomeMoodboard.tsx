import Image from "next/image";
import Link from "next/link";

const pictures = [
  "/images/inspiration/architectural-living-space.png",
  "/images/inspiration/refined-industrial-kitchen.png",
  "/images/inspiration/layered-bedroom-details.png",
];
const palette = ["#301818", "#484830", "#787860", "#A89090", "#C0C0A8"];

export function HomeMoodboard() {
  return (
    <section className="border-y border-border bg-paper py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-10">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative row-span-2 min-h-80 overflow-hidden rounded-lg"><Image src={pictures[0]} alt="Modern saved interior reference" fill sizes="40vw" className="object-cover" /></div>
            {pictures.slice(1).map((picture, index) => <div key={picture} className="relative min-h-36 overflow-hidden rounded-lg"><Image src={picture} alt={`Saved interior reference ${index + 2}`} fill sizes="22vw" className="object-cover" /></div>)}
          </div>
          <div className="mt-5 flex items-center justify-between gap-5"><div><p className="text-xs uppercase tracking-[.1em] text-accent">Emerging direction</p><p className="mt-1 font-display text-h3 text-ink-900">Modern · Industrial</p></div><div className="flex gap-2">{palette.map((color) => <span key={color} className="size-7 rounded-full border border-black/10" style={{ backgroundColor: color }} />)}</div></div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Adaptive moodboard</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Your choices begin to reveal a pattern.</h2>
          <p className="mt-5 text-base leading-8 text-ink-700">As references are saved, recurring styles, spaces, materials and dominant colours become visible. The board changes with the direction you create.</p>
          <Link href="/moodboard" className="focus-ring mt-8 inline-flex min-h-[52px] items-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Open the moodboard</Link>
        </div>
      </div>
    </section>
  );
}
