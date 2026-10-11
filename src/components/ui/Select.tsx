import { forwardRef, useId, type SelectHTMLAttributes } from "react";

export interface SelectOption { value: string; label: string; }
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, helperText, error, id, className = "", ...props }, ref,
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const descriptionId = `${selectId}-description`;
  return (
    <div className="grid gap-2">
      <label htmlFor={selectId} className="text-sm font-medium text-ink-700">{label}</label>
      <select
        id={selectId}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={helperText || error ? descriptionId : undefined}
        className={`focus-ring min-h-12 w-full rounded-xs border bg-surface px-3 text-base text-ink-900 ${error ? "border-error" : "border-border-strong"} ${className}`}
        {...props}
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      {error ? <p id={descriptionId} role="alert" className="text-sm text-error">Error: {error}</p> : helperText ? <p id={descriptionId} className="text-sm text-ink-500">{helperText}</p> : null}
    </div>
  );
});
