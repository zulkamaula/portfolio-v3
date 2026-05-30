export interface Experience {
  role: string
  company: string
  location: string
  period: string
  type: 'pos' | 'saas' | 'enterprise' | 'freelance'
  descriptions: string[]
  tech: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    role: 'Frontend Engineer',
    company: 'PT. Anugrah Karya Digital Solusi',
    location: 'Bogor, Indonesia',
    period: '2022 — Present',
    type: 'enterprise',
    current: true,
    descriptions: [
      'Developed and maintained POS systems for multi-store operations with real-time inventory and sales tracking',
      'Built enterprise-level HRM dashboards for internal head office assessment and employee management',
      'Migrated legacy jQuery applications to modern Vue.js stack, improving load times by 40%',
      'Collaborated with cross-functional teams to design and implement SaaS platforms for clients'
    ],
    tech: ['Vue 2/3', 'Nuxt', 'Pinia', 'TypeScript', 'TailwindCSS', 'Chart.js', 'ExpressJS']
  },
  {
    role: 'Frontend Developer',
    company: 'PT. Cahaya Anugrah Karya',
    location: 'Bogor, Indonesia',
    period: '2021 — 2022',
    type: 'pos',
    descriptions: [
      'Built web-based POS application with complex inventory management and multi-role access',
      'Designed and implemented UI/UX from Figma mockups for the POS dashboard',
      'Integrated barcode scanning and receipt printing functionality'
    ],
    tech: ['Vue 2', 'Vuetify', 'Vuex', 'JavaScript', 'Figma']
  },
  {
    role: 'UI/UX Designer & Frontend Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2020 — 2021',
    type: 'freelance',
    descriptions: [
      'Designed and developed landing pages and company profile websites for small businesses',
      'Created responsive web designs from Figma prototypes',
      'Built e-commerce storefronts with modern JavaScript frameworks'
    ],
    tech: ['Vue.js', 'React', 'Bootstrap', 'TailwindCSS', 'Figma', 'Adobe XD']
  }
]
