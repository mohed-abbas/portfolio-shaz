import { ArrowUpRight, Code, Database, Cloud, Brain, Building2 } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    items: [
      "PHP (Laravel)",
      "JavaScript / TypeScript",
      "Next.js, React, Vue.js",
      "Tailwind CSS",
      "Python (Django)",
      "C#, ABAP, Bash",
      "REST API design",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle", "SQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2)",
      "Docker",
      "Nginx",
      "Cloudflare",
      "Linux / Ubuntu",
      "Git / GitHub",
      "CI/CD (Actions, GitLab CI)",
      "Server administration",
    ],
  },
  {
    icon: Brain,
    title: "AI Integration",
    items: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "LLM API integration",
      "Prompt engineering",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise & IT",
    items: [
      "SAP",
      "ABAP development",
      "Power BI",
      "ERP / EMS",
      "Network troubleshooting",
      "IT support",
    ],
  },
];

const principles = [
  {
    n: "01",
    title: "End-to-end ownership",
    body: "Empty repo to live URL. Schema, APIs, frontend, deployment, and CI/CD — handled.",
  },
  {
    n: "02",
    title: "Production-first mindset",
    body: "Software that's easy to deploy, easy to maintain, and dependable in real traffic.",
  },
  {
    n: "03",
    title: "Async-first communication",
    body: "Built for remote roles and long-term contracts. Clear writeups, clean handoffs.",
  },
  {
    n: "04",
    title: "Always shipping",
    body: "Active in the field for 5+ years across enterprise, SaaS, and freelance work.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
          / About
        </p>
        <h1 className="font-serif text-display-md text-ink-900 text-balance">
          A few words about{" "}
          <span className="italic text-accent-600">how I work</span>.
        </h1>
      </div>

      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16 stagger-children">
        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-8 sm:p-10">
          <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
          <div className="relative">
            <p className="font-serif text-3xl sm:text-4xl text-ink-900 leading-snug text-balance">
              Hey 👋 — I&apos;m{" "}
              <span className="italic text-accent-600">Muneeb</span>, a
              full-stack and DevOps engineer based in Pakistan.
            </p>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                I&apos;ve spent the last five years taking projects from empty
                repo to live URL — designing schemas, building APIs, shaping
                frontends, deploying to cloud, and automating CI/CD. I&apos;m
                comfortable across the full stack, but I get particular
                satisfaction from the messy middle: making things actually run
                in production.
              </p>
              <p>
                Lately, that&apos;s meant building{" "}
                <span className="text-ink-900 font-medium">FCCMS</span> — a
                full housing-society platform — end-to-end at Fauji Cement,
                while continuing freelance work integrating LLMs into client
                applications.
              </p>
              <p>
                Outside enterprise work, I freelance independently across
                Laravel, Next.js, Django, and AI integrations with{" "}
                <span className="text-ink-900 font-medium">OpenAI</span>,{" "}
                <span className="text-ink-900 font-medium">Claude</span>, and{" "}
                <span className="text-ink-900 font-medium">Gemini</span>.
              </p>
              <p>
                I&apos;m available for remote roles and long-term contracts —
                async-first, with strong written communication and a focus on
                clean handoffs.
              </p>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-5">
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-8">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/30 rounded-full blur-3xl" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-cream-100/40">
                Quick facts
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex justify-between gap-4 pb-3 border-b border-cream-100/10">
                  <span className="text-cream-100/60">Based in</span>
                  <span>Pakistan (PKT, UTC+5)</span>
                </li>
                <li className="flex justify-between gap-4 pb-3 border-b border-cream-100/10">
                  <span className="text-cream-100/60">Available for</span>
                  <span>Remote roles · Contracts</span>
                </li>
                <li className="flex justify-between gap-4 pb-3 border-b border-cream-100/10">
                  <span className="text-cream-100/60">Years shipping</span>
                  <span>5+</span>
                </li>
                <li className="flex justify-between gap-4 pb-3 border-b border-cream-100/10">
                  <span className="text-cream-100/60">Specialty</span>
                  <span>Full-Stack + DevOps</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-cream-100/60">Comm style</span>
                  <span>Async-first</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="mailto:mmunibrehman@gmail.com"
            className="group block relative overflow-hidden rounded-3xl bg-accent-500 text-white p-8 card-hover"
          >
            <div className="absolute inset-0 dotted-pattern opacity-20" />
            <div className="relative flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-2">
                  Available now
                </p>
                <p className="font-serif text-2xl italic leading-tight">
                  Let&apos;s talk about your project.
                </p>
              </div>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-accent-600 group-hover:rotate-45 transition-transform flex-shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>
        </aside>
      </section>

      {/* Principles */}
      <section className="mb-16">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
            / How I work
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
            Four <span className="italic text-accent-600">principles</span>{" "}
            that guide every project.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {principles.map((p) => (
            <div
              key={p.n}
              className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-7 card-hover"
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
          <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
            / Toolkit
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
            Stack &amp; <span className="italic text-accent-600">tooling</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-7 card-hover"
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
