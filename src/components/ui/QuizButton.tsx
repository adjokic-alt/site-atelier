import Link from "next/link";

/** The cognac "Find my style · 45 sec quiz" button — the quiz is the site's main way into a style. */
export function QuizButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/styles/not-sure"
      className={`focus-ring inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[#9c5f37] py-1.5 pl-7 pr-2 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#844e2c] ${className}`}
    >
      Find my style
      <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium tracking-wide">45 sec quiz</span>
    </Link>
  );
}
