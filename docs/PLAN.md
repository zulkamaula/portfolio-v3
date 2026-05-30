# Portfolio V3 — Execution Plan

## Tech Stack
| Layer | Choice |
|---|---|
| Framework | Nuxt 4 |
| Styling | TailwindCSS v4 via `@nuxtjs/tailwindcss` |
| Animations | `@vueuse/motion` + native CSS |
| Icons | `@iconify/vue` (Lucide + tech icons) |
| Images | `@nuxt/image` (auto WebP, lazy, responsive) |
| Dark Mode | `@vueuse/core` `useColorMode` (system-first) |
| Package Manager | pnpm |
| Form Contact | Netlify Forms (native, no backend) |
| Deploy | Netlify (GitHub auto-deploy) |
| Data | Hardcoded TypeScript (no CMS, no API) |

## Project Structure (Nuxt 4)

```
portfolio-v3/
├── app/
│   ├── app.vue                      # Root entry
│   ├── pages/
│   │   ├── index.vue                # Home — all sections
│   │   ├── projects/
│   │   │   └── [slug].vue           # Dynamic project detail
│   │   └── thankyou.vue             # Post-contact landing
│   └── components/
│       ├── layout/
│       │   ├── Navbar.vue           # Sticky → solid on scroll
│       │   ├── Footer.vue           # Minimal + social links
│       │   └── BackToTop.vue        # Animated FAB
│       ├── sections/
│       │   ├── HeroSection.vue      # Typewriter + blob + stats
│       │   ├── AboutSection.vue     # Bio + social + tech stacks
│       │   ├── ExperienceSection.vue # Timeline POS/SaaS/Enterprise
│       │   ├── PortfolioSection.vue  # Filterable grid + modal
│       │   ├── SkillsSection.vue    # Categorized + proficiency
│       │   └── ContactSection.vue   # Form + validation + toast
│       └── ui/
│           ├── TechBadge.vue        # Tech stack pill
│           ├── ProjectCard.vue      # Portfolio card with hover
│           ├── TimelineItem.vue     # Experience entry
│           ├── SkillBar.vue         # Progress bar
│           ├── ThemeToggle.vue      # Sun/Moon toggle
│           └── Toast.vue            # Notification
├── assets/
│   └── css/
│       └── main.css                 # Tailwind imports + custom
├── data/
│   ├── projects.ts                  # Portfolio projects data
│   ├── experience.ts                # Work experience timeline
│   └── skills.ts                    # Skills with proficiency
├── composables/
│   ├── usePortfolio.ts              # Projects accessor
│   ├── useExperience.ts             # Experience accessor
│   ├── useSkills.ts                 # Skills accessor
│   └── useScrollReveal.ts           # IntersectionObserver wrapper
├── nuxt.config.ts
├── netlify.toml
├── tailwind.config.ts
└── docs/
    └── PLAN.md                      # This file
```

## Implementation Sequence

| Step | What | Est. |
|---|---|---|
| 1 | Init Nuxt + install deps | Done |
| 2 | Config: `nuxt.config.ts`, `tailwind.config.ts`, `main.css`, `netlify.toml` | 15m |
| 3 | Layout: `Navbar`, `Footer`, `BackToTop`, dark mode system | 30m |
| 4 | Data: `projects.ts`, `experience.ts`, `skills.ts` + composables | 20m |
| 5 | `HeroSection.vue` — typewriter, blob bg, stats counter, CTA | 30m |
| 6 | `AboutSection.vue` + `ExperienceSection.vue` — timeline | 30m |
| 7 | `SkillsSection.vue` — categorized + proficiency bars | 20m |
| 8 | `PortfolioSection.vue` + `ProjectCard` + `[slug].vue` | 45m |
| 9 | `ContactSection.vue` — form + validation + thankyou | 20m |
| 10 | Polish: scroll animasi, SEO, aksesibilitas, deploy | 30m |

## Content: Placeholder Projects

1. **WebPOS Pro** — POS System (Vue 3 + Pinia + Tailwind) — *under development*
2. **SaaS Dashboard** — Multi-tenant analytics (Nuxt 3 + Chart.js)
3. **Enterprise HRM** — Employee management (Vue 2 + Vuetify) — *workplace*
4. **E-Commerce Platform** — Full-featured storefront (React + Next.js)

## Deploy

- Build: `pnpm run generate` (static site)
- Preset: `netlify-static`
- Auto-deploy via GitHub → Netlify
