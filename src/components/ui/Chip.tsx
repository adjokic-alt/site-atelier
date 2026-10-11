import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
}

export function Chip({ children, selected = false, className = "", ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`focus-ring inline-flex min-h-12 items-center rounded-full border px-4 text-sm transition-colors ${selected ? "border-accent bg-accent-tint text-ink-900" : "border-border-strong bg-surface text-ink-700 hover:bg-surface-sunken"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
