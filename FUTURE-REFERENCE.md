# Portfolio — Future Reference

Quick context for anyone (including LLMs) updating this portfolio later.

## What this site is

A single-page PM portfolio for Mujtaba Jafri. Next.js 15, TypeScript, Tailwind CSS v4, Phosphor Icons, Motion (Framer Motion).

## Project order (as of July 2026)

1. DealFlow — creator monetization workflow (case study + clickable mockup)
2. WhatsApp DPDP — privacy/consent redesign (case study + working prototype)
3. X-Split — browser extension for X/Twitter (shipped, in Chrome Web Store)
4. AI Invoice Exception Handler — AP workflow tool (working MVP)
5. Ownly by Rapido — product teardown (existing, kept as-is)

## Common tasks and gotchas

### Adding a new project

1. Copy images into `public/images/[project-slug]/`
2. If there's a case study PDF, put it in `public/case-studies/[project-slug].pdf`
3. Add the project object to `app/lib/data.ts` in the `projects` array
4. The `Project` type is in `app/types/index.ts`
5. Order matters — array order = display order on site

### Project links

The `links` object supports:
- `live` — external URL (button says "Live Demo" by default)
- `liveLabel` — override the button text (e.g., "Webstore Link" for X-Split)
- `github` — repo URL (button says "GitHub")
- `pdf` — path to PDF in `public/` (button says "Case Study")
- `drive` — Google Drive link (button says "Drive")
- `ppt` — presentation link (button says "Deck")

PDFs open in the browser's built-in viewer. No external hosting needed.

### Changing project order

Reorder the objects in the `projects` array in `app/lib/data.ts`. The first project appears first on the page.

### Updating the resume

1. Edit `E:\Projects\Resumes\product_res_11.tex`
2. Build PDF with your LaTeX workflow
3. Copy the output PDF to `public/resume.pdf`
4. Commit and push

### Updating hero text

The hero philosophy text is in `app/lib/data.ts` under `heroContent.philosophy`. Previous options are saved in `hero-options.md`.

### Updating skills

Skills are in `app/lib/data.ts` under `skillGroups`. Each group needs a `category` name, an `icon` (must be in the iconMap in `app/sections/Skills.tsx`), and a `skills` array.

Available icons in the iconMap: Compass, Code, Brain, Wrench. To add more, import from `@phosphor-icons/react` and add to the map.

### Adding images to an existing project

1. Drop images into `public/images/[project-slug]/`
2. Add entries to the `images` array in that project's object in `data.ts`
3. First image in the array = thumbnail on the card AND the hero image in the modal

### Thumbnails

Each project has a `thumbnail` (shown on the card) and an `images` array (shown in the modal). The first image in `images` is the large hero inside the modal. If you want a wider/different hero image, use a separate file and reference it in both `thumbnail` and as the first entry in `images`.

## Things that trip people up (LLM caveats)

### Don't add "I X" taglines

The `tagline` field exists in the Project type but is currently empty for all projects. It was intentionally emptied because "I design systems" / "I think in systems" type labels read as AI slop. Leave it empty unless Mujtaba specifically asks for one.

### Don't add an "AI" skill group

There used to be an AI skill group with "LLMs, Agentic Workflow, RAG Fundamentals". It was removed because it oversold. The current AI & ML group has "LLM Integration, AI Evaluation Metrics, RAG" — which is honest. Don't add more AI buzzwords.

### Don't use em-dashes

Use commas or periods. Em-dashes are an AI writing cue.

### Don't say "assignment"

All projects are framed as case studies or product work. None mention "Vedantu assignment" or "Certinal assignment" or "Zamp assignment". Keep it that way.

### Don't say "seamlessly", "holistic", "leverage", "robust", "scalable"

Standard AI-slop words. If you catch yourself writing them, rewrite.

### Don't add projects without assets

Every project needs at minimum a thumbnail image. Ideally 3-5 images for the modal. Don't add a project entry without corresponding images in `public/images/`.

### Don't change the project order without asking

The order is deliberate: shipped product first, then working demos, then case studies. This builds credibility before showing thinking.

### The "Ownly" project is intentionally light

It stays as-is. Don't expand it or add more detail unless asked.

### PDF handling

PDFs go in `public/case-studies/`. The browser opens them inline. No special handling needed. Don't use Google Drive links for PDFs — local hosting is simpler and faster.

### CSS/design

The site uses a single design system defined in `app/globals.css`. There used to be a "design-2" neobrutalist skin — it was removed. Don't re-add alternate design skins.

### Build check

After making changes, run `npx next build` to verify compilation. The lint step is slow (ESLint config prompt) — compilation passing is the key signal.

### Git workflow

```powershell
git status                    # see changes
git add .                     # stage all
git commit -m "description"   # commit
git push                      # push to GitHub (Vercel auto-deploys)
```

## File structure quick reference

```
app/
  lib/data.ts           ← ALL content lives here
  types/index.ts        ← TypeScript types
  sections/             ← page sections (Hero, Projects, Skills, Contact, Footer)
  components/           ← reusable UI (ProjectCard, ProjectModal, Button, etc.)
  globals.css           ← design tokens + Tailwind
  layout.tsx            ← root layout + fonts
  page.tsx              ← main page
public/
  images/[project]/     ← project images
  case-studies/         ← PDF case studies
  resume.pdf            ← current resume
hero-options.md         ← previous hero text options
```
