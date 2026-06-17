# PM Portfolio Website — Project Plan

## The Brief

**Owner:** Mujtaba Jafri
**Purpose:** PM portfolio site for recruiters and hiring managers
**Hosting:** Vercel (free tier)
**Status:** Planning complete, ready to build

---

## Design Direction: "PM Who Ships"

### Why This Is Non-AI

Most AI-generated PM portfolios: light theme, centered hero, 3 equal cards, Inter font, blue/purple accent, eyebrow labels everywhere. This breaks every one.

| Decision | Choice | Anti-AI Reasoning |
|----------|--------|-------------------|
| Background | Deep black `#0a0a0a` | AI defaults to light or pure black. Deep black with warmth is different. |
| Accent | Warm amber/gold `#f59e0b` | AI almost never picks amber. Defaults to blue/purple/emerald. Amber = confident, not safe. |
| Font | Geist Sans + Geist Mono | Mono for metrics/data signals "I think in systems." |
| Layout | Asymmetric, left-aligned hero | No centered-hero-over-dark-mesh. Each section different. |
| Projects | Modal overlays, full case study | Click card → overlay with problem/process/results. |
| Motion | Scroll-reveal, no decoration | Purposeful only. No floating particles, no infinite loops. |
| Imagery | Real project screenshots | Live demo, wireframes, dashboard. No CSS panels. |
| Sections | Hero → Projects → Skills → Contact | No About. No eyebrow labels. No identical grids. |

### Design Dials

- `DESIGN_VARIANCE: 7` — asymmetric but not chaotic
- `MOTION_INTENSITY: 5` — purposeful, not decorative
- `VISUAL_DENSITY: 4` — breathing room, not packed

---

## Site Structure

```
Single-page scroll with modal overlays
│
├── Hero Section
│   ├── Name: Mujtaba Jafri
│   ├── Philosophy paragraph (user-provided)
│   └── CTA: "View My Work" (scrolls to projects)
│
├── Projects Section
│   ├── Project 1: AI PRD Generator (Build)
│   │   └── Click → Modal with full case study
│   ├── Project 2: Rapido Teardown (Analyze)
│   │   └── Click → Modal with full case study
│   └── Project 3: Olist SQL Analytics (Data)
│       └── Click → Modal with full case study
│
├── Skills Section
│   └── Capability matrix (Product / Technical / AI)
│
└── Contact CTA + Footer
    ├── "Let's Connect" CTA
    ├── Resume Download button (PDF)
    └── Email + LinkedIn + GitHub links
```

---

## Project Order

1. **AI PRD Generator** — "I build" (live app, Next.js, TypeScript)
2. **Rapido Teardown** — "I analyze" (product teardown, ICE scoring, wireframes)
3. **Olist SQL Analytics** — "I work with data" (RFM segmentation, Streamlit dashboard)

---

## Content Plan

### Hero
- **Name:** Mujtaba Jafri
- **Philosophy:** Extracted from `Design-Philosophy.md`
- **CTA:** "View My Work" → scrolls to projects

### Projects (Full Case Study Format)
Each modal contains:
1. **Role** — "I drove" vs "I contributed" (ownership clarity)
2. **Problem** — What was the challenge?
3. **Approach** — How did you think about it?
4. **Process** — What did you actually do?
5. **Results** — What happened? (metrics, outcomes)
6. **Trade-offs** — What you chose NOT to build / deprioritized
7. **Key Learning** — What you'd do differently
8. **Screenshots** — Real images of the work

Content: Extracted from existing READMEs, PRDs, and project docs in `Assets/`

---

### Project Content Details

#### 1. AI PRD Generator
- **Role:** Solo product & engineering (end-to-end)
- **Trade-off:** No database (kept stateless), chose JSON over markdown for validation, switched from Gemini to DeepSeek for reliability
- **Key Learning:** Prompt quality >> model choice. The strict JSON schema + retry logic mattered more than the LLM itself. Next time I'd invest more in input validation earlier.

#### 2. Rapido Teardown (Ownly)
- **Role:** Solo product teardown & analysis
- **Trade-off:** Deprioritized geofence-based discovery (too high-risk for V1) and full app redesign — focused on SSO as highest-leverage fix per ICE scoring (ICE: 8.0/10)
- **Key Learning:** One well-executed fix beats ten half-baked ideas. The ICE matrix forced clarity on what actually moves the needle vs what's just noisy.

#### 3. Olist SQL Analytics
- **Role:** Solo data analysis & dashboard
- **Trade-off:** Scoped out real-time data (used static SQLite), exhaustive querying (focused on 10 highest-impact questions), and custom backend (chose Streamlit for speed)
- **Key Learning:** Late delivery isn't a logistics metric — it's a retention metric. The 1.72 star penalty showed me that operational data often hides product insight.

### Skills (Capability Matrix)
Three groups displayed as a visual matrix/tree:
- **Product:** Strategy, PRD Writing, User Stories, Wireframing, Funnel & Retention Analysis, ICE Prioritization, A/B Testing, KPI Tracking, Product Analytics (AARRR)
- **Technical:** SQL, Python, TypeScript, Next.js, APIs, Full-Stack Prototyping, Data Analysis
- **AI:** LLMs, Agentic Workflow, AI-Assisted Prototyping, RAG Fundamentals

### Contact
- Email: jafri.h@ahduni.edu.in
- LinkedIn: linkedin.com/in/mujtaba30/
- GitHub: github.com/MujtabaJ30

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js (App Router) | Already familiar from PRD project, Vercel-native |
| Language | TypeScript | Type safety, professional standard |
| Styling | Tailwind v4 | CSS-first config, `@theme` tokens, `dark:` variant |
| Font | Geist Sans + Geist Mono | Via `next/font`, self-hosted |
| Animation | Motion (Framer Motion) | `whileInView` for scroll-reveal, spring physics |
| Icons | Phosphor Icons | Clean, consistent, not the typical Lucide |
| Hosting | Vercel | Free tier, already have account from PRD project |

---

## Design System Tokens

### Colors (OKLCH)
```
Background:    #0a0a0a (deep black, not pure)
Surface:       #141414 (slightly lighter for cards)
Border:        #262626 (subtle borders)
Text Primary:  #fafafa (off-white)
Text Muted:    #a1a1aa (zinc-400)
Accent:        #f59e0b (warm amber)
Accent Hover:  #d97706 (amber-600)
```

### Typography
```
Display:    Geist Sans, 4xl-6xl, tracking-tight
Body:       Geist Sans, base-lg, leading-relaxed, max-width 65ch
Metrics:    Geist Mono, tabular figures
Labels:     Geist Mono, small, uppercase, tracking-wide (sparingly)
```

### Spacing
```
Section gap:  py-24 to py-32
Card padding: p-6 to p-8
Grid gap:     gap-6
```

### Radius
```
Cards:     rounded-xl (12px)
Buttons:   rounded-lg (8px)
Tags/Pills: rounded-full
```

---

## Skills Applied

All 12 skills installed in `.agents/skills/`. Key rules being followed:

- **design-taste-frontend:** Anti-default discipline, dial system, hero must fit viewport, max 1 eyebrow per 3 sections, no identical card grids
- **impeccable:** OKLCH colors, verify contrast, no side-stripe borders, no gradient text, serif discouraged
- **landing-page-design:** Above-the-fold formula, CTA psychology, section order
- **brand.md:** Design IS the product, palette IS voice, imagery mandatory
- **web-typography:** 16-18px body, 65ch max-width, fluid clamp()
- **accessibility:** WCAG AA, keyboard nav, focus indicators, reduced motion
- **ui-animation:** Animate only transform/opacity, CSS transitions preferred, asymmetric timing
- **tailwind-design-system:** v4 CSS-first config, `@theme` tokens, semantic color system

---

## Build Phases

### Phase 1: Foundation
- [ ] Initialize Next.js + TypeScript + Tailwind v4
- [ ] Set up design tokens (`@theme` in CSS)
- [ ] Configure Geist fonts via `next/font`
- [ ] Create base layout with dark theme locked

### Phase 2: Sections
- [ ] Hero section (name + philosophy + CTA)
- [ ] Projects section (3 cards with hover states)
- [ ] Project modal overlays (full case study template)
- [ ] Skills capability matrix
- [ ] Contact CTA + Footer

### Phase 3: Polish
- [ ] Scroll-reveal animations (Motion `whileInView`)
- [ ] Responsive design (mobile-first)
- [ ] Accessibility audit (contrast, keyboard, reduced motion)
- [ ] Performance check (Lighthouse)

### Phase 4: Deploy
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Custom domain (optional, later)

---

## Closed Items (No User Action Needed)

1. **Hero philosophy paragraph** — Extracted from `Design-Philosophy.md` by build model
2. **Case study copy** — Extracted from existing READMEs, PRDs, and project docs in `Assets/` by build model
3. **Screenshots/images** — Already provided in `Assets/[project]/pics/` and `dashboard pics/`

## Build Instructions

After each section is built, the model must tell the user exactly how to view it — e.g., "Run `npm run dev` and open `http://localhost:3000`"

---

## Decisions Log

| Decision | Choice | Reason |
|----------|--------|--------|
| Site structure | Single page + modals | Clean, contained, recruiter-friendly |
| Visual direction | Dark + amber accent | Non-AI, distinctive, "PM who ships" |
| Font | Geist Sans + Mono | Professional, signals technical depth |
| Project order | Build → Analyze → Data | Leads with strongest work |
| Skills display | Capability matrix | Unique, shows systems thinking |
| About section | Skip | Let work speak for itself |
| Contact | Email + LinkedIn + GitHub | Standard, clean |
| Content source | User provides everything | They know their work best |
