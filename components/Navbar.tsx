"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import links from "@/data/navigation.json";
import profile from "@/data/profile.json";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-base/70 border-b border-line/10">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-block w-9 h-9">
            <Image
              src={profile.photo}
              alt={profile.fullName}
              width={72}
              height={72}
              priority
              className="w-9 h-9 rounded-full object-cover ring-1 ring-line/15"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-500 ring-2 ring-base animate-shimmer" />
          </span>
          <span className="font-medium text-content tracking-tight">
            Shaz<span className="text-accent-500">.</span>
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
                      ? "text-content"
                      : "text-content-muted hover:text-content"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-content/[0.05]" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium px-4 py-2 rounded-full bg-inverse text-on-inverse hover:bg-inverse/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 -mr-2 text-content"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line/10 bg-surface">
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
                        ? "bg-content/[0.05] text-content"
                        : "text-content-muted"
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
                className="block mt-2 px-4 py-3 rounded-xl bg-inverse text-on-inverse text-sm text-center"
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
