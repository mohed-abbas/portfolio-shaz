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
import links from "@/data/social.json";
import contact from "@/data/contact.json";

const icons = { Github, Linkedin, Mail, Facebook, Instagram };

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-in-touch-title"
        className="relative w-full max-w-md rounded-3xl bg-surface border border-line/10 p-7 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-strong hover:bg-content/[0.05] flex items-center justify-center text-content-muted transition-colors"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-content-muted">
          {contact.eyebrow}
        </p>
        <h2
          id="get-in-touch-title"
          className="mt-2 text-2xl sm:text-3xl text-content leading-tight"
        >
          {contact.title.before}
          <span className="accent-em">
            {contact.title.accent}
          </span>
          {contact.title.after}
        </h2>
        <p className="mt-3 text-sm text-content-muted leading-relaxed">
          {contact.blurb}
        </p>

        <ul className="mt-6 space-y-2">
          {links.map(({ label, handle, href, icon }) => {
            const Icon = icons[icon as keyof typeof icons];
            return (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-line/10 hover:border-line/25 hover:bg-surface-strong transition-colors"
              >
                <Icon size={18} className="text-content-muted flex-shrink-0" />
                <span className="text-sm font-medium text-content">{label}</span>
                <span className="ml-auto text-xs font-mono text-content-muted truncate">
                  {handle}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-content-muted group-hover:text-accent-600 group-hover:rotate-45 transition-all flex-shrink-0"
                />
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
