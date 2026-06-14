"use client";

import { useEffect, useRef, useState } from "react";

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

const writeOrderMaps: Record<string, number[]> = {
  M: [20, 15, 10, 5, 0, 6, 12, 8, 4, 9, 14, 19, 24],
  U: [0, 5, 10, 15, 21, 22, 23, 19, 14, 9, 4],
  H: [0, 5, 10, 15, 20, 11, 12, 13, 14, 4, 9, 19, 24],
  A: [20, 15, 10, 5, 1, 2, 3, 9, 14, 19, 24, 11, 12, 13],
  D: [0, 5, 10, 15, 20, 21, 22, 18, 14, 8, 2, 1],
  N: [20, 15, 10, 5, 0, 6, 12, 18, 24, 19, 14, 9, 4],
  E: [3, 2, 1, 0, 5, 10, 11, 12, 15, 20, 21, 22, 23],
  B: [0, 5, 10, 15, 20, 21, 22, 18, 12, 11, 8, 2, 1],
};

function DotLetter({
  letter,
  letterIndex,
  rowIndex,
}: {
  letter: string;
  letterIndex: number;
  rowIndex: number;
}) {
  const writeOrder = writeOrderMaps[letter];
  const activeTiles = new Set(writeOrder);

  return (
    <span className="grid grid-cols-5 gap-0.5 sm:gap-1" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={index}
          data-write-order={
            activeTiles.has(index)
              ? rowIndex * 1000 + letterIndex * 100 + writeOrder.indexOf(index)
              : undefined
          }
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

let hasPlayed = false;

export default function OpeningScreen() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(hasPlayed);

  useEffect(() => {
    if (hasPlayed) {
      setHidden(true);
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    let alive = true;
    let ctx: { revert: () => void } | null = null;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (!alive) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      ctx = gsap.context(() => {
        if (reduceMotion) {
          gsap.set(root, { autoAlpha: 0 });
          hasPlayed = true;
          setHidden(true);
          return;
        }

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            hasPlayed = true;
            setHidden(true);
          },
        });
        const cursor = root.querySelector<HTMLElement>(".intro-cursor");
        const dots = gsap.utils
          .toArray<HTMLElement>(".intro-dot")
          .sort(
            (a, b) =>
              Number(a.dataset.writeOrder ?? 0) -
              Number(b.dataset.writeOrder ?? 0)
          );
        const cursorPoint = (dot: HTMLElement) => {
          const dotRect = dot.getBoundingClientRect();
          const rootRect = root.getBoundingClientRect();

          return {
            x: dotRect.left - rootRect.left + dotRect.width / 2,
            y: dotRect.top - rootRect.top + dotRect.height / 2,
          };
        };
        const firstPoint = dots[0] ? cursorPoint(dots[0]) : { x: 0, y: 0 };

        timeline
          .set(".intro-word", { autoAlpha: 1 })
          .set(dots, { autoAlpha: 0, scale: 0.35 })
          .set(cursor, { autoAlpha: 0, x: firstPoint.x, y: firstPoint.y })
          .to(cursor, { autoAlpha: 1, duration: 0.18 });

        dots.forEach((dot, index) => {
          const point = cursorPoint(dot);

          timeline
            .to(cursor, {
              x: point.x,
              y: point.y,
              duration: index === 0 ? 0.01 : 0.022,
              ease: "none",
            })
            .to(
              dot,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.022,
                ease: "power2.out",
              },
              "<"
            );
        });

        timeline
          .to(cursor, { autoAlpha: 0, scale: 0.75, duration: 0.18 }, "+=0.3")
          .to(root, { autoAlpha: 0, duration: 0.35, ease: "power2.inOut" }, "+=0.1");
      }, root);
    };

    run();

    return () => {
      alive = false;
      ctx?.revert();
    };
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
              <DotLetter
                key={`${letter}-${rowIndex}-${index}`}
                letter={letter}
                letterIndex={index}
                rowIndex={rowIndex}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="intro-cursor pointer-events-none absolute left-0 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
        <span className="h-3 w-3 rounded-full bg-accent-500 shadow-[0_0_24px_rgba(0,191,125,0.55)] min-[420px]:h-4 min-[420px]:w-4 sm:h-5 sm:w-5" />
        <span className="h-3.5 w-3.5 rounded-[4px] border border-ink-900/10 bg-white shadow-[0_8px_28px_rgba(11,11,10,0.16)] min-[420px]:h-5 min-[420px]:w-5 sm:h-6 sm:w-6" />
      </div>
    </div>
  );
}
