import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent-600">
        404
      </p>
      <h1 className="mt-4 text-display-md font-bold text-ink-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-500">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-ink-800"
      >
        Back home
      </Link>
    </div>
  );
}
