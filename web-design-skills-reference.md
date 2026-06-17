# Web & UI/UX Skill Reference

Use this file at the start of every project. It lists the curated skill combo for web page creation and general design work.

## How to use skills on every project

1. **Check global skills first.** Look at the skills available globally and load any that fit the project.
2. **Check local project skills next.** Look inside the project's own skills folder (usually `.opencode/skills/` or a local `skills/` folder).
3. **Use relevant skills automatically.** Once you identify relevant skills, apply them consistently throughout the project — do not load them once and forget them.
4. **Ask when unsure.** If it is unclear which skill fits, or if you have to assume too much about the design direction, ask questions and do a back-and-forth before building.

## Curated skill combo

This is the default set to consider for web/design work. Install only what the project actually needs.

| Skill | What it does | Why it matters for web/design work |
|---|---|---|
| `leonxlnx/taste-skill@design-taste-frontend` | Teaches refined "design taste" for frontend output. | Moves AI-generated UI from generic templates to modern, polished interfaces that feel intentional. |
| `pbakaus/impeccable@frontend-design` | Focuses on pixel-perfect, production-grade frontend details. | Catches spacing, alignment, and polish gaps that make prototypes look amateur. |
| `vercel-labs/agent-skills@web-design-guidelines` | Vercel-backed guidelines for consistent web interfaces. | Helps establish credibility through professional icon use, color discipline, and layout consistency. |
| `qu-skills/skills@landing-page-design` | Landing-page-specific patterns and structure. | Builds high-converting heroes, CTAs, social proof, and clear value proposition sections. |
| `eng0ai/eng0-template-skills@awwwards-landing-page` | AWWWARDS-level landing page craft. | Pushes landing pages toward portfolio/elite quality with attention to detail and motion. |
| `wshobson/agents@tailwind-design-system` | Builds cohesive Tailwind component systems. | Prevents one-off utility classes and keeps the whole app visually consistent. |
| `addyosmani/web-quality-skills@accessibility` | Accessibility best practices from Addy Osmani. | Makes sites usable for everyone and reduces legal/compliance risk. |
| `mblode/agent-skills@ui-animation` | Purposeful UI motion and micro-interactions. | Adds life to interfaces without distracting from content or conversion goals. |
| `wshobson/agents@kpi-dashboard-design` | Dashboard and analytics layout patterns. | Helps consolidate metrics, reduce clutter, and display data meaningfully. |
| `wondelai/skills@web-typography` | Typography scale, hierarchy, and readability. | Creates clear reading order and professional text styling on any page. |
| `hubeiqiao/apple-bento-grid@apple-bento-grid` | Apple-style bento grid layouts. | Useful for modern feature showcases and structured landing-page sections. |
| `arvindrk/extract-design-system@extract-design-system` | Extracts a design system from existing code/assets. | Helps unify legacy or scattered UI into a single coherent system. |

## Is this the best combo?

It is a strong, design-focused combo for most web and SaaS projects. It may not be enough for:

- **Mobile-first or responsive design** beyond basic breakpoints.
- **Performance and Core Web Vitals** work.
- **Component-library-specific builds** like shadcn/ui or Radix.
- **Conversion copywriting** beyond layout.

If a project touches any of those, add a skill for that specific domain.
