"use client";

import RichText, { type Segment } from "@/components/RichText";
import home from "@/data/home.json";

const { stacks, caption } = home.techStack;

export default function TechStackCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-surface border border-line/10 col-span-full lg:col-span-7 row-auto card-hover">
      <div className="p-6 sm:p-7 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-content-muted font-mono">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-strong border border-line/10 text-sm text-content-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              {s.name}
              <span className="text-content-muted text-xs ml-1">{s.category}</span>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-strong border border-line/10 text-sm text-content-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-content-faint" />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-3">
        <p className="text-2xl text-content leading-snug">
          <RichText segments={caption as Segment[]} emClass="font-serif italic text-accent-600" />
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
