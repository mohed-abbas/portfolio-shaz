import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "FCCMS",
    subtitle: "Fauji Cement Colony Management System",
    description:
      "End-to-end housing society platform built as the sole developer. Resident records, repair & maintenance workflows, inventory management, and complaint tracking. Owned schema design, REST APIs, frontend, and deployment.",
    tags: ["Laravel", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    role: "Sole Developer",
    year: "2024 → Now",
    status: "shipping",
    gradient: "from-accent-500 to-accent-600",
  },
  {
    name: "Network Scanner Suite",
    subtitle: "Internal IT automation tools",
    description:
      "Python automation tools that fast-track daily IT operations — including a network scanner and a remote installer for endpoint software deployment across the corporate network.",
    tags: ["Python", "Bash", "Networking", "Automation"],
    role: "Sole Developer",
    year: "2025",
    status: "production",
    gradient: "from-ink-800 to-ink-900",
  },
  {
    name: "AI-Powered Web Apps",
    subtitle: "Multi-client LLM integration projects",
    description:
      "Production-ready AI integrations across client web applications — LLM-powered features, conversational interfaces, and prompt-engineered automation flows using OpenAI, Anthropic Claude, and Google Gemini APIs.",
    tags: ["OpenAI", "Claude", "Gemini", "Next.js", "Prompt Engineering"],
    role: "Full-Stack Engineer",
    year: "2023 → Now",
    status: "ongoing",
    gradient: "from-accent-600 to-accent-700",
  },
  {
    name: "Panther Tech Engagements",
    subtitle: "Contract feature development",
    description:
      "Task-based customization, feature development, and bug fixes across existing client codebases. Focus on reliability, performance, and clean handoffs to internal teams.",
    tags: ["Laravel", "PHP", "MySQL", "React"],
    role: "Contractor",
    year: "2022 → 2024",
    status: "completed",
    gradient: "from-ink-700 to-ink-800",
  },
  {
    name: "Capregsoft Production Apps",
    subtitle: "Full-stack web applications",
    description:
      "Architected and developed full-stack web applications across the SDLC — relational schemas, Laravel & Django REST APIs, responsive React/Next.js frontends with TypeScript, MySQL, and PostgreSQL backends.",
    tags: ["Laravel", "Django", "React", "Next.js", "PostgreSQL"],
    role: "Software Engineer",
    year: "2022 → 2024",
    status: "delivered",
    gradient: "from-accent-700 to-ink-800",
  },
  {
    name: "Linknb1t Platform Work",
    subtitle: "Real-time Laravel applications",
    description:
      "Promoted from PHP intern to Software Engineer within the first month. Engineered and maintained Laravel applications backed by MySQL, building dynamic real-time interfaces with Laravel Livewire and AJAX-driven workflows.",
    tags: ["Laravel", "Livewire", "MySQL", "AJAX", "PHP"],
    role: "Software Engineer",
    year: "2020 → 2022",
    status: "shipped",
    gradient: "from-ink-800 to-accent-700",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
          / Projects · {projects.length} highlighted
        </p>
        <h1 className="font-serif text-display-md text-ink-900 max-w-3xl text-balance">
          Production work, <span className="italic text-accent-600">shipped</span>{" "}
          across years and stacks.
        </h1>
        <p className="mt-5 text-lg text-ink-500 max-w-2xl">
          A selection of projects spanning enterprise systems, AI integrations,
          and freelance engagements — all production-grade and battle-tested.
        </p>
      </div>

      {/* Project list */}
      <div className="space-y-5 stagger-children">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] card-hover"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visual / number block */}
              <div
                className={`relative lg:col-span-4 bg-gradient-to-br ${p.gradient} text-white p-8 sm:p-10 min-h-[200px] lg:min-h-[280px] flex flex-col justify-between overflow-hidden`}
              >
                <div className="absolute inset-0 grid-pattern opacity-15" />
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/70">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-serif text-5xl italic">{p.name}</p>
                </div>

                <div className="relative flex items-center justify-between mt-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-shimmer" />
                    {p.status}
                  </span>
                  <span className="font-mono text-xs text-white/80">{p.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-ink-400">
                        {p.role}
                      </p>
                      <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink-900 text-balance">
                        {p.subtitle}
                      </h2>
                    </div>
                    <span className="hidden sm:inline-flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-ink-900 text-cream-100 group-hover:bg-accent-500 group-hover:rotate-45 transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="mt-4 text-ink-600 leading-relaxed text-balance">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-cream-200 text-xs font-mono text-ink-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-10 sm:p-14 text-center">
        <div className="absolute inset-0 dotted-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-cream-100/50 mb-4">
            More work on request
          </p>
          <p className="font-serif text-3xl sm:text-5xl italic max-w-2xl mx-auto text-balance leading-tight">
            Have a project that needs <span className="text-accent-400">shipping</span>?
          </p>
          <a
            href="mailto:mmunibrehman@gmail.com"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white hover:bg-accent-400 transition-colors"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/MMuneeb17"
            target="_blank"
            rel="noreferrer"
            className="ml-3 mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-cream-100 hover:bg-white/15 transition-colors"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
