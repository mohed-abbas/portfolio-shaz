import { ArrowUpRight, Code, Database, Cloud, Brain, Building2, Download } from "lucide-react";
import Image from "next/image";

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
    body: "One engineer, full accountability — schema, APIs, UI, deployment, and CI/CD. No baton drops between roles.",
  },
  {
    n: "02",
    title: "Production-first thinking",
    body: "Decisions optimized for the day after launch: easy to deploy, easy to debug, dependable when traffic is real.",
  },
  {
    n: "03",
    title: "Async-first communication",
    body: "Clear writeups, predictable updates, and clean handoffs. Built for distributed teams and long-term contracts.",
  },
  {
    n: "04",
    title: "Five years of shipping",
    body: "Enterprise systems, SaaS products, AI integrations, and client work — all delivered to live, paying users.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-16 flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-10">
        <div className="flex-1 min-w-0 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-4">
            / About
          </p>
          <h1 className="text-display-md text-ink-900 text-balance">
            A product engineer who{" "}
            <span className="font-serif italic text-accent-600">finishes the job</span>.
          </h1>
          <p className="mt-5 text-lg text-ink-500 max-w-2xl">
            Five years building the messy middle between an idea and a system real
            people rely on — and the receipts to prove it.
          </p>
        </div>
        <div className="relative flex-shrink-0 self-start sm:self-center">
          <div className="absolute -inset-3 bg-accent-500/10 rounded-full blur-2xl" aria-hidden />
          <Image
            src="/muneeb-photo.jpg"
            alt="Muneeb Ur Rehman"
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
              I&apos;m{" "}
              <span className="font-serif italic text-accent-600">Muneeb</span> —
              a product engineer who turns scoped ideas into running software.
            </p>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                For the last five years I&apos;ve been the engineer who takes
                a project from empty repo to live, monitored production:
                relational schemas, REST APIs, modern frontends, cloud
                deployment, and the CI/CD that keeps it shipping. I&apos;m
                fluent across the stack, but my best work happens in the
                messy middle — where requirements, edge cases, and real
                traffic finally meet.
              </p>
              <p>
                Right now I&apos;m building{" "}
                <span className="text-ink-900 font-medium">FCCMS</span> at{" "}
                Fauji Cement — a complete housing-society platform shipped
                solo — alongside freelance engagements integrating LLMs
                into production client applications.
              </p>
              <p>
                Independently, I deliver work across Laravel, Next.js, Django,
                and AI stacks like{" "}
                <span className="text-ink-900 font-medium">OpenAI</span>,{" "}
                <span className="text-ink-900 font-medium">Claude</span>, and{" "}
                <span className="text-ink-900 font-medium">Gemini</span> — for
                clients who need a single accountable engineer, not a relay
                team.
              </p>
              <p>
                Open to senior product-engineering roles and long-term
                remote contracts. Async-first, written-first, and allergic
                to dropped handoffs.
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
                  <span>Pakistan</span>
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
                  <span>Product Engineer</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-cream-100/60">Comm style</span>
                  <span>Async-first</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="mailto:mmunibrehman@gmail.com?subject=Project%20inquiry"
            className="group block relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#004D35_0%,#00BF7D_100%)] text-white p-8 card-hover"
          >
            <div className="absolute inset-0 dotted-pattern opacity-20" />
            <div className="relative flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-2">
                  Available now · Replies within 24h
                </p>
                <p className="text-2xl leading-tight">
                  Tell me what you&apos;re building.
                </p>
              </div>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-accent-600 group-hover:rotate-45 transition-transform flex-shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>

          <a
            href="/Muhammad_Muneeb_Resume.docx"
            download
            className="group flex items-center justify-between gap-4 rounded-3xl bg-white border border-ink-900/[0.06] p-6 card-hover"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-1">
                Prefer the one-pager?
              </p>
              <p className="text-base text-ink-900 font-medium">
                Download my resume
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
          <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-2">
            / How I work
          </p>
          <h2 className="text-3xl sm:text-4xl text-ink-900">
            Four{" "}
            <span className="font-serif italic text-accent-600">commitments</span>{" "}
            you can hold me to.
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
          <h2 className="text-3xl sm:text-4xl text-ink-900">
            The stack I{" "}
            <span className="font-serif italic text-accent-600">reach for</span>{" "}
            in production.
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
