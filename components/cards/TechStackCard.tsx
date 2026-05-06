"use client";

const stacks = [
  { name: "TypeScript", category: "Build" },
  { name: "Next.js", category: "Build" },
  { name: "Python", category: "Build" },
  { name: "PostgreSQL", category: "Data" },
  { name: "pgvector", category: "Data" },
  { name: "Claude API", category: "Data" },
  { name: "AWS", category: "Ship" },
  { name: "Cloudflare", category: "Ship" },
  { name: "Docker", category: "Ship" },
];

export default function TechStackCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-cream-50 border border-ink-900/[0.06] col-span-full lg:col-span-7 row-auto card-hover">
      <div className="p-6 sm:p-7 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-ink-400 font-mono">
            Daily stack · Battle-tested
          </p>
          <span className="text-xs font-mono text-accent-600">{stacks.length}+</span>
        </div>
      </div>

      {/* First marquee row */}
      <div className="relative flex overflow-hidden py-3 mask-fade">
        <div className="flex gap-3 animate-marquee whitespace-nowrap pr-3">
          {[...stacks, ...stacks, ...stacks].map((s, i) => (
            <span
              key={`r1-${i}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-900/[0.06] text-sm text-ink-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              {s.name}
              <span className="text-ink-400 text-xs ml-1">{s.category}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Second marquee row, reversed */}
      <div className="relative flex overflow-hidden py-3 mask-fade">
        <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap pr-3">
          {[...stacks.slice().reverse(), ...stacks.slice().reverse(), ...stacks.slice().reverse()].map((s, i) => (
            <span
              key={`r2-${i}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-900/[0.06] text-sm text-ink-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink-400" />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-3">
        <p className="text-2xl text-ink-900 leading-snug">
          From <span className="font-serif italic text-accent-600">schema</span> to{" "}
          <span className="font-serif italic text-accent-600">production</span> — one
          engineer, the full stack, no handoffs lost in translation.
        </p>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }
      `}</style>
    </div>
  );
}
