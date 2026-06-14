"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent-600">
        Something broke
      </p>
      <h1 className="mt-4 text-display-md font-bold text-ink-900">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md text-ink-500">
        Apologies — something went wrong while loading this page. You can try
        again or head back home.
      </p>
      {error.digest && (
        <p className="mt-3 font-mono text-xs text-ink-400">
          Reference: {error.digest}
        </p>
      )}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-ink-800"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-ink-900/[0.12] px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-cream-200"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
