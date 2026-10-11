"use client";

import Link from "next/link";
import { useBrief } from "@/providers/BriefProvider";
import { HeartIcon } from "@/components/ui/HeartIcon";

/** Header heart: how many images are on the moodboard, one tap away. */
export function SavedCount({ className = "" }: { className?: string }) {
  const { brief, hydrated } = useBrief();
  const count = hydrated ? brief.visuals.moodboardItemIds.length : 0;

  return (
    <Link
      href="/moodboard"
      aria-label={count ? `Your moodboard, ${count} saved` : "Your moodboard"}
      className={`focus-ring inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-2 text-sm ${className}`}
    >
      <HeartIcon filled={count > 0} className="size-5" />
      {count ? <span className="tabular-nums">{count}</span> : null}
    </Link>
  );
}
