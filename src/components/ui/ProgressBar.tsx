interface ProgressBarProps { current: number; total: number; label?: string; }

export function ProgressBar({ current, total, label = "Progress" }: ProgressBarProps) {
  const safeTotal = Math.max(total, 1);
  const safeCurrent = Math.min(Math.max(current, 0), safeTotal);
  const percentage = Math.round((safeCurrent / safeTotal) * 100);
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm text-ink-700"><span>{label}</span><span>{safeCurrent} of {safeTotal}</span></div>
      <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={safeTotal} aria-valuenow={safeCurrent} className="h-2 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
