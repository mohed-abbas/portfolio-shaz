# Muhammad Shahzaib — Portfolio

A premium, light-themed Next.js portfolio for Muhammad Shahzaib, Full-Stack Developer. Inspired by [voxio.fr](https://voxio.fr) with a custom bento-grid layout and the signature accent color **#00BF7D**.

## ✨ Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom palette + animations)
- **Ubuntu** (sans + mono) and **Handlee** via `next/font/google`
- **Lucide React** icons
- **GSAP** — opening-screen intro animation (loaded dynamically, code-split out of the initial bundle)

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
shahzaib-portfolio/
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
│       ├── Card.tsx       # Shared tile primitive (exports `cardClass`)
│       ├── HeroCard.tsx
│       ├── AvatarCard.tsx
│       ├── TechStackCard.tsx
│       ├── GithubCard.tsx
│       ├── FeaturedCard.tsx
│       ├── AICard.tsx
│       ├── DevOpsCard.tsx
│       └── QuoteCard.tsx
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

- **Display** — Handlee (handwritten accent for emphasis)
- **Body** — Ubuntu
- **Mono** — Ubuntu Mono (for labels, captions, code)

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

- Site content lives in `data/*.json` (`profile`, `home`, `about`, `experience`, `projects`, `contact`, `social`, `navigation`); components read from there
- Brand color is set via Tailwind's `accent-500` token in `tailwind.config.ts`
- Fonts are imported via `next/font/google` in `app/layout.tsx`

## 📬 Contact

**Muhammad Shahzaib** — Full-Stack Developer, Paris, France
Contact details are configured in `data/profile.json` and `data/social.json`.
