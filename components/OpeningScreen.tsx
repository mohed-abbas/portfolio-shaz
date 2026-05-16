"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const logoRows = [
  ["M", "U", "H", "A", "M", "M", "A", "D"],
  ["M", "U", "N", "E", "E", "B"],
];

const tileMaps: Record<string, number[]> = {
  M: [0, 4, 5, 6, 8, 9, 10, 12, 14, 15, 19, 20, 24],
  U: [0, 4, 5, 9, 10, 14, 15, 19, 21, 22, 23],
  H: [0, 4, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24],
  A: [1, 2, 3, 5, 9, 10, 11, 12, 13, 14, 15, 19, 20, 24],
  D: [0, 1, 2, 5, 8, 10, 14, 15, 18, 20, 21, 22],
  N: [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24],
  E: [0, 1, 2, 3, 5, 10, 11, 12, 15, 20, 21, 22, 23],
  B: [0, 1, 2, 5, 8, 10, 11, 12, 15, 18, 20, 21, 22],
};

function DotLetter({ letter }: { letter: string }) {
  const activeTiles = new Set(tileMaps[letter]);

  return (
    <span className="grid grid-cols-5 gap-0.5 sm:gap-1" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={index}
          className={`intro-tile h-1 w-1 rounded-[2px] min-[420px]:h-2 min-[420px]:w-2 sm:h-3 sm:w-3 sm:rounded-[3px] ${
            activeTiles.has(index)
              ? "intro-dot bg-ink-900 shadow-[0_0_18px_rgba(0,191,125,0.28)]"
              : "bg-transparent"
          }`}
        />
      ))}
    </span>
  );
}

export default function OpeningScreen() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(root, { autoAlpha: 0 });
        setHidden(true);
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setHidden(true),
      });

      timeline
        .set(".intro-word", { autoAlpha: 0, scale: 0.92 })
        .set(".intro-dot", { autoAlpha: 0, y: 10, scale: 0.55 })
        .to(".intro-word", { autoAlpha: 1, scale: 1, duration: 0.28 })
        .to(".intro-dot", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.36,
          stagger: { each: 0.011, from: "start" },
        })
        .to(root, { autoAlpha: 0, duration: 0.85, ease: "power2.inOut" }, "+=0.9");
    }, root);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-cream-100"
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-pattern opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,125,0.12),transparent_34%)]" />
      <div className="absolute inset-0 grain-overlay" />

      <div className="intro-word absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 sm:gap-3">
        {logoRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center justify-center gap-1 min-[420px]:gap-2 sm:gap-4"
          >
            {row.map((letter, index) => (
              <DotLetter key={`${letter}-${rowIndex}-${index}`} letter={letter} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
