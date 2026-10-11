import { Card } from "@/components/ui";

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
}

export function PrincipleCard({ number, title, description }: PrincipleCardProps) {
  return (
    <Card variant="surface" className="h-full p-6 md:p-8">
      <p className="text-xs font-semibold tracking-[0.08em] text-accent">
        {number}
      </p>
      <h3 className="mt-5 font-display text-h3 text-ink-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink-700">{description}</p>
    </Card>
  );
}
