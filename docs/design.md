# Design System

The visual language for Muneeb Ur Rehman's portfolio. A warm, editorial bento-grid aesthetic — cream paper, deep ink, vivid mint accent, and a serif italic flourish on display copy.

## 1. Design Principles

- **Editorial, not corporate** — Serif display + sans body evokes a magazine spread, not a SaaS landing page.
- **Bento over hero** — Information lives in modular rounded cards on a multi-column grid, not stacked sections.
- **Quiet surfaces, loud type** — Backgrounds are off-white cream; the display type and the single mint accent do the talking.
- **Tactile, paper-like** — A subtle SVG grain overlay sits over the whole page to break up flat color.
- **Motion as punctuation** — Fade-up stagger on entrance, gentle card lift on hover, marquee for tech logos. Never decorative-only.

## 2. Color

Defined in [tailwind.config.ts](../tailwind.config.ts) and [app/globals.css](../app/globals.css).

### Palette

| Token | Hex | Use |
|---|---|---|
| `cream-50` | `#FCFCF9` | Highest-light background |
| `cream-100` | `#FAFAF7` | **Body background** (default) |
| `cream-200` | `#F4F4EE` | Subtle section fill |
| `cream-300` | `#EDEDE6` | Hairline dividers, muted chips |
| `cream-400` | `#E0E0D8` | Stronger surface contrast |
| `ink-900` (DEFAULT) | `#0B0B0A` | **Primary text**, primary buttons |
| `ink-800` | `#1C1C1A` | Heavy text on cream |
| `ink-700` | `#2D2D2A` | Body emphasis |
| `ink-600` | `#4A4A45` | Body copy |
| `ink-500` | `#6B6B64` | Secondary / meta text |
| `ink-400` | `#8E8E86` | Tertiary / placeholder |
| `ink-300` | `#B5B5AD` | Disabled, hairlines |
| `accent-500` (DEFAULT) | `#00BF7D` | **Mint accent** — links, status dot, focus, selection |
| `accent-600` | `#00996A` | Hover for accent text/buttons |
| `accent-700` | `#007350` | Accent text on light tint backgrounds |
| `accent-50/100` | `#E6F9F1 / #CCF3E4` | Pill backgrounds, soft glows |

### Semantic CSS Variables

```css
--background: #FAFAF7;   /* cream-100 */
--foreground: #0B0B0A;   /* ink-900 */
--accent:     #00BF7D;   /* accent-500 */
--border:     rgba(11,11,10,0.08);
```

### Usage Rules

- **One accent**: mint (`#00BF7D`) is the only chromatic color. Never introduce a second hue.
- Card surfaces are pure `white` on a `cream-100` page — the contrast is intentional and slight.
- Borders are always `ink-900/[0.06]` to `/[0.10]` — never solid black.
- Selection highlight is mint; text on mint is white.

## 3. Typography

Three Google Fonts, loaded in [app/layout.tsx](../app/layout.tsx).

| Family | Variable | Role |
|---|---|---|
| **Manrope** (300–700) | `--font-geist-sans` | Body, UI, navigation |
| **Instrument Serif** (400, italic) | `--font-instrument-serif` | Display headings, name, quotes |
| **JetBrains Mono** (400, 500) | `--font-geist-mono` | Eyebrows, labels, code, meta |

### Display Scale

Defined as fluid `clamp()` values:

| Token | Size | Line-height | Tracking |
|---|---|---|---|
| `text-display-xl` | `clamp(3.5rem, 8vw, 7rem)` | `0.9` | `-0.04em` |
| `text-display-lg` | `clamp(2.5rem, 6vw, 5rem)` | `0.95` | `-0.035em` |
| `text-display-md` | `clamp(2rem, 4vw, 3.5rem)` | `1` | `-0.03em` |

### Typographic Patterns

- Display headings use `font-serif` with a single word in `italic text-accent-600` for emphasis (e.g. "Muhammad *Muneeb* Ur Rehman").
- Body uses `text-lg` / `text-xl` `text-ink-600` with `leading-relaxed` and `text-balance`.
- Eyebrows use `font-mono text-xs uppercase tracking-widest text-ink-500`, often paired with a `w-8 h-px bg-ink-300` rule.
- Font features `ss01` and `cv11` are enabled globally for stylistic alternates.

## 4. Layout

### Page Container

```
max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10
```

### Bento Grid (homepage)

```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5
```

- Cards span 4, 6, 8, or 12 of 12 columns and may span 2 rows.
- Hero spans `lg:col-span-8 lg:row-span-2`.
- Custom 13-column grid available (`grid-cols-13`) for fine-grain layouts.
- Stack to single column on mobile, two columns at `sm`.

### Spacing Rhythm

- Card padding: `p-6` → `p-8 sm:p-10 lg:p-12` for hero-class cards.
- Vertical rhythm inside cards: `mt-6` (small), `mt-8` (medium), `mt-10` (large block separation).
- Inline gaps: `gap-2` (tight), `gap-3` (default), `gap-x-6 gap-y-3` (meta rows).

## 5. Components

### Card (base)

[components/cards/Card.tsx](../components/cards/Card.tsx)

```
relative overflow-hidden rounded-3xl bg-white
border border-ink-900/[0.06] card-hover
```

- `rounded-3xl` (24px) is the canonical card radius.
- All cards are white-on-cream with a 6%-opacity ink border.
- `card-hover` lifts `-2px` and casts a `0 12px 40px -12px rgba(11,11,10,0.08)` shadow over `0.4s cubic-bezier(0.16, 1, 0.3, 1)`.

### Pill / Chip

```
inline-flex items-center gap-2 px-3 py-1.5 rounded-full
bg-accent-500/10 border border-accent-500/20 text-accent-700
```

Used for status badges. Pair with a pulsing accent dot (`animate-ping` over solid).

### Buttons

| Variant | Classes |
|---|---|
| Primary | `px-5 py-3 rounded-full bg-ink-900 text-cream-100 hover:bg-accent-500` |
| Secondary | `px-5 py-3 rounded-full bg-white border border-ink-900/10 hover:border-ink-900/30` |

Icons (lucide-react, typically `size={16}`) animate on hover — e.g. `ArrowUpRight` does `group-hover:rotate-45`.

### Decorative Layers

Common card decorations, layered behind content with `pointer-events-none`:

- `grid-pattern` — 32px ink grid lines at 4% opacity.
- `dotted-pattern` — 20px ink dots at 12% opacity.
- Soft accent glow: `absolute … w-96 h-96 bg-accent-500/5 rounded-full blur-3xl`.
- `accent-glow` utility: 1px mint ring + 32px mint shadow for emphasis.

## 6. Texture & Surfaces

- **Global grain**: a fixed `grain-overlay` div at `-z-10` over the entire page (`opacity: 0.04`, `mix-blend-mode: multiply`) — gives every surface a faint paper texture.
- **No gradients** except the accent radial blur. Backgrounds are flat cream or white.
- **Border weight**: `1px` only. Use opacity, not thickness, to vary emphasis.

## 7. Motion

Defined in [tailwind.config.ts](../tailwind.config.ts).

| Animation | Duration | Easing | Use |
|---|---|---|---|
| `fade-up` | `0.8s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Card entrance (24px rise) |
| `fade-in` | `0.6s` | `ease-out` | Generic reveal |
| `marquee` / `marquee-reverse` | `40s` | `linear infinite` | Tech logo rails |
| `shimmer` | `3s` | `ease-in-out infinite` | Loading / accent breathing |
| `blink` | `1.2s` | `ease-in-out infinite` | Cursor / status indicators |

### Stagger Pattern

Wrap a grid in `.stagger-children` — each child fades up with a `+0.07s` delay, capped at the 9th child.

### Hover Easing

All interactive transitions use `cubic-bezier(0.16, 1, 0.3, 1)` (the "expo-out" curve) for a soft, decisive feel. Color/border transitions use plain `ease`.

## 8. Iconography

- **Library**: [lucide-react](https://lucide.dev) — exclusively.
- Default size: `14`–`16` for inline meta, `18`–`20` for buttons.
- Stroke inherits `currentColor`; tint with `text-accent-600` for accent-state icons.

## 9. Imagery & Decoration

- No photography in cards beyond the avatar; identity is type-first.
- Tech-stack logos are rendered as monochrome SVGs in a marquee.
- Decoration is geometric: dots, grid lines, blurred radial glows. Never illustrative.

## 10. Accessibility

- Body contrast: `ink-900` on `cream-100` ≈ 18:1.
- Secondary `ink-600` on `cream-100` ≈ 8:1.
- Accent `accent-700` reserved for text on accent-tinted pills (≥ 4.5:1).
- `scroll-smooth` enabled at `<html>`; respect `prefers-reduced-motion` in any future animation work.
- Focus styles inherit the browser default; reinforce with the mint selection color and `accent-glow` utility on critical CTAs.

## 11. Voice (Visual Tone)

The system targets a feeling of:

> **An indie engineer's printed zine.** Off-white paper, sharp ink, one mint highlighter. Information is dense but uncluttered, organized in clearly bounded cards rather than long scrolls.

When extending the system, prefer:

- More cards, not more colors.
- Tighter type, not bigger type.
- Subtler texture, not louder shadows.
