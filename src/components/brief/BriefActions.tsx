"use client";
import { Button } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";
import type { StyleId } from "@/types";
export function SelectStyleButton({ styleId, children }: { styleId: StyleId; children: string }) { const { brief, dispatch } = useBrief(); const selected = brief.style.primaryStyleId === styleId; return <Button variant="style" size="lg" onClick={() => dispatch({ type: "SET_PRIMARY_STYLE", styleId })}>{selected ? "Selected for my brief" : children}</Button>; }
export function ToggleMaterialButton({ materialId }: { materialId: string }) { const { brief, dispatch } = useBrief(); const selected = brief.style.materialIdsLiked.includes(materialId); return <Button variant="tertiary" className="mt-5" aria-pressed={selected} onClick={() => dispatch({ type: "TOGGLE_MATERIAL", materialId })}>{selected ? "Remove from my brief" : "Add to my brief"}</Button>; }
