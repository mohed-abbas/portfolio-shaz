"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// Reads the theme already applied by the no-flash script in app/layout.tsx,
// then lets the user flip it and persists the choice. "system" is implicit:
// with nothing stored, the OS preference decides on each load.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-line/10 text-content-muted hover:text-content hover:bg-content/[0.05] transition-colors"
    >
      {/* Render nothing icon-specific until mounted to avoid a hydration mismatch */}
      {mounted &&
        (dark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />)}
    </button>
  );
}
