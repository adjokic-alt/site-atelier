"use client";

import { useBrief } from "@/providers/BriefProvider";
import { HeartIcon } from "./HeartIcon";

/** Round heart on an image. Saves to / removes from the moodboard (same brief state as before). */
export function SaveHeart({ itemId, label, className = "" }: { itemId: string; label: string; className?: string }) {
  const { brief, dispatch } = useBrief();
  const saved = brief.visuals.moodboardItemIds.includes(itemId);

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from moodboard` : `Save ${label} to moodboard`}
      onClick={() => dispatch({ type: saved ? "REMOVE_MOODBOARD_ITEM" : "ADD_MOODBOARD_ITEM", itemId })}
      className={`focus-ring inline-flex size-11 items-center justify-center rounded-full shadow-sm transition-[background-color,transform] duration-200 active:scale-110 ${
        saved ? "bg-ink-900 text-white" : "bg-surface/95 text-ink-900 hover:bg-white"
      } ${className}`}
    >
      <HeartIcon filled={saved} className="size-[18px]" />
    </button>
  );
}
