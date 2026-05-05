import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    company: "Fauji Cement Company Limited",
    role: "Management Trainee Officer",
    period: "Nov 2024 — Present",
    location: "On-site · Pakistan",
    type: "Full-time",
    bullets: [
      "Built FCCMS (Fauji Cement Colony Management System) end-to-end as sole developer — a housing society platform covering resident records, repair & maintenance, inventory, and complaint workflows.",
      "Owned schema, REST APIs, frontend, and deployment using Laravel, Next.js, and TypeScript.",
      "Wrote Python automation tools to fast-track daily IT tasks, including a network scanner and a remote installer for endpoint software deployment.",
      "Supported IT operations across EMS, ERP, networking, and hardware troubleshooting.",
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
      "Architected and developed full-stack web applications across the SDLC — relational database schemas, Laravel and Django REST APIs, responsive React/Next.js frontends.",
      "Delivered production features through Git-based version control, peer code review, and agile sprint cycles.",
      "Applied object-oriented design, performance optimization, and CI/CD practices in collaboration with cross-functional teams.",
    ],
    stack: ["Laravel", "Django", "React", "Next.js", "MySQL", "PostgreSQL"],
  },
  {
    company: "Freelance · Devlin Solutions",
    role: "Full-Stack & DevOps Engineer",
    period: "Jan 2021 — Present",
    location: "Remote · Worldwide",
    type: "Independent",
    bullets: [
      "Engineered and shipped end-to-end full-stack web applications for international and local clients via Upwork, Fiverr, and direct engagements.",
      "Built React/Next.js frontends with TypeScript, REST APIs in Laravel and Django, plus database design, cloud deployment, and post-launch maintenance.",
      "Delivered task-based customization, feature development, and bug fixes — including contract engagements with Panther Tech.",
      "Shipped production-ready AI integrations across client web applications using OpenAI, Anthropic Claude, and Google Gemini APIs.",
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
      "Started as a PHP intern and promoted to Software Engineer within the first month based on rapid skill acquisition.",
      "Engineered and maintained Laravel applications backed by MySQL.",
      "Built dynamic, real-time interfaces with Laravel Livewire and AJAX-driven workflows.",
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
    note: "Selected from 4,500+ applicants for a 150-hour program in communication, leadership, and problem-solving.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
          / Experience · 5+ years
        </p>
        <h1 className="font-serif text-display-md text-ink-900 max-w-3xl text-balance">
          From PHP intern to{" "}
          <span className="italic text-accent-600">end-to-end ownership</span>.
        </h1>
        <p className="mt-5 text-lg text-ink-500 max-w-2xl">
          A career built on shipping production software, learning fast, and
          owning projects from schema to deployment.
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
                    <p className="text-xs font-mono uppercase tracking-widest text-ink-400">
                      {exp.type}
                    </p>
                    <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink-900">
                      {exp.role}
                    </h2>
                    <p className="mt-1 text-ink-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left sm:text-right text-sm">
                    <p className="font-mono text-ink-700">{exp.period}</p>
                    <p className="text-ink-400 mt-1">{exp.location}</p>
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
            <p className="text-xs font-mono uppercase tracking-widest text-ink-400">
              Credentials
            </p>
            <h2 className="font-serif text-3xl text-ink-900 italic">
              Education
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((ed) => (
            <article
              key={ed.school}
              className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-7 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Award size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                    {ed.period}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-ink-900">
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
