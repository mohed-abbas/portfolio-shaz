"use client";

import { useEffect, useMemo, useState } from "react";

// Pen-trace intro: a single cursor walks a coordinate grid one cell at a time,
// drawing connected strokes that spell SHAZ! — then a dark curtain lifts to
// reveal the site.

const COLS = 40;
const ROWS = 20;
const CELL = 20; // px
const STEP_MS = 26; // time per traced cell
const HOLD_MS = 750; // pause on the finished word before the curtain lifts
const REVEAL_MS = 750; // curtain slide-up duration

const PEN_START = { x: 12, y: 12 };
const EXCLAIM_DOT = { x: 28, y: 12 }; // the "!" dot — mint, blinks at the end

type Step = { x: number; y: number; draw: boolean };

// Glyph band rows: T = top, M = middle (crossbars), B = baseline.
const T = 8;
const M = 10;
const B = 12;

// Build the ordered trace. `line` walks a straight segment one cell per step
// (diagonals via unit increments + rounding); `moveTo` is a pen-up glide.
function buildPath(): Step[] {
  const steps: Step[] = [];
  let p = { ...PEN_START };

  const line = (dx: number, dy: number, draw: boolean) => {
    const count = Math.max(Math.abs(dx), Math.abs(dy));
    if (count === 0) return;
    const ux = dx / count;
    const uy = dy / count;
    for (let i = 0; i < count; i++) {
      p = { x: p.x + ux, y: p.y + uy };
      steps.push({ x: Math.round(p.x), y: Math.round(p.y), draw });
    }
    // Snap to integer to prevent float drift from turning later
    // zero-distance moves into stray steps.
    p = { x: Math.round(p.x), y: Math.round(p.y) };
  };
  const moveTo = (x: number, y: number) => line(x - p.x, y - p.y, false);
  // Inclusive drawn segment: pen-up to the start cell, mark it, then draw to the end.
  const seg = (x1: number, y1: number, x2: number, y2: number) => {
    moveTo(x1, y1);
    steps.push({ x: x1, y: y1, draw: true });
    line(x2 - x1, y2 - y1, true);
  };

  // S @12
  seg(14, T, 12, T); seg(12, T, 12, M); seg(12, M, 14, M); seg(14, M, 14, B); seg(14, B, 12, B);
  // H @16
  seg(16, T, 16, B); seg(18, T, 18, B); seg(16, M, 18, M);
  // A @20
  seg(20, B, 20, T); seg(20, T, 22, T); seg(22, T, 22, B); seg(20, M, 22, M);
  // Z @24
  seg(24, T, 26, T); seg(26, T, 24, B); seg(24, B, 26, B);
  // ! @28 — the upright bar (the dot blinks in at the end)
  seg(28, T, 28, M);

  return steps;
}

// Module-level: resets on a full page load (so the intro replays on every
// refresh) but persists across in-app navigation back to the home page.
let hasPlayed = false;

export default function IntroScreen() {
  const steps = useMemo(buildPath, []);

  const [idx, setIdx] = useState(0);
  const [cursor, setCursor] = useState(PEN_START);
  const [drawn, setDrawn] = useState<Set<string>>(() => new Set());
  const [finished, setFinished] = useState(false);
  const [scale, setScale] = useState(1);
  const [skip, setSkip] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const [gone, setGone] = useState(() => hasPlayed);

  // Decide on mount: already played this page-load, or reduced motion → skip.
  useEffect(() => {
    if (hasPlayed) {
      setGone(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hasPlayed = true;
      setSkip(true);
      setRevealing(true);
    }
  }, []);

  // Step the pen one cell every STEP_MS.
  useEffect(() => {
    if (skip || finished) return;
    if (idx >= steps.length) {
      setFinished(true);
      return;
    }
    const t = setTimeout(() => {
      const f = steps[idx];
      setCursor({ x: f.x, y: f.y });
      if (f.draw) {
        setDrawn((prev) => {
          const next = new Set(prev);
          next.add(`${f.x},${f.y}`);
          return next;
        });
      }
      setIdx((i) => i + 1);
    }, STEP_MS);
    return () => clearTimeout(t);
  }, [idx, steps, skip, finished]);

  // Hold on the finished word, then lift the curtain.
  useEffect(() => {
    if (!finished) return;
    hasPlayed = true;
    const t = setTimeout(() => setRevealing(true), HOLD_MS);
    return () => clearTimeout(t);
  }, [finished]);

  // Unmount once the curtain has slid away.
  useEffect(() => {
    if (!revealing) return;
    const t = setTimeout(() => setGone(true), REVEAL_MS);
    return () => clearTimeout(t);
  }, [revealing]);

  // Scale the grid down on viewports narrower than its natural width.
  useEffect(() => {
    const onResize = () => {
      const gridWidth = COLS * CELL;
      const available = window.innerWidth - 32;
      setScale(available < gridWidth ? available / gridWidth : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (gone) return null;

  const current = steps[idx];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black ${
        revealing ? "pointer-events-none" : ""
      }`}
      style={{
        transform: revealing ? "translateY(-100%)" : "translateY(0)",
        transition: `transform ${REVEAL_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
        willChange: "transform",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="relative z-10 transition-transform duration-200"
        style={{
          width: COLS * CELL,
          height: ROWS * CELL,
          transform: `scale(${scale})`,
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${CELL}px)`,
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const x = i % COLS;
          const y = Math.floor(i / COLS);
          const isCursor = cursor.x === x && cursor.y === y;
          const isCommitting =
            current && current.draw && current.x === x && current.y === y;
          const isDrawn = drawn.has(`${x},${y}`);
          const isExclaimDot =
            finished && x === EXCLAIM_DOT.x && y === EXCLAIM_DOT.y;

          let content = null;
          if (isExclaimDot) {
            content = (
              <span className="h-full w-full rounded-full bg-accent-500 animate-blink-hard shadow-[0_0_12px_rgba(0,191,125,0.85)]" />
            );
          } else if (isCursor && !skip) {
            content = (
              <span className="h-full w-full rounded-sm bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]" />
            );
          } else if (isCommitting) {
            content = (
              <span className="h-full w-full scale-50 rounded-full bg-accent-500 animate-bounce shadow-[0_0_10px_rgba(0,191,125,0.7)]" />
            );
          } else if (isDrawn) {
            content = (
              <span className="h-full w-full scale-90 rounded-sm bg-white/80 transition-all duration-500" />
            );
          }

          return (
            <div key={i} className="flex items-center justify-center">
              {content}
            </div>
          );
        })}
      </div>

      <span className="sr-only">Muhammad Shahzaib</span>
    </div>
  );
}
