import Image from "next/image";

interface GalleryImage {
  title: string;
  image: string;
  alt: string;
  position?: string;
}

interface StudioGalleryProps {
  styleName: string;
  images?: readonly GalleryImage[];
}

export function StudioGallery({ styleName, images }: StudioGalleryProps) {
  if (!images || !images.length) return null;

  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">
            {styleName} spaces
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
            See the direction across different rooms.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink-700">
            The same design principles can adapt to different functions while keeping a coherent material and visual language.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {images.map((item, index) => (
            <article
              key={`${item.title}-${item.image}`}
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-sunken">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2.5rem), 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  style={{ objectPosition: item.position ?? "center" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-h3 text-ink-900">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
