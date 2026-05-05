"use client";

const stacks = [
  { name: "Laravel", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Django", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "React", category: "Frontend" },
  { name: "Python", category: "Language" },
  { name: "Vue.js", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Nginx", category: "DevOps" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude API", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "Cloudflare", category: "Cloud" },
];

export default function TechStackCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-cream-50 border border-ink-900/[0.06] col-span-full lg:col-span-7 row-auto card-hover">
      <div className="p-6 sm:p-7 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-ink-400 font-mono">
            Stack · Daily drivers
          </p>
          <span className="text-xs font-mono text-accent-600">{stacks.length}+</span>
        </div>
      </div>

      {/* First marquee row */}
      <div className="relative flex overflow-hidden py-3 mask-fade">
        <div className="flex gap-3 animate-marquee whitespace-nowrap pr-3">
          {[...stacks, ...stacks].map((s, i) => (
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
          {[...stacks.slice().reverse(), ...stacks.slice().reverse()].map((s, i) => (
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
        <p className="font-serif text-2xl text-ink-900 italic leading-snug">
          From <span className="text-accent-600">schema</span> to{" "}
          <span className="text-accent-600">deployment</span> — comfortable
          across the whole stack.
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
