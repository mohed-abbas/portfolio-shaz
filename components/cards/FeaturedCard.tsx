import { ArrowUpRight, Sparkles } from "lucide-react";
import home from "@/data/home.json";

export default function FeaturedCard() {
  const { badge, title, description, tags, footer } = home.featured;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-800 to-accent-500 text-white p-7 sm:p-8 col-span-full sm:col-span-1 lg:col-span-7 card-hover">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-900/40 to-transparent" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
          <Sparkles size={12} />
          <span className="text-xs font-medium tracking-wide">
            {badge}
          </span>
        </div>

        <h3 className="mt-6 text-3xl sm:text-4xl text-balance leading-tight">
          {title}
        </h3>

        <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-white/70 font-mono">
            {footer}
          </p>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-accent-600 group-hover:rotate-12 transition-transform">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}
