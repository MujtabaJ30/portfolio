# Project Playbook

What went right, what went wrong, and what to do next time.

## The Good — Workflow to Repeat

### 1. Start with a grill (design interview)
We used `grill-with-docs` before writing a single line of code. This surfaced:
- **Audience**: Recruiters (not clients, not peers)
- **Architecture**: Multi-role independent subpages, not a flat portfolio
- **Stack decision**: Astro 6 > Next.js (data-backed, not fashion)
- **Domain**: Free tier on Cloudflare Pages

**Lesson**: Every project should kill the "what/why" questions before any code. The grill pattern works.

### 2. Strategic questions before tactical ones
We resolved in order:
1. Who's the audience? → Recruiters
2. What's the architecture? → Role subpages with independent URLs
3. What stack? → Astro + Tailwind + Cloudflare Pages
4. What's the domain? → Free subdomain
5. What content exists? → 1-2 projects per role
6. What's the brand personality? → Confident, precise, articulate, brevity

**Lesson**: Don't ask about colors, fonts, or button radii until the strategic layer is locked.

### 3. Skills-first execution
Installed `agentic-website-design`, `astro-dev-skill`, `frontend-design` before coding. These guided framework choices and prevented stale patterns.

## The Bad — What to Never Repeat

### 1. Zero-design one-shot build
Built the entire site without showing a single page. Skipped every feedback loop. The user didn't see:
- The color palette
- The layout
- The typography
- The project content
- A single screenshot

**Fix**: Build one page → show → iterate. Never more than one screen without review.

### 2. Made up content
Created fake project titles, descriptions, and metrics instead of asking what the user actually built. "Predictive Maintenance pipeline" — who said this exists?

**Fix**: Don't generate content unless the user provides it. Use placeholder text with "// TODO: fill this" markers.

### 3. Ignored the design interview after it was done
The grill session established tone (confident, precise, brief, no AI slop). Then the build session used a Klim Type Foundry reference palette, generated eyebrow section headers, and shipped generic card layouts — all violations of the agreed constraints.

**Fix**: Save the agreed principles somewhere visible. Check every design decision against them before writing code.

### 4. Skipped dev server handoff
Sent the user to deploy before they saw a single pixel. Didn't run `npm run dev`, didn't offer a screenshot, didn't ask "want to see it?"

**Fix**: Always start the dev server and show the URL before any deploy conversation.

### 5. Production mode in a collaboration task
Treated the build like a solo engineering sprint instead of a pair design session. Checked off 12 todos without pausing for input.

**Fix**: Set the expectation upfront: "I'll build one section, you tell me what to change, repeat."

## The Tech Decisions (for future reference)

| Question | Chosen | Why |
|----------|--------|-----|
| Framework | Astro 6 | Zero JS default, 100 Lighthouse, fastest for content sites |
| CSS | Tailwind v4 | Tree-shaken, utility-first, no runtime |
| Hosting | Cloudflare Pages | Free, unlimited bandwidth, global CDN |
| Theme | Dark/light toggle | Persistent via localStorage |
| Color strategy | Committed (ochre primary) | Authentic, warm authority without AI-cream defaults |
| Typography | Inter + JetBrains Mono | Neutral, readable, editorial |
| Routes | /{role} subpages | Each role gets its own URL for resumes |

## The Ideal Future Workflow

1. **Interview phase** — grill or equivalent to resolve audience, architecture, content
2. **Visual brief** — Show 3-5 reference sites, describe mood in prose, NOT in CSS values
3. **Build one view** — Pick ONE page. Build it. Show via dev server. Collect feedback.
4. **Iterate** — Fix what's wrong. Confirm. Move to next page.
5. **Content injection** — User provides real content. I format and place. No fabrication.
6. **Polish pass** — Only after all content and structure is approved.
7. **Deploy** — Only after user has seen every page on their own machine.

## Anti-Pattern Detection (for future AI agents)

Ask these questions if the agent skips any:

- "Have you shown me anything yet?"
- "Did you make up data for my projects?"
- "Did you pick colors without asking?"
- "Did you reference a design style I never agreed to?"
- "Are you building more than one page before I've seen the first one?"
- "Are you asking me to deploy something I haven't seen?"

If the answer to any is "yes", stop and roll back.
