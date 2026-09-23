import Link from "next/link";
import { Card } from "@/components/ui";

interface ContactChoiceProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  primary?: boolean;
}

export function ContactChoice({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  primary = false,
}: ContactChoiceProps) {
  return (
    <Card variant={primary ? "interactive" : "surface"} className="flex h-full flex-col p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-h2 text-ink-900">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-ink-700">{description}</p>
      <Link
        href={href}
        className={`focus-ring mt-auto inline-flex min-h-12 items-center justify-center rounded-sm px-5 pt-0 text-sm font-medium ${
          primary
            ? "mt-8 bg-ink-900 text-white"
            : "mt-8 border border-ink-900 text-ink-900"
        }`}
      >
        {linkLabel}
      </Link>
    </Card>
  );
}
