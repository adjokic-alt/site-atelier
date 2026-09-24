"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-3xl px-5 py-20 text-center md:py-32">
      <p className="text-xs font-semibold uppercase tracking-[.08em] text-error">
        Something went wrong
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink-900">
        The page could not be completed.
      </h1>
      <p className="mt-5 text-ink-700">
        Your browser draft has not been intentionally deleted. Try the page
        again or return to the home page.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="focus-ring min-h-12 rounded-sm bg-ink-900 px-5 text-sm font-medium text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-ink-900 px-5 text-sm font-medium text-ink-900"
        >
          Go home
        </Link>
      </div>

      {error.digest ? (
        <p className="mt-8 text-xs text-ink-500">
          Error reference: {error.digest}
        </p>
      ) : null}
    </main>
  );
}
