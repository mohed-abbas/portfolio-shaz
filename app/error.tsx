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
      <h1 className="mt-4 text-display-md font-bold text-content">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md text-content-muted">
        Apologies — something went wrong while loading this page. You can try
        again or head back home.
      </p>
      {error.digest && (
        <p className="mt-3 font-mono text-xs text-content-faint">
          Reference: {error.digest}
        </p>
      )}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-inverse px-6 py-3 text-sm font-medium text-on-inverse transition-colors hover:bg-inverse/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-line/15 px-6 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-strong"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
