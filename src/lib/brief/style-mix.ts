import { inspirationItems } from "@/content/inspiration";
import type { StyleId } from "@/types";

export interface StyleShare { styleId: StyleId; count: number; share: number }

/**
 * What the saved pictures mostly say: 1–3 styles, strongest first.
 * Ties go to the style saved first (the first impression). A style needs at
 * least 20% of the pictures to be listed after the first one.
 */
export function styleMix(moodboardItemIds: string[]): StyleShare[] {
  const byId = new Map(inspirationItems.map((i) => [i.id, i.styleId as StyleId]));
  const counts = new Map<StyleId, { count: number; first: number }>();
  moodboardItemIds.forEach((id, index) => {
    const styleId = byId.get(id);
    if (!styleId) return;
    const c = counts.get(styleId);
    if (c) c.count += 1; else counts.set(styleId, { count: 1, first: index });
  });
  const total = [...counts.values()].reduce((n, c) => n + c.count, 0);
  if (!total) return [];
  return [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[1].first - b[1].first)
    .map(([styleId, c]) => ({ styleId, count: c.count, share: c.count / total }))
    .filter((s, i) => i === 0 || s.share >= 0.2)
    .slice(0, 3);
}
