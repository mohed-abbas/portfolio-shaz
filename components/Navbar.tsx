"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import links from "@/data/navigation.json";
import profile from "@/data/profile.json";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream-100/70 border-b border-ink-900/[0.06]">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-block w-9 h-9">
            <Image
              src={profile.photo}
              alt="Muneeb Ur Rehman"
              width={72}
              height={72}
              priority
              className="w-9 h-9 rounded-full object-cover ring-1 ring-ink-900/10"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-500 ring-2 ring-cream-100 animate-shimmer" />
          </span>
          <span className="font-medium text-ink-900 tracking-tight">
            {profile.shortName}<span className="text-accent-500">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                    active
                      ? "text-ink-900"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-ink-900/[0.05]" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink-900 text-cream-100 hover:bg-ink-700 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-ink-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink-900/[0.06] bg-cream-100">
          <ul className="px-5 py-4 space-y-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm ${
                      active
                        ? "bg-ink-900/[0.05] text-ink-900"
                        : "text-ink-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="block mt-2 px-4 py-3 rounded-xl bg-ink-900 text-cream-100 text-sm text-center"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
