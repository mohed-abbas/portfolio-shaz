export default function QuoteCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-8 col-span-full sm:col-span-2 lg:col-span-8 card-hover">
      <div className="absolute inset-0 dotted-pattern opacity-30" />
      <div className="absolute top-4 right-6 font-serif text-9xl leading-none text-accent-500/20 select-none">
        &ldquo;
      </div>

      <div className="relative">
        <p className="text-xs uppercase tracking-widest text-cream-100/40 font-mono">
          Building philosophy
        </p>

        <p className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
          Software that&apos;s easy to{" "}
          <span className="italic text-accent-400">deploy</span>, easy to{" "}
          <span className="italic text-accent-400">maintain</span>, and{" "}
          <span className="italic text-accent-400">dependable</span> in
          production.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-cream-100/15" />
          <span className="font-mono text-xs uppercase tracking-widest text-cream-100/50">
            — Muneeb
          </span>
        </div>
      </div>
    </div>
  );
}
