# Mujtaba Jafri — PM Portfolio

A single-page product management portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans + Geist Mono
- **Animation:** Motion (Framer Motion)
- **Icons:** Phosphor Icons

## Sections

- **Hero** — name, philosophy, CTAs, contact links
- **Projects** — 3 selected projects with alternating card layouts
- **Project Modals** — full case studies on click
- **Skills** — capability matrix (Product / Technical / AI)
- **Contact + Footer** — email, LinkedIn, GitHub

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Project Structure

```
app/
├── sections/      # Page sections
├── components/    # Reusable components
├── lib/data.ts    # Content
├── types/index.ts # TypeScript types
├── globals.css    # Tailwind + design tokens
├── layout.tsx     # Root layout + fonts
└── page.tsx       # Main page
public/images/     # Project screenshots
```

## Notes

- Resume PDF is pending; the source is at `product_resume_V_4.tex`.
- All project links and live demos are configured in `app/lib/data.ts`.
