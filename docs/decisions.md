# Decisions Log

## 2026-06-17 — Initial Planning

### Site Structure
**Decision:** Single-page scroll with modal overlays for project details
**Reason:** Clean, contained, recruiter-friendly. Modals let us show full case studies without leaving the page. Multi-page was considered but modals feel more cohesive for a portfolio.

### Visual Direction
**Decision:** "PM Who Ships" — Deep black (#0a0a0a) + warm amber accent (#f59e0b)
**Reason:** To be non-AI. Most AI portfolios use light themes, blue/purple accents, centered heroes. Amber is unexpected for PM. Deep black with warmth is different from pure black.

### Font Choice
**Decision:** Geist Sans + Geist Mono
**Reason:** Geist is clean, modern, not Inter (which is an AI default). Mono for metrics/data signals "I think in systems, not just slides."

### Project Order
**Decision:** Build → Analyze → Data (AI PRD Generator → Rapido Teardown → Olist Analytics)
**Reason:** Leads with the strongest work (live app), then shows analytical thinking, then data depth.

### Skills Display
**Decision:** Capability matrix / skill tree
**Reason:** More unique than tag pills. Shows systems thinking, which is a PM signal.

### About Section
**Decision:** Skip entirely
**Reason:** Let the projects and hero speak. Recruiters care about what you built, not bio paragraphs.

### Contact Section
**Decision:** Email + LinkedIn + GitHub in footer + CTA section above
**Reason:** Standard three links. CTA section adds a "let's connect" moment before the footer.

### Content Strategy
**Decision:** User provides all copy and images
**Reason:** They know their work best. I build the shell, they fill it with real content.

### Animation Strategy
**Decision:** Scroll-reveal only, no decoration
**Reason:** Purposeful motion. No floating particles, no infinite loops. Motion should communicate hierarchy, not "look cool."

### Hosting
**Decision:** Vercel free tier
**Reason:** User already has Vercel account from PRD project. Next.js is Vercel-native.
