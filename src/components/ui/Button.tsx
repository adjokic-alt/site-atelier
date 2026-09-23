import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "style";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-white hover:opacity-90",
  secondary: "border-[1.5px] border-ink-900 bg-transparent text-ink-900 hover:bg-surface-sunken",
  tertiary: "bg-transparent text-accent underline-offset-4 hover:underline",
  style: "bg-accent text-accent-contrast hover:bg-accent-hover",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-12 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-[52px] px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium transition-[background-color,opacity,transform] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : null}
      <span>{isLoading ? "Loading" : children}</span>
    </button>
  );
}
