"use client";

import { useId, useState } from "react";
import { useLocale } from "@/i18n/client";

interface FileDropProps {
  title: string;
  hint: string;
  accept: string;
  files: string[];
  onAdd: (names: string[]) => void;
  onRemove: (name: string) => void;
  icon?: "image" | "upload";
}

/**
 * Drop area for pictures, sketches, plans and CAD files.
 * Like the previous Photos step it records file names in the brief; file storage is a later milestone.
 */
export function FileDrop({ title, hint, accept, files, onAdd, onRemove, icon = "upload" }: FileDropProps) {
  const sr = useLocale() === "sr";
  const id = useId();
  const [over, setOver] = useState(false);
  const add = (list: FileList | null) => {
    const names = Array.from(list ?? []).map((f) => f.name);
    if (names.length) onAdd(names);
  };

  return (
    <div>
      <label
        htmlFor={id}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); add(e.dataTransfer.files); }}
        className={`flex min-h-[180px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-[1.5px] border-dashed p-7 text-center transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring ${
          over ? "border-accent bg-accent-tint" : "border-ink-300 bg-surface hover:border-ink-500"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true" className="size-8 text-accent">
          {icon === "image" ? (
            <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 15l5-5 4 4 3-3 6 6" /></>
          ) : (
            <path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
          )}
        </svg>
        <span className="font-display text-[26px] leading-tight text-ink-900">{title}</span>
        <span className="text-sm text-ink-700">{sr ? "ili " : "or "}<span className="underline underline-offset-4">{sr ? "izaberite sa računara" : "browse your computer"}</span></span>
        <span className="text-xs text-ink-500">{hint}</span>
        <input id={id} type="file" multiple accept={accept} className="sr-only" onChange={(e) => { add(e.target.files); e.target.value = ""; }} />
      </label>

      {files.length ? (
        <ul aria-label={sr ? "Dodati fajlovi" : "Added files"} className="mt-3.5 space-y-2">
          {files.map((name) => (
            <li key={name} className="flex items-center justify-between gap-3 rounded-md bg-surface py-1.5 pl-4 pr-1.5 text-sm text-ink-900">
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-surface-sunken text-[10px] font-semibold uppercase text-accent">{name.split(".").pop()?.slice(0, 4)}</span>
                <span className="truncate">{name}</span>
              </span>
              <button type="button" aria-label={sr ? `Uklonite: ${name}` : `Remove ${name}`} onClick={() => onRemove(name)} className="focus-ring inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink-500 hover:text-ink-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="size-4"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
