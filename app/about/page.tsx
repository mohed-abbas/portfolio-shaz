import type { Metadata } from "next";
import { ArrowUpRight, Code, Database, Cloud, Brain, Building2, Download } from "lucide-react";
import Image from "next/image";
import { cardClass } from "@/components/cards/Card";
import RichText, { type Segment } from "@/components/RichText";
import profile from "@/data/profile.json";
import about from "@/data/about.json";

export const metadata: Metadata = {
  title: "About — Muhammad Shahzaib",
  description:
    "Muhammad Shahzaib is a full-stack developer in Paris building production SaaS and AI-integrated web apps with React, Next.js, Node, and Laravel, owned from database to deployed UI.",
};

const icons = { Code, Database, Cloud, Brain, Building2 };

const accentEm = "font-serif italic text-accent-600";
const boldEm = "text-ink-900 font-medium";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-16 flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-10">
        <div className="flex-1 min-w-0 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-4">
            {about.header.eyebrow}
          </p>
          <h1 className="text-display-md text-ink-900 text-balance">
            <RichText segments={about.header.headingSegments as Segment[]} emClass={accentEm} />
          </h1>
          <p className="mt-5 text-lg text-ink-500 max-w-2xl">
            {about.header.subhead}
          </p>
        </div>
        <div className="relative flex-shrink-0 self-start sm:self-center">
          <div className="absolute -inset-3 bg-accent-500/10 rounded-full blur-2xl" aria-hidden />
          <Image
            src={profile.photo}
            alt={profile.fullName}
            width={320}
            height={320}
            priority
            className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover ring-4 ring-cream-100 shadow-[0_20px_50px_-25px_rgba(11,11,10,0.35)]"
          />
        </div>
      </div>

      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16 stagger-children">
        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-8 sm:p-10">
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
          <div className="relative">
            <p className="text-3xl sm:text-4xl text-ink-900 leading-snug text-balance">
              <RichText segments={about.intro.leadSegments as Segment[]} emClass={accentEm} />
            </p>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              {about.intro.body.map((para, i) => (
                <p key={i}>
                  {typeof para === "string" ? (
                    para
                  ) : (
                    <RichText segments={para as Segment[]} emClass={boldEm} />
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-5">
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-8">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/30 rounded-full blur-3xl" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-cream-100/40">
                {about.quickFacts.eyebrow}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {about.quickFacts.items.map((fact, i) => (
                  <li
                    key={fact.label}
                    className={
                      i < about.quickFacts.items.length - 1
                        ? "flex justify-between gap-4 pb-3 border-b border-cream-100/10"
                        : "flex justify-between gap-4"
                    }
                  >
                    <span className="text-cream-100/60">{fact.label}</span>
                    <span>{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="group block relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#004D35_0%,#00BF7D_100%)] text-white p-8 card-hover"
          >
            <div className="absolute inset-0 dotted-pattern opacity-20" />
            <div className="relative flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-2">
                  {about.ctaContact.eyebrow}
                </p>
                <p className="text-2xl leading-tight">
                  {about.ctaContact.line}
                </p>
              </div>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-accent-600 group-hover:rotate-45 transition-transform flex-shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>

          <a
            href={profile.resumeUrl}
            download
            className="group flex items-center justify-between gap-4 rounded-3xl bg-white border border-ink-900/[0.06] p-6 card-hover"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-1">
                {about.ctaResume.eyebrow}
              </p>
              <p className="text-base text-ink-900 font-medium">
                {about.ctaResume.line}
              </p>
            </div>
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink-900 text-cream-100 group-hover:bg-accent-500 transition-colors flex-shrink-0">
              <Download size={18} />
            </span>
          </a>
        </aside>
      </section>

      {/* Principles */}
      <section className="mb-16">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
            {about.principlesSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl text-ink-900">
            <RichText segments={about.principlesSection.headingSegments as Segment[]} emClass={accentEm} />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {about.principles.map((p) => (
            <div
              key={p.n}
              className={`${cardClass} p-7`}
            >
              <p className="font-serif text-5xl text-accent-500/30 italic">
                {p.n}
              </p>
              <h3 className="mt-4 font-medium text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
            {about.skillsSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl text-ink-900">
            <RichText segments={about.skillsSection.headingSegments as Segment[]} emClass={accentEm} />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {about.skillGroups.map((group) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <div
                key={group.title}
                className={`${cardClass} p-7`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-accent-500/10 text-accent-600 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-medium text-ink-900">{group.title}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
