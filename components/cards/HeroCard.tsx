import { ArrowUpRight, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { cardClass } from "@/components/cards/Card";
import RichText, { type Segment } from "@/components/RichText";
import profile from "@/data/profile.json";
import home from "@/data/home.json";

export default function HeroCard() {
  const { intro, ctas, badges } = home.hero;

  return (
    <div className={`${cardClass} p-8 sm:p-10 lg:p-12 col-span-full lg:col-span-8 lg:row-span-2`}>
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <h1 className="text-display-lg text-ink-900 text-balance">
          {profile.firstName} <span className="font-serif italic text-accent-600">{profile.accentName}</span> <br />
          {profile.lastName}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed text-balance">
          <RichText segments={intro as Segment[]} emClass="text-ink-900 font-medium" />
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-cream-100 hover:bg-accent-500 transition-colors"
          >
            {ctas.hire}
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            {ctas.work}
          </Link>
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            {ctas.resume}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
          {badges.map((badge, i) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              {i === 0 ? (
                <MapPin size={14} className="text-accent-600" />
              ) : (
                <span className="w-1 h-1 rounded-full bg-ink-300" />
              )}
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
