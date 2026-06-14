import type { Metadata } from "next";
import { Briefcase, GraduationCap, Award, BadgeCheck } from "lucide-react";
import { cardClass } from "@/components/cards/Card";
import RichText, { type Segment } from "@/components/RichText";
import experienceData from "@/data/experience.json";

export const metadata: Metadata = {
  title: "Experience — Muhammad Shahzaib",
  description:
    "Five years of production work by Muhammad Shahzaib across SaaS, e-learning platforms, and client apps, from front-end intern to full-stack developer.",
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
  accent?: boolean;
};

type Education = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

type Certification = {
  name: string;
  issuer: string;
  year: string;
};

const experiences: Experience[] = experienceData.experiences;
const education: Education[] = experienceData.education;
const certifications: Certification[] = experienceData.certifications;
const { page } = experienceData;

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-content-muted mb-4">
          {page.eyebrow}
        </p>
        <h1 className="text-display-md text-content max-w-3xl text-balance">
          <RichText
            segments={page.heading as Segment[]}
            emClass="accent-em"
          />
        </h1>
        <p className="mt-5 text-lg text-content-muted max-w-2xl">
          {page.subhead}
        </p>
      </div>

      {/* Timeline */}
      <section className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-content/[0.05]" aria-hidden />

        <div className="space-y-8 stagger-children">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-12 sm:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 sm:left-2 flex items-center justify-center">
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center ${
                    exp.current
                      ? "bg-accent-500 text-white accent-glow"
                      : exp.accent
                      ? "bg-inverse text-accent-400"
                      : "bg-surface-strong text-content-muted"
                  }`}
                >
                  <Briefcase size={15} />
                </div>
              </div>

              <article
                className={`relative overflow-hidden rounded-3xl bg-surface border ${
                  exp.current
                    ? "border-accent-500/30 accent-glow"
                    : "border-line/10"
                } p-7 sm:p-9 card-hover`}
              >
                {exp.current && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-accent-500 text-white text-xs font-medium tracking-wide">
                    CURRENT ROLE
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-content-muted">
                      {exp.type}
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-3xl text-content">
                      {exp.role}
                    </h2>
                    <p className="mt-1 text-content-muted font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-sm">
                    <p className="font-mono text-content-muted">{exp.period}</p>
                    <p className="text-content-muted mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-content-muted leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-accent-500 mt-2.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-line/10">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-surface border border-line/10 text-xs font-mono text-content-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-2xl bg-inverse text-on-inverse flex items-center justify-center">
            <GraduationCap size={16} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-content-muted">
              {page.education.eyebrow}
            </p>
            <h2 className="text-3xl text-content">
              {page.education.heading}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((ed) => (
            <article
              key={ed.school}
              className={`${cardClass} p-7`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-content-muted uppercase tracking-widest">
                    {ed.period}
                  </p>
                  <h3 className="mt-1 text-xl text-content">
                    {ed.school}
                  </h3>
                  <p className="mt-1 text-content-muted">{ed.degree}</p>
                  {ed.note && (
                    <p className="mt-3 text-sm text-content-muted leading-relaxed pt-3 border-t border-line/10">
                      {ed.note}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-2xl bg-inverse text-on-inverse flex items-center justify-center">
            <BadgeCheck size={16} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-content-muted">
              {page.certifications.eyebrow}
            </p>
            <h2 className="text-3xl text-content">
              {page.certifications.heading}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className={`${cardClass} p-7`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-content-muted uppercase tracking-widest">
                    {cert.year}
                  </p>
                  <h3 className="mt-1 text-lg text-content leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-content-muted">{cert.issuer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
