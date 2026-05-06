import { ArrowUpRight, Download, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-8 sm:p-10 lg:p-12 col-span-full lg:col-span-8 lg:row-span-2">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <h1 className="text-display-lg text-ink-900 text-balance">
          Muhammad <span className="font-serif italic text-accent-600">Muneeb</span> <br />
          Ur Rehman
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed text-balance">
          Product Engineer who takes web apps from{" "}
          <span className="text-ink-900 font-medium">empty repo</span> to{" "}
          <span className="text-ink-900 font-medium">live, monitored production</span>
          {" "}— database, APIs, UI, infrastructure, and the CI/CD that keeps
          it shipping.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:mmunibrehman@gmail.com?subject=Project%20inquiry"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-cream-100 hover:bg-accent-500 transition-colors"
          >
            Hire me for a project
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            See selected work
          </Link>
          <a
            href="/Muhammad_Muneeb_Resume.docx"
            download
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            Download resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-600" />
            Pakistan · Remote-ready worldwide
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-ink-300" />
            5+ years in production
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-ink-300" />
            Open to roles &amp; contracts
          </span>
        </div>
      </div>
    </div>
  );
}
