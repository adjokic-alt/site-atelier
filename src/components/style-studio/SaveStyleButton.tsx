"use client";

import type { StyleId } from "@/types";
import { useBrief } from "@/providers/BriefProvider";
import { HeartIcon } from "@/components/ui/HeartIcon";

/** Marks this style as the brief's primary style (existing SET_PRIMARY_STYLE action). */
export function SaveStyleButton({ styleId, name }: { styleId: StyleId; name: string }) {
  const { brief, dispatch } = useBrief();
  const saved = brief.style.primaryStyleId === styleId;

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => dispatch({ type: "SET_PRIMARY_STYLE", styleId: saved ? null : styleId })}
      className={`focus-ring inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 text-[15px] font-semibold transition-colors ${
        saved ? "bg-ink-900 text-white ring-1 ring-white/40" : "bg-white text-ink-900 hover:bg-white/90"
      }`}
    >
      <HeartIcon filled={saved} className="size-[18px]" />
      {saved ? `${name} is your style` : "Save this style"}
    </button>
  );
}
