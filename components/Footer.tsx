import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/[0.06] mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-4xl text-ink-900 leading-tight">
              Let&apos;s build something <br />
              <span className="font-serif italic text-accent-500">that stays up.</span>
            </p>
            <p className="mt-4 text-ink-500 max-w-md">
              Open to senior product-engineering roles and long-term remote
              contracts. Replies within 24 hours, in your timezone.
            </p>
            <a
              href="mailto:mmunibrehman@gmail.com?subject=Project%20inquiry"
              className="mt-6 inline-flex items-center gap-2 text-ink-900 font-medium border-b-2 border-ink-900 pb-1 hover:gap-3 transition-all"
            >
              mmunibrehman@gmail.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs uppercase tracking-widest text-ink-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/about", label: "About" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-700 hover:text-accent-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-ink-500 mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/MMuneeb17"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-700 hover:text-accent-500 transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/muneeb17"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-700 hover:text-accent-500 transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:mmunibrehman@gmail.com"
                  className="inline-flex items-center gap-2 text-ink-700 hover:text-accent-500 transition-colors"
                >
                  <Mail size={14} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-900/[0.06] text-sm text-ink-500">
          <p>© {new Date().getFullYear()} Muhammad Muneeb Ur Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
