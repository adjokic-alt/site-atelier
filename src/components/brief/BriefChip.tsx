"use client";
import Link from "next/link";
import { useBrief } from "@/providers/BriefProvider";
export function BriefChip() { const { brief, hydrated, strength } = useBrief(); const count = brief.visuals.moodboardItemIds.length; const style = brief.style.primaryStyleId ? brief.style.primaryStyleId.replace(/-/g," ") : null; return <Link href="/brief" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong bg-surface px-4 text-sm text-ink-900"><span aria-hidden="true">♡</span><span>{hydrated && style ? style : "My brief"}</span>{count ? <span className="rounded-full bg-accent-tint px-2 py-0.5 text-xs">{count}</span> : null}<span className="sr-only">Brief strength: {strength.level}</span></Link>; }
