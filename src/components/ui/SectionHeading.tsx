interface SectionHeadingProps { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; }
export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return <header className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-accent">{eyebrow}</p> : null}
    <h2 className="font-display text-2xl leading-tight text-ink-900 md:text-h2">{title}</h2>
    {description ? <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lead">{description}</p> : null}
  </header>;
}
