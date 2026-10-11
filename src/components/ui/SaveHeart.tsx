"use client";

import { useState } from "react";
import { useBrief } from "@/providers/BriefProvider";
import { HeartIcon } from "./HeartIcon";

/** Round heart on an image, Instagram-style: outline when empty, red when saved, with a pop on save. */
export function SaveHeart({ itemId, label, className = "" }: { itemId: string; label: string; className?: string }) {
  const { brief, dispatch } = useBrief();
  const saved = brief.visuals.moodboardItemIds.includes(itemId);
  const [pops, setPops] = useState(0);

  const toggle = () => {
    if (!saved) setPops((n) => n + 1);
    dispatch({ type: saved ? "REMOVE_MOODBOARD_ITEM" : "ADD_MOODBOARD_ITEM", itemId });
  };

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from moodboard` : `Save ${label} to moodboard`}
      onClick={toggle}
      className={`focus-ring inline-flex size-11 items-center justify-center rounded-full bg-surface/95 shadow-sm transition-colors duration-200 hover:bg-white ${
        saved ? "text-[#ed4956]" : "text-ink-900"
      } ${className}`}
    >
      <HeartIcon key={pops} filled={saved} className={`size-5 ${pops && saved ? "atelier-like-pop" : ""}`} />
    </button>
  );
}
