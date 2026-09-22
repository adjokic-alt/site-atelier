import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

/*
 * This is a foundation-check page for M0, not the real Home page (that's
 * M11, built from actual content and copy). It exists to prove the fonts,
 * tokens, container, Header, Footer and Button all work together correctly
 * — nothing here is final layout or final copy.
 */

const neutralSwatches = [
  { name: "Paper", token: "bg-paper", text: "text-ink-900" },
  { name: "Surface", token: "bg-surface", text: "text-ink-900" },
  { name: "Surface sunken", token: "bg-surface-sunken", text: "text-ink-900" },
  { name: "Ink 900", token: "bg-ink-900", text: "text-white" },
  { name: "Ink 700", token: "bg-ink-700", text: "text-white" },
  { name: "Ink 500", token: "bg-ink-500", text: "text-white" },
  { name: "Ink 300", token: "bg-ink-300", text: "text-ink-900" },
  { name: "Border", token: "bg-border", text: "text-ink-900" },
];

const statusSwatches = [
  { name: "Accent", token: "bg-accent", text: "text-ink-900" },
  { name: "Success", token: "bg-success", text: "text-white" },
  { name: "Warning", token: "bg-warning", text: "text-ink-900" },
  { name: "Error", token: "bg-error", text: "text-white" },
];

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display text-h1 text-ink-900">
              A foundation for a calmer way to start a home project.
            </h1>
            <p className="mt-6 text-lead text-ink-700">
              Placeholder hero copy — {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button type="button" variant="primary">
                Primary action
              </Button>
              <Button type="button" variant="secondary">
                Secondary action
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h2 text-ink-900">Typography</h2>
          <div className="mt-8 space-y-6">
            <p className="font-display text-display text-ink-900">Display</p>
            <p className="font-display text-h1 text-ink-900">Heading 1</p>
            <p className="font-display text-h2 text-ink-900">Heading 2</p>
            <p className="font-display text-h3 text-ink-900">Heading 3</p>
            <p className="text-lead text-ink-700">
              Lead paragraph — set in Inter, used for intro copy under a
              heading.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-ink-700">
              Body text — set in Inter at 16px with relaxed line height, the
              default reading size across the site.
            </p>
            <p className="text-sm text-ink-500">
              Small text — captions and meta information.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h2 text-ink-900">Color tokens</h2>
          <p className="mt-3 max-w-prose text-sm text-ink-500">
            Neutrals stay fixed everywhere. Accent is the brand default shown
            here — once styles exist, a scoped wrapper overrides just this
            token inside style-related areas, and every component below
            picks up the change automatically.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[...neutralSwatches, ...statusSwatches].map((swatch) => (
              <div
                key={swatch.name}
                className="overflow-hidden rounded-lg border border-border"
              >
                <div
                  className={`flex h-20 items-end p-3 ${swatch.token} ${swatch.text}`}
                >
                  <span className="text-xs font-medium">{swatch.name}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h2 text-ink-900">
            Imagery placeholder
          </h2>
          <div
            role="img"
            aria-label="Illustrative placeholder — final photography will replace this area"
            className="mt-8 flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-dashed border-border-strong bg-surface-sunken"
          >
            <span className="px-4 text-center text-sm text-ink-500">
              Illustrative placeholder — no real project photography yet
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
