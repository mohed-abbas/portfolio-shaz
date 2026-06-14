import { Github, ArrowUpRight } from "lucide-react";
import { cardClass } from "@/components/cards/Card";

export default function GithubCard() {
  return (
    <a
      href="https://github.com/MMuneeb17"
      target="_blank"
      rel="noreferrer"
      className={`group ${cardClass} p-7 col-span-full sm:col-span-1 lg:col-span-5 flex flex-col justify-between`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-ink-900 text-cream-100 flex items-center justify-center">
            <Github size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-500 font-mono">
              GitHub
            </p>
            <p className="font-medium text-ink-900">@MMuneeb17</p>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          className="text-ink-500 group-hover:text-accent-500 group-hover:rotate-12 transition-all"
        />
      </div>

      {/* Decorative contribution graph */}
      <div className="mt-6 grid grid-cols-13 gap-1">
        {Array.from({ length: 91 }).map((_, i) => {
          const level = (i * 7 + 3) % 5;
          const bg =
            level === 4
              ? "bg-accent-500"
              : level === 3
              ? "bg-accent-400"
              : level === 2
              ? "bg-accent-200"
              : level === 1
              ? "bg-accent-100"
              : "bg-ink-900/[0.04]";
          return (
            <span
              key={i}
              className={`aspect-square rounded-sm ${bg}`}
            />
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-ink-900/[0.06]">
        <div>
          <p className="text-3xl text-ink-900">40+</p>
          <p className="text-xs text-ink-500 font-mono mt-1">Repos</p>
        </div>
        <div>
          <p className="text-3xl text-ink-900">5y</p>
          <p className="text-xs text-ink-500 font-mono mt-1">Active</p>
        </div>
        <div>
          <p className="font-serif text-3xl text-accent-600">∞</p>
          <p className="text-xs text-ink-500 font-mono mt-1">Curiosity</p>
        </div>
      </div>
    </a>
  );
}
