# Muneeb Ur Rehman — Portfolio

A premium, light-themed Next.js portfolio for Muhammad Muneeb Ur Rehman, Full-Stack & DevOps Engineer. Inspired by [voxio.fr](https://voxio.fr) with a custom bento-grid layout and the signature accent color **#00BF7D**.

## ✨ Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom palette + animations)
- **Geist** (sans + mono) and **Instrument Serif** via `next/font/google`
- **Lucide React** icons
- **Framer Motion** (available, currently using CSS animations for performance)

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the app
# → http://localhost:3000
```

### Available Scripts

| Script           | What it does                       |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start dev server with hot reload   |
| `npm run build`  | Production build                   |
| `npm run start`  | Run the production build           |
| `npm run lint`   | Run ESLint                         |

## 📂 Project structure

```
muneeb-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home — bento grid
│   ├── globals.css       # Global styles + custom utilities
│   ├── projects/page.tsx # Projects listing
│   ├── experience/page.tsx
│   └── about/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── cards/            # Bento grid card components
│       ├── HeroCard.tsx
│       ├── AvatarCard.tsx
│       ├── TechStackCard.tsx
│       ├── GithubCard.tsx
│       ├── FeaturedCard.tsx
│       ├── AICard.tsx
│       ├── DevOpsCard.tsx
│       ├── QuoteCard.tsx
│       └── ContactCard.tsx
├── tailwind.config.ts    # Custom palette + animations
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## 🎨 Design system

### Color palette

| Role          | Token         | Hex       |
| ------------- | ------------- | --------- |
| Background    | `cream-100`   | `#FAFAF7` |
| Surface       | `white`       | `#FFFFFF` |
| Foreground    | `ink-900`     | `#0B0B0A` |
| Muted text    | `ink-500`     | `#6B6B64` |
| **Accent**    | `accent-500`  | `#00BF7D` |
| Accent dark   | `accent-600`  | `#00996A` |

### Typography

- **Display** — Instrument Serif (italic for emphasis)
- **Body** — Geist Sans
- **Mono** — Geist Mono (for labels, captions, code)

### Animations

- `marquee` / `marquee-reverse` — tech stack carousel
- `fade-up` (via `.stagger-children`) — page-load reveals
- `shimmer` / `blink` — status indicators

## 📄 Pages

- **/** — Bento grid landing (hero, terminal card, tech stack, GitHub, featured project, AI, DevOps, quote, contact)
- **/projects** — Project showcase with gradient cards
- **/experience** — Career timeline + education
- **/about** — Bio, principles, full skills toolkit

## 🛠️ Customization

- Personal info lives in `components/cards/*.tsx`, `app/projects/page.tsx`, and `app/experience/page.tsx`
- Brand color is set via Tailwind's `accent-500` token in `tailwind.config.ts`
- Fonts are imported via `next/font/google` in `app/layout.tsx`

## 📬 Contact

**Muhammad Muneeb Ur Rehman**
mmunibrehman@gmail.com · [LinkedIn](https://linkedin.com/in/muneeb17) · [GitHub](https://github.com/MMuneeb17)
