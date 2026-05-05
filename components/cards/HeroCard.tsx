import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-8 sm:p-10 lg:p-12 col-span-full lg:col-span-8 lg:row-span-2">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide">
            Available for new opportunities
          </span>
        </div>

        <h1 className="mt-8 font-serif text-display-lg text-ink-900 text-balance">
          Muhammad <span className="italic text-accent-600">Muneeb</span> <br />
          Ur Rehman
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed text-balance">
          Full-Stack &amp; DevOps Engineer building production web applications
          from <span className="text-ink-900 font-medium">empty repo</span> to{" "}
          <span className="text-ink-900 font-medium">live URL</span> — schema,
          APIs, frontend, cloud, and CI/CD.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-cream-100 hover:bg-accent-500 transition-colors"
          >
            View projects
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform"
            />
          </Link>
          <a
            href="mailto:mmunibrehman@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-600" />
            Remote · Pakistan (PKT, UTC+5)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-ink-300" />
            5+ years shipping production
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-ink-300" />
            Open to long-term contracts
          </span>
        </div>
      </div>
    </div>
  );
}
