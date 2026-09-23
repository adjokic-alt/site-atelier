import Link from "next/link";
import type { ReactNode } from "react";
export function BriefSection({ title, editHref, children }: { title: string; editHref: string; children: ReactNode }) {
  return <section className="border-b border-border py-7 last:border-0"><div className="flex items-start justify-between gap-5"><div className="min-w-0"><h2 className="font-display text-h3 text-ink-900">{title}</h2><div className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">{children}</div></div><Link href={editHref} className="focus-ring shrink-0 rounded-sm text-sm font-medium text-accent hover:underline">Edit</Link></div></section>;
}
