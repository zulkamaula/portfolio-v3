export interface Experience {
  role: string
  company: string
  location: string
  period: string
  type: 'pos' | 'saas' | 'enterprise' | 'freelance'
  descriptions: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Frontend Engineer, Application Developer Associate (Vendor-side)',
    company: 'PT. Metrodata Electronics Tbk / PT. Jasamarga (Persero) Tbk',
    location: 'East Jakarta, Indonesia',
    period: 'Nov 2022 — Nov 2025',
    type: 'enterprise',
    descriptions: [
      'Vendor-side Frontend Vue Specialist for toll road web applications at PT. Jasamarga (Persero) Tbk. Owned the frontend across development, testing, and post-deployment support, reducing UI bugs reported by an estimated 30–40% per sprint.',
      'Collaborated with system analyst and backend engineers to resolve UI/UX issues and simplify workflows, helping operators complete daily tasks around 15–20% faster.',
      'Contributed to setup CSP, SEO-ready company profile and internal web tools.'
    ],
    tech: ['Vue 2/3', 'Nuxt', 'TypeScript', 'TailwindCSS', 'Pinia', 'Axios']
  },
  {
    role: 'Frontend Engineer (Freelance)',
    company: 'Upvendo (The Mazi Group)',
    location: 'Miami, US (Remote)',
    period: 'Jun 2024 — Aug 2025',
    type: 'saas',
    descriptions: [
      'Built and maintained modular SaaS POS applications (KIOSK, Online Ordering, Backoffice) using Vue 3, Vuexy, and TailwindCSS, enabling faster onboarding and setup for new merchant outlets (≈ 30–50% faster).',
      'Translated Figma designs into reusable, production-ready UI components and proposed UX improvements, cutting design/development rework by roughly 20–30%.',
      'Optimized RESTful API integrations and responsive layouts, reducing visible API errors and improving load times for core transaction screens by about 20–25%.'
    ],
    tech: ['Vue 3', 'Vuexy', 'TailwindCSS', 'TypeScript', 'Figma', 'REST APIs']
  },
  {
    role: 'Frontend Developer (Full-time)',
    company: 'Sarirasa Group (CV. Sarirasa Nusantara)',
    location: 'Central Jakarta, Indonesia',
    period: 'Feb 2021 — Nov 2022',
    type: 'pos',
    descriptions: [
      'Built 4 internal web applications to digitize restaurant operations and developed a web-based POS for Sate Khas Senayan, improving store operational efficiency by up to 70%.',
      'Delivered responsive, cross-browser UIs for internal tools, reducing display/compatibility complaints from outlets and accelerating adoption across multiple branches.',
      'Contributed to modules such as Cashier, Kitchen, Online Ordering, and Dashboard Management System.'
    ],
    tech: ['Vue.js', 'Bootstrap', 'TailwindCSS', 'Figma', 'REST APIs']
  }
]
