import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/**
 * Shared, non-conflicting styles only: no property here is also set inside
 * a variant string. Tailwind utilities have equal CSS specificity, so two
 * classes targeting the same property (e.g. a height in the base string and
 * a different height in a variant string) would resolve by stylesheet
 * order, not by which one is "more specific" — mixing them is how utilities
 * silently cancel each other out. Each variant below owns its own sizing.
 */
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans text-sm font-medium transition-opacity focus-ring disabled:pointer-events-none disabled:opacity-40";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "h-12 md:h-11 px-5 bg-ink-900 text-white hover:opacity-90 active:opacity-80",
  secondary:
    "h-12 md:h-11 px-5 border-[1.5px] border-ink-900 bg-transparent text-ink-900 hover:bg-surface-sunken",
  tertiary: "h-auto px-0 text-accent underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
