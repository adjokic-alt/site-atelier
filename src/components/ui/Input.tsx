import { forwardRef, useId, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, id, className = "", ...props }, ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = `${inputId}-description`;
  return (
    <div className="grid gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-ink-700">{label}</label>
      <input
        id={inputId}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={helperText || error ? descriptionId : undefined}
        className={`focus-ring min-h-12 w-full rounded-xs border bg-surface px-3 text-base text-ink-900 placeholder:text-ink-300 ${error ? "border-error" : "border-border-strong"} ${className}`}
        {...props}
      />
      {error ? <p id={descriptionId} role="alert" className="text-sm text-error">Error: {error}</p> : helperText ? <p id={descriptionId} className="text-sm text-ink-500">{helperText}</p> : null}
    </div>
  );
});
