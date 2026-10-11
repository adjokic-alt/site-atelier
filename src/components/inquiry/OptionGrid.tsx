"use client";
interface Option { value: string; label: string; description?: string; }
interface OptionGridProps {
  legend: string;
  options: Option[];
  selected: string[];
  onChange: (values: string[]) => void;
  multiple?: boolean;
  error?: string;
  fieldId?: string;
}

export function OptionGrid({ legend, options, selected, onChange, multiple = false, error, fieldId }: OptionGridProps) {
  const toggle = (value: string) => onChange(multiple ? (selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]) : [value]);
  const errorId = fieldId ? `${fieldId}-error` : undefined;
  return (
    <fieldset id={fieldId} tabIndex={error ? -1 : undefined} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`rounded-xl ${error ? "border-2 border-error bg-red-50/40 p-4" : ""}`}>
      <legend className={`text-sm font-medium ${error ? "text-error" : "text-ink-700"}`}>{legend}</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = selected.includes(option.value);
          return (
            <button key={option.value} type="button" role={multiple ? "checkbox" : "radio"} aria-checked={active} onClick={() => toggle(option.value)} className={`focus-ring min-h-12 rounded-lg border p-4 text-left ${active ? "border-2 border-accent bg-accent-tint" : error ? "border-error bg-surface" : "border-border-strong bg-surface hover:bg-surface-sunken"}`}>
              <span className="font-medium text-ink-900">{option.label}</span>
              {option.description ? <span className="mt-1 block text-sm text-ink-500">{option.description}</span> : null}
            </button>
          );
        })}
      </div>
      {error ? <p id={errorId} role="alert" className="mt-3 text-sm font-medium text-error">{error}</p> : null}
    </fieldset>
  );
}
