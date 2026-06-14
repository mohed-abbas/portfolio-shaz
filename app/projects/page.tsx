import type { Metadata } from "next";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectsBarrel, { type Project } from "@/components/ProjectsBarrel";
import RichText, { type Segment } from "@/components/RichText";
import profile from "@/data/profile.json";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Projects — Muhammad Shahzaib",
  description:
    "Selected work by Muhammad Shahzaib: full-stack SaaS, a travel booking platform, an AI recruitment platform, and a healthcare front-end. Every project published and in use.",
};

const projects: Project[] = projectsData.projects;
const { page } = projectsData;

export default function ProjectsPage() {
  return (
    <div>
      {/* Pinned rolling barrel — header rides inside the sticky frame so the wheel sits right below it */}
      <ProjectsBarrel
        projects={projects}
        header={
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10">
            <p className="text-xs font-mono uppercase tracking-widest text-content-muted mb-2">
              {page.eyebrowPrefix}{projects.length}{page.eyebrowSuffix}
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
        }
      />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-surface-strong text-content p-10 sm:p-14 text-center">
        <div className="absolute inset-0 dotted-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-content-muted mb-4">
            {page.cta.eyebrow}
          </p>
          <p className="text-3xl sm:text-5xl max-w-2xl mx-auto text-balance leading-tight">
            <RichText
              segments={page.cta.line as Segment[]}
              emClass="accent-em"
            />
          </p>
          <p className="mt-5 text-content-muted max-w-xl mx-auto leading-relaxed">
            {page.cta.supporting}
          </p>
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white hover:bg-accent-400 transition-colors"
          >
            {page.cta.startLabel}
            <ArrowUpRight size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-3 mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-content hover:bg-white/15 transition-colors"
          >
            <Github size={16} />
            {page.cta.githubLabel}
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
