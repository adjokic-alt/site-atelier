import Link from "next/link";
import { Card } from "@/components/ui";

interface ServiceCardProps {
  number: string;
  title: string;
  summary: string;
  includes: string[];
  doesNotInclude: string[];
  href: string;
}

export function ServiceCard({
  number,
  title,
  summary,
  includes,
  doesNotInclude,
  href,
}: ServiceCardProps) {
  return (
    <Card variant="surface" className="flex h-full flex-col p-6 md:p-8">
      <p className="text-xs font-semibold tracking-[0.08em] text-accent">
        {number}
      </p>
      <h2 className="mt-5 font-display text-h2 text-ink-900">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-ink-700">{summary}</p>

      <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-ink-900">May include</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700">
            {includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">
            Does not automatically include
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-700">
            {doesNotInclude.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-ink-400">−</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={href}
        className="focus-ring mt-auto rounded-sm pt-8 text-sm font-medium text-accent hover:underline"
      >
        Add this need to my brief →
      </Link>
    </Card>
  );
}
