import Image from "next/image";
import Link from "next/link";

const thumbs = [
  "/images/studios/scandinavian/scandinavian-living-room.png",
  "/images/studios/scandinavian/scandinavian-kitchen.png",
  "/images/inspiration/warm-minimal-bathroom.png",
  "/images/studios/scandinavian/scandinavian-bedroom.png",
  "/images/inspiration/daylight-living-room.png",
];

const rows: [string, string][] = [
  ["For", "A couple and two children"],
  ["Spaces", "Living room, kitchen"],
  ["Feels like", "Warm minimal, a touch of Scandinavian"],
  ["Goal", "More light, better storage"],
];

export function HomeBrief() {
  return (
    <section className="bg-surface-sunken px-5 py-[clamp(72px,10vw,140px)] sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1328px] items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
        <div className="order-2 rounded-md bg-surface p-[clamp(28px,4vw,48px)] shadow-[0_24px_60px_rgba(30,28,25,0.10)] lg:order-1" aria-label="Example brief">
          <div className="flex items-baseline justify-between border-b border-border pb-5">
            <span className="font-display text-[32px] text-ink-900">Our home brief</span>
            <span className="text-[13px] text-ink-500">Example</span>
          </div>
          <dl className="grid grid-cols-[110px_1fr] gap-x-5 gap-y-4 py-6 text-[15px]">
            {rows.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-ink-500">{k}</dt>
                <dd className="text-ink-900">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="grid grid-cols-5 gap-2">
            {thumbs.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-sm"><Image src={src} alt="" fill sizes="120px" className="object-cover" /></div>
            ))}
          </div>
        </div>

        <div className="order-1 max-w-[480px] lg:order-2">
          <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">Your brief</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">Turn inspiration into a plan.</h2>
          <p className="mt-7 text-[17px] leading-[1.7] text-ink-700">
            Five short steps. Your saved images do most of the talking. Download it, or send it to a designer when you are ready.
          </p>
          <Link href="/inquiry" className="focus-ring mt-9 inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-7 text-[15px] font-semibold text-ink-900 hover:bg-surface">
            Start my brief
          </Link>
        </div>
      </div>
    </section>
  );
}
