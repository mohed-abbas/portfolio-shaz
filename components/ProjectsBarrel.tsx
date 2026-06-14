"use client";

import { ArrowUpRight } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  status: string;
  gradient: string;
};

const STEP_DEG = 60;   // angular distance between adjacent faces (3 visible at once)
const STEP_PX = 220;   // scroll distance to advance one project (~ one wheel notch)
const RADIUS = 280;    // wheel radius in px

export default function ProjectsBarrel({
  projects,
  header,
  footer,
}: {
  projects: Project[];
  header?: ReactNode;
  footer?: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const ratio = scrollable > 0 ? scrolled / scrollable : 0;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = projects.length;
  const wheelAngle = progress * (n - 1) * STEP_DEG;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(${(n - 1) * STEP_PX}px + 100vh)` }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col overflow-hidden"
        style={{ perspective: "1600px" }}
      >
        {header && <div className="flex-shrink-0">{header}</div>}

        <div className="relative flex-1 flex items-center justify-center">
          {/* Position indicator */}
          <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-10">
            {projects.map((_, i) => {
              const active = Math.round(progress * (n - 1)) === i;
              return (
                <span
                  key={i}
                  className={`block w-1 rounded-full transition-all ${
                    active ? "h-8 bg-accent-500" : "h-3 bg-ink-300"
                  }`}
                />
              );
            })}
          </div>

          {/* Wheel */}
          <div
            className="relative w-full max-w-[1000px] mx-auto px-5 h-[250px]"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${wheelAngle}deg)`,
            }}
          >
          {projects.map((p, i) => {
            const facing = wheelAngle - i * STEP_DEG;
            const dist = Math.abs(facing);
            if (dist >= 90) return null;
            const opacity = 1 - dist / 110;
            return (
              <div
                key={p.name}
                className="absolute inset-0 px-4"
                style={{
                  transform: `rotateX(${-i * STEP_DEG}deg) translateZ(${RADIUS}px)`,
                  backfaceVisibility: "hidden",
                  opacity,
                }}
              >
                <ProjectCard project={p} index={i} total={n} />
              </div>
            );
          })}
          </div>
        </div>

        {footer && <div className="flex-shrink-0">{footer}</div>}
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index: i,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] h-full shadow-[0_24px_50px_-28px_rgba(11,11,10,0.25)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
        <div
          className={`relative lg:col-span-4 bg-gradient-to-br ${p.gradient} text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden`}
        >
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <p className="mt-1 text-2xl sm:text-3xl leading-tight">{p.name}</p>
          </div>

          <div className="relative flex items-center justify-between mt-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[10px]">
              <span className="w-1 h-1 rounded-full bg-white animate-shimmer" />
              {p.status}
            </span>
            <span className="font-mono text-[10px] text-white/80">{p.year}</span>
          </div>
        </div>

        <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
                  {p.role}
                </p>
                <h2 className="mt-0.5 text-lg sm:text-xl text-ink-900 text-balance leading-snug">
                  {p.subtitle}
                </h2>
              </div>
              <span className="hidden sm:inline-flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-ink-900 text-cream-100 group-hover:bg-accent-500 group-hover:rotate-45 transition-all">
                <ArrowUpRight size={13} />
              </span>
            </div>
            <p className="mt-2 text-[13px] text-ink-600 leading-relaxed text-balance line-clamp-2">
              {p.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-cream-200 text-[10px] font-mono text-ink-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
