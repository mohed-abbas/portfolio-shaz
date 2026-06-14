import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent-600">
        404
      </p>
      <h1 className="mt-4 text-display-md font-bold text-content">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-content-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-inverse px-6 py-3 text-sm font-medium text-on-inverse transition-colors hover:bg-inverse/90"
      >
        Back home
      </Link>
    </div>
  );
}
