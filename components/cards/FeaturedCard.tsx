import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FeaturedCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 to-accent-600 text-white p-7 sm:p-8 col-span-full sm:col-span-1 lg:col-span-7 card-hover">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-700/30 to-transparent" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
          <Sparkles size={12} />
          <span className="text-xs font-medium tracking-wide">
            Currently shipping
          </span>
        </div>

        <h3 className="mt-6 font-serif text-3xl sm:text-4xl text-balance leading-tight">
          FCCMS — Fauji Cement Colony Management System
        </h3>

        <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
          A complete housing society platform built end-to-end as the sole
          developer. Resident records, repair workflows, inventory, and
          complaint tracking — schema, APIs, frontend, deployment.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Laravel", "Next.js", "TypeScript", "PostgreSQL"].map((t) => (
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
            Fauji Cement Co. · 2024 → Present
          </p>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-accent-600 group-hover:rotate-12 transition-transform">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}
