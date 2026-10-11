import Image from "next/image";
import Link from "next/link";
import { styleCatalog } from "@/content/style-catalog";

const feel: Record<string, string> = {
  scandinavian: "Light and practical",
  modern: "Crisp and architectural",
  minimalist: "Quiet and warm",
  industrial: "Raw, refined edge",
  luxury: "Rich, restrained",
  rustic: "Earthy and warm",
  mediterranean: "Sun-washed ease",
};

export function HomeStyles() {
  return (
    <section id="styles" className="bg-surface pb-[clamp(72px,10vw,140px)] pt-20">
      <div className="mx-auto flex max-w-[1328px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8 lg:px-0">
        <div>
          <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">Style discovery</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">Find your style by feel.</h2>
        </div>
        <Link href="/styles/not-sure" className="focus-ring inline-flex min-h-11 items-center text-[15px] font-medium text-ink-900 underline underline-offset-4">
          Not sure? Take the 2-minute quiz
        </Link>
      </div>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        style={{ paddingInline: "max(20px, calc((100vw - 1328px) / 2))", scrollPaddingInline: "max(20px, calc((100vw - 1328px) / 2))" }}>
        {styleCatalog.map((style) => (
          <li key={style.id} className="w-[clamp(260px,26vw,360px)] shrink-0 snap-start">
            <Link href={style.href} className="focus-ring group block rounded text-ink-900">
              <div className="relative h-[clamp(360px,36vw,500px)] overflow-hidden rounded">
                <Image src={style.image} alt={style.altText} fill sizes="360px" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex items-baseline justify-between gap-3 pt-4">
                <span className="font-display text-[32px] leading-none">{style.name}</span>
                <span className="text-[13px] text-ink-500">{feel[style.id]}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
