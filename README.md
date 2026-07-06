<div align="center">

<img src="public/leaf.png" alt="Botany Bytes Logo" width="120" height="120" style="border-radius: 50%;" />

# 🌿 Botany Bytes

### *Explore the living world of plant science.*

[![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![YouTube](https://img.shields.io/badge/YouTube-@BotanyBytes--07-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@botanybytes-07)

---

*A beautifully crafted landing page for the **Botany Bytes** YouTube channel — a warm botanical library for students, nature lovers, and plant enthusiasts.*

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Hero Landing Page** | Animated hero with botanical imagery, live subscriber badge, and CTA buttons |
| 🎬 **Live Video Gallery** | Fetches real videos from the YouTube RSS feed with filter tabs (All / Videos / Shorts) |
| 📬 **Newsletter Signup** | Name + email form connected to Formspree with a live subscriber counter |
| 🌱 **Live Subscriber Count** | Real-time badge that animates up every time someone signs up |
| 📚 **Content Showcase** | NEET Botany, Medicinal Plants, Household Plants, and Plant Shorts categories |
| 🎨 **Botanical Design** | Sage green palette, Playfair Display serif, Framer Motion animations throughout |
| 📱 **Fully Responsive** | Beautiful on mobile, tablet, and desktop |

---

## 🖼️ Preview

<div align="center">

```
╔══════════════════════════════════════════════════════╗
║                                                      ║
║    🌿  Botany Bytes                    [Subscribe]   ║
║                                                      ║
║    Explore the                    ┌──────────────┐   ║
║    living world          📚       │              │   ║
║    of plant science.              │  🌿 Hero Img │   ║
║                                   │              │   ║
║    [Start Learning →]             └──────────────┘   ║
║    [Join Community  ]                                ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

</div>

---

## 🛠️ Tech Stack

```
Frontend
├── ⚛️  React 18          — UI framework
├── ⚡  Vite 7            — Lightning-fast dev server & bundler
├── 🔷  TypeScript 5.9    — Type-safe JavaScript
├── 🎨  Tailwind CSS 4    — Utility-first styling
├── 🎭  Framer Motion     — Smooth animations
├── 🧩  shadcn/ui         — Accessible component library
├── 🔗  Wouter            — Lightweight client-side routing
└── 🌐  YouTube RSS API   — Live video feed (no API key needed)

Forms
└── 📬  Formspree         — Email notifications on every signup
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/anupamshahi007-dot/botany-bytes-website.git
cd botany-bytes-website

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to see the site.

### Build for Production

```bash
pnpm build
```

Output goes to `dist/` — ready to deploy on Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
botany-bytes/
├── public/
│   ├── hero.png          # Botanical library hero image
│   ├── leaf.png          # Leaf illustration
│   └── tulsi.png         # Tulsi plant illustration
│
├── src/
│   ├── pages/
│   │   ├── home.tsx      # Landing page (hero, about, categories, videos, newsletter, footer)
│   │   ├── videos.tsx    # Live video gallery from YouTube RSS
│   │   └── not-found.tsx # 404 page
│   │
│   ├── components/ui/    # shadcn/ui component library
│   ├── hooks/            # Custom React hooks
│   ├── lib/utils.ts      # Utility functions
│   ├── index.css         # Global styles & botanical theme tokens
│   └── App.tsx           # Router setup
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Design System

The site uses a warm **botanical palette** designed to feel like a cozy plant library:

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#3d6b4f` (Sage Green) | Headings, buttons, icons |
| `--secondary` | `#8fae96` (Muted Sage) | Accents, badges |
| `--background` | `#f5f0e8` (Warm Cream) | Page background |
| `--foreground` | `#1a2e1a` (Deep Forest) | Body text |
| `--card` | `#fff` (White) | Card surfaces |

**Fonts:** `Playfair Display` (serif headings) + `Inter` (sans body)

---

## 📬 Newsletter Setup

The signup form is powered by [Formspree](https://formspree.io). To use your own:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint
3. Replace the endpoint in `src/pages/home.tsx`:

```ts
// Find this line and update the URL:
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... });
```

---

## 🌐 Live Channel

<div align="center">

| Platform | Link |
|---|---|
| 📺 YouTube | [@BotanyBytes-07](https://youtube.com/@botanybytes-07) |
| 💬 Telegram | [t.me/botanybytes001](https://t.me/botanybytes001) |

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with 🌿 and a love for plant science.

*"Nurture your curiosity."*

**[⭐ Star this repo](https://github.com/anupamshahi007-dot/botany-bytes-website)** if you found it helpful!

</div>
