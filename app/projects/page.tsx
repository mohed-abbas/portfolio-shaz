import { ArrowUpRight, Github } from "lucide-react";
import ProjectsBarrel from "@/components/ProjectsBarrel";

const projects = [
  {
    name: "FCCMS",
    subtitle: "Housing-society platform shipped solo",
    description:
      "Live system used daily for resident records, maintenance, inventory, and complaints. Owned end-to-end: PostgreSQL schema, Laravel REST APIs, Next.js + TypeScript UI, AWS deployment, CI/CD.",
    tags: ["Laravel", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    role: "Sole Engineer",
    year: "2024 → Live",
    status: "in production",
    gradient: "from-accent-800 to-accent-500",
  },
  {
    name: "Network Scanner Suite",
    subtitle: "IT automation that buys back hours",
    description:
      "Python tooling for daily corporate IT operations — a network scanner and a remote installer that rolls out endpoint software across the network without touching individual machines.",
    tags: ["Python", "Bash", "Networking", "Automation"],
    role: "Sole Engineer",
    year: "2025",
    status: "in production",
    gradient: "from-ink-800 to-ink-900",
  },
  {
    name: "AI-Powered Web Apps",
    subtitle: "LLM features in real client products",
    description:
      "Production AI work across multiple client applications — LLM-powered features, conversational interfaces, and prompt-engineered workflows on OpenAI, Anthropic Claude, and Google Gemini.",
    tags: ["OpenAI", "Claude", "Gemini", "Next.js", "Prompt Engineering"],
    role: "Product Engineer",
    year: "2023 → Now",
    status: "ongoing",
    gradient: "from-accent-800 to-accent-600",
  },
  {
    name: "Panther Tech Engagements",
    subtitle: "Contract feature work for shipped products",
    description:
      "Scoped customization, feature builds, and bug fixes inside existing client codebases — delivered on tight timelines with clean handoffs back to internal teams.",
    tags: ["Laravel", "PHP", "MySQL", "React"],
    role: "Contractor",
    year: "2022 → 2024",
    status: "delivered",
    gradient: "from-ink-700 to-ink-800",
  },
  {
    name: "Capregsoft Production Apps",
    subtitle: "Full-stack products across the SDLC",
    description:
      "Architected and shipped multiple full-stack web products — relational schemas, Laravel and Django REST APIs, and TypeScript React/Next.js frontends — backed by MySQL and PostgreSQL.",
    tags: ["Laravel", "Django", "React", "Next.js", "PostgreSQL"],
    role: "Software Engineer",
    year: "2022 → 2024",
    status: "delivered",
    gradient: "from-accent-700 to-ink-800",
  },
  {
    name: "Linknb1t Platform Work",
    subtitle: "Real-time Laravel apps for internal teams",
    description:
      "Promoted from PHP intern to Software Engineer in the first month. Engineered Laravel + MySQL applications and shipped real-time interfaces using Laravel Livewire and AJAX-driven workflows.",
    tags: ["Laravel", "Livewire", "MySQL", "AJAX", "PHP"],
    role: "Software Engineer",
    year: "2020 → 2022",
    status: "shipped",
    gradient: "from-ink-800 to-accent-700",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* Pinned rolling barrel — header rides inside the sticky frame so the wheel sits right below it */}
      <ProjectsBarrel
        projects={projects}
        header={
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10">
            <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
              / Projects · {projects.length} highlighted
            </p>
            <h1 className="text-display-md text-ink-900 max-w-3xl text-balance">
              Real systems, real users,{" "}
              <span className="font-serif italic text-accent-600">shipped</span>.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl">
              A focused selection across enterprise platforms, AI
              integrations, and client engagements — every project below is
              live or has been delivered to its owners.
            </p>
          </div>
        }
      />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-10 sm:p-14 text-center">
        <div className="absolute inset-0 dotted-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-cream-100/50 mb-4">
            Currently accepting new work · Replies within 24h
          </p>
          <p className="text-3xl sm:text-5xl max-w-2xl mx-auto text-balance leading-tight">
            Have something that needs{" "}
            <span className="font-serif italic text-accent-400">shipping</span>?
            Let&apos;s scope it together.
          </p>
          <p className="mt-5 text-cream-100/60 max-w-xl mx-auto leading-relaxed">
            One engineer, full ownership, and a 5-year track record of
            production deliveries. Tell me the goal — I&apos;ll come back
            with a plan and a timeline.
          </p>
          <a
            href="mailto:mmunibrehman@gmail.com?subject=Project%20inquiry"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white hover:bg-accent-400 transition-colors"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/MMuneeb17"
            target="_blank"
            rel="noreferrer"
            className="ml-3 mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-cream-100 hover:bg-white/15 transition-colors"
          >
            <Github size={16} />
            More work on GitHub
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
