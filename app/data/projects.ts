export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: ('vue' | 'react' | 'enterprise' | 'exploration')[]
  image: string
  links: { label: string; url: string }[]
  status: 'completed' | 'development' | 'workplace'
}

export const projects: Project[] = [
  {
    id: 'checksslbot',
    title: 'CheckSSLBot — SSL Certificate Monitoring Dashboard',
    description: 'Automated SSL monitoring across multiple domains and subdomains with pricing comparison dashboard and email alerts for certificate expiry.',
    longDescription: 'Built a Vue, Pinia, and Tailwind-based web app for automated SSL monitoring across multiple domains and subdomains with pricing comparison dashboard and email alerts for certificate expiry.',
    tech: ['Vue 3', 'Pinia', 'TailwindCSS'],
    category: ['exploration'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'completed'
  },
  {
    id: 'epl-module',
    title: 'EPL Module (Environment Planning System) — JIMMS SuperApp',
    description: 'Digitized toll road maintenance inspections and centralized bridge/road condition data into a single dashboard.',
    longDescription: 'Digitized toll road maintenance inspections and centralized bridge/road condition data into a single dashboard integrated with JMTM\'s smart maintenance ecosystem; converted PowerPoint workflows into an interactive web app.',
    tech: ['Next.js', 'Mantine', 'SWR', 'Axios'],
    category: ['enterprise', 'react'],
    image: '/img/projects/placeholder.svg',
    links: [],
    status: 'workplace'
  },
  {
    id: 'upvendo-pos',
    title: 'SaaS POS System — Upvendo',
    description: 'Interconnected SaaS POS applications (KIOSK, Online Ordering, Backoffice) for merchant operations.',
    longDescription: 'Built interconnected applications (kiosk.upvendo.com, zestidoo.com, backoffice.upvendo.com), implementing production-ready UI/UX designs and robust API integrations for merchant operations.',
    tech: ['Vue 3', 'Vuexy', 'TailwindCSS', 'REST APIs'],
    category: ['vue'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'Kiosk', url: 'https://kiosk.upvendo.com' }, { label: 'Backoffice', url: 'https://backoffice.upvendo.com' }],
    status: 'workplace'
  },
  {
    id: 'jmguest',
    title: 'JMGuest — Guest Book WebApp',
    description: 'Guest registration system with KTP camera scanning, photo capture, CRUD, search, and Excel export.',
    longDescription: 'Developed a guest registration system with KTP camera scanning, photo capture, CRUD, search, and Excel export, supporting multiple guest types with customizable forms.',
    tech: ['Laravel', 'Vue.js', 'Bootstrap', 'REST APIs'],
    category: ['vue', 'enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'completed'
  },
  {
    id: 'sarirasa-webpos',
    title: 'Sarirasa WebPOS',
    description: 'Web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan.',
    longDescription: 'Developed web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan to enable efficient sales, reporting, and daily monitoring.',
    tech: ['Vue.js', 'Figma', 'Bootstrap', 'TailwindCSS', 'REST APIs'],
    category: ['vue', 'enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [],
    status: 'completed'
  }
]
