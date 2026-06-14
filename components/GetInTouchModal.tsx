"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    label: "GitHub",
    handle: "@MMuneeb17",
    href: "https://github.com/MMuneeb17",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "in/muneeb17",
    href: "https://linkedin.com/in/muneeb17",
    icon: Linkedin,
  },
  {
    label: "Email",
    handle: "mmunibrehman@gmail.com",
    href: "mailto:mmunibrehman@gmail.com",
    icon: Mail,
  },
  {
    label: "Facebook",
    handle: "M.Munib.ur.Rehman",
    href: "https://www.facebook.com/M.Munib.ur.Rehman/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    handle: "@i_muneeb__",
    href: "https://www.instagram.com/i_muneeb__/",
    icon: Instagram,
  },
];

export default function GetInTouchModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("getInTouchSeen")) return;

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setOpen(true);
        sessionStorage.setItem("getInTouchSeen", "1");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/40 backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-in-touch-title"
        className="relative w-full max-w-md rounded-3xl bg-white border border-ink-900/[0.06] p-7 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-200 hover:bg-cream-300 flex items-center justify-center text-ink-700 transition-colors"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Currently available · Replies within 24h
        </p>
        <h2
          id="get-in-touch-title"
          className="mt-2 text-2xl sm:text-3xl text-ink-900 leading-tight"
        >
          Got a project? Let&apos;s{" "}
          <span className="font-serif italic text-accent-600">talk</span>.
        </h2>
        <p className="mt-3 text-sm text-ink-500 leading-relaxed">
          Email is fastest — share what you&apos;re building and the rough
          timeline. I&apos;ll come back with a plan.
        </p>

        <ul className="mt-6 space-y-2">
          {links.map(({ label, handle, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-ink-900/[0.08] hover:border-ink-900/30 hover:bg-cream-100 transition-colors"
              >
                <Icon size={18} className="text-ink-700 flex-shrink-0" />
                <span className="text-sm font-medium text-ink-900">{label}</span>
                <span className="ml-auto text-xs font-mono text-ink-500 truncate">
                  {handle}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-500 group-hover:text-accent-600 group-hover:rotate-45 transition-all flex-shrink-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
