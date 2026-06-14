import type { Metadata } from "next";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { cardClass } from "@/components/cards/Card";

export const metadata: Metadata = {
  title: "Experience — Muneeb Ur Rehman",
  description:
    "Five years of production engineering by Muhammad Muneeb Ur Rehman — across enterprise systems, SaaS, and freelance work, from PHP intern to end-to-end owner.",
};

const experiences = [
  {
    company: "Fauji Cement Company Limited",
    role: "Management Trainee Officer",
    period: "Nov 2024 — Present",
    location: "On-site · Pakistan",
    type: "Full-time",
    bullets: [
      "Designed, built, and shipped FCCMS (Fauji Cement Colony Management System) solo — a housing-society platform now live and used daily for resident records, maintenance workflows, inventory, and complaint tracking.",
      "Owned the full delivery chain: PostgreSQL schema, Laravel REST APIs, Next.js + TypeScript frontend, AWS deployment, and CI/CD.",
      "Cut hours from daily IT operations with Python automation — a network scanner and a remote installer that rolls out endpoint software across the corporate network.",
      "Acted as a force-multiplier for the IT function across EMS, ERP, networking, and on-site hardware support.",
    ],
    stack: ["Laravel", "Next.js", "TypeScript", "Python", "PostgreSQL"],
    current: true,
  },
  {
    company: "Capregsoft",
    role: "Software Engineer",
    period: "Jun 2022 — Sep 2024",
    location: "Hybrid",
    type: "Full-time",
    bullets: [
      "Shipped multiple full-stack web products across the SDLC — relational schemas, Laravel and Django REST APIs, and React/Next.js frontends — for paying customers.",
      "Worked inside an agile team: Git-based reviews, sprint planning, and a strong feedback culture that kept release velocity high without breaking trunk.",
      "Tightened performance, hardened deploys, and matured CI/CD pipelines alongside product, design, and QA stakeholders.",
    ],
    stack: ["Laravel", "Django", "React", "Next.js", "MySQL", "PostgreSQL"],
  },
  {
    company: "Freelance · Devlin Solutions",
    role: "Product Engineer",
    period: "Jan 2021 — Present",
    location: "Remote · Worldwide",
    type: "Independent",
    bullets: [
      "Delivered end-to-end web products for international and local clients via Upwork, Fiverr, and direct engagements — a track record of repeat hires and long retention.",
      "Built typed Next.js/React frontends, Laravel and Django APIs, schema design, cloud deployment, and the ongoing maintenance work that keeps the bills paid post-launch.",
      "Executed scoped contract engagements (incl. with Panther Tech) — feature builds, targeted refactors, and bug fixes shipped on tight timelines.",
      "Embedded production-grade AI into client products with OpenAI, Anthropic Claude, and Google Gemini — measurable workflow features, not chatbot demos.",
    ],
    stack: ["Next.js", "Laravel", "Django", "AWS", "OpenAI", "Claude"],
    accent: true,
  },
  {
    company: "Linknb1t",
    role: "Software Engineer",
    period: "Aug 2020 — Mar 2022",
    location: "On-site",
    type: "Full-time",
    bullets: [
      "Joined as a PHP intern and promoted to Software Engineer inside the first month — picked up the codebase and started shipping features alongside seniors.",
      "Built and maintained Laravel applications on MySQL — owned features from ticket to release.",
      "Shipped real-time interfaces with Laravel Livewire and AJAX, including dashboards and operations tools used daily by internal teams.",
    ],
    stack: ["Laravel", "Livewire", "MySQL", "AJAX"],
  },
];

const education = [
  {
    school: "COMSATS University Islamabad",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep 2018 — Jun 2023",
  },
  {
    school: "Amal Academy (Stanford-funded)",
    degree: "Career-Prep Fellow",
    period: "Dec 2021 — Feb 2022",
    note: "Selected from 4,500+ applicants for a 150-hour Stanford-funded program in communication, leadership, and structured problem-solving.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-4">
          / Experience · 5+ years
        </p>
        <h1 className="text-display-md text-ink-900 max-w-3xl text-balance">
          PHP intern to{" "}
          <span className="font-serif italic text-accent-600">end-to-end owner</span> —
          on the same trajectory ever since.
        </h1>
        <p className="mt-5 text-lg text-ink-500 max-w-2xl">
          Five years of production engineering across enterprise systems,
          SaaS, and freelance work — promoted on output, retained on
          reliability, and still shipping every week.
        </p>
      </div>

      {/* Timeline */}
      <section className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-ink-900/[0.08]" aria-hidden />

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
                      ? "bg-ink-900 text-accent-400"
                      : "bg-cream-200 text-ink-700"
                  }`}
                >
                  <Briefcase size={15} />
                </div>
              </div>

              <article
                className={`relative overflow-hidden rounded-3xl bg-white border ${
                  exp.current
                    ? "border-accent-500/30 accent-glow"
                    : "border-ink-900/[0.06]"
                } p-7 sm:p-9 card-hover`}
              >
                {exp.current && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-accent-500 text-white text-xs font-medium tracking-wide">
                    CURRENT ROLE
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-ink-500">
                      {exp.type}
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-3xl text-ink-900">
                      {exp.role}
                    </h2>
                    <p className="mt-1 text-ink-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-sm">
                    <p className="font-mono text-ink-700">{exp.period}</p>
                    <p className="text-ink-500 mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-ink-600 leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-accent-500 mt-2.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-ink-900/[0.05]">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-cream-100 border border-ink-900/[0.06] text-xs font-mono text-ink-700"
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
          <div className="w-9 h-9 rounded-2xl bg-ink-900 text-cream-100 flex items-center justify-center">
            <GraduationCap size={16} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-500">
              Credentials
            </p>
            <h2 className="text-3xl text-ink-900">
              Education
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
                  <p className="font-mono text-xs text-ink-500 uppercase tracking-widest">
                    {ed.period}
                  </p>
                  <h3 className="mt-1 text-xl text-ink-900">
                    {ed.school}
                  </h3>
                  <p className="mt-1 text-ink-600">{ed.degree}</p>
                  {ed.note && (
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed pt-3 border-t border-ink-900/[0.05]">
                      {ed.note}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
