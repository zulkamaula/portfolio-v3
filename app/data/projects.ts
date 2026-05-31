export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  startDate?: string
  endDate?: string
  tech: string[]
  category: ('enterprise' | 'exploration' | 'pos' | 'saas')[]
  image: string
  images?: string[]
  links: { label: string; url: string; private?: boolean }[]
  status: 'completed' | 'development' | 'workplace'
}

export const projects: Project[] = [
  {
    id: 'checksslbot',
    title: 'CheckSSLBot — SSL Certificate Monitoring Dashboard',
    description: 'Automated SSL monitoring across multiple domains and subdomains with pricing comparison dashboard and email alerts for certificate expiry.',
    longDescription: 'Built a Vue, Pinia, and Tailwind-based web app for automated SSL monitoring across multiple domains and subdomains with pricing comparison dashboard and email alerts for certificate expiry.',
    startDate: 'Apr 2025',
    endDate: 'Apr 2026',
    tech: ['Vue 3', 'Pinia', 'TailwindCSS'],
    category: ['saas'],
    image: '/img/projects/checksslbot/img-1.webp',
    links: [{ label: 'Live Site', url: 'https://checksslbot.netlify.app/' }],
    status: 'completed'
  },
  {
    id: 'epl-module',
    title: 'EPL Module (Environment Planning System) — JIMMS SuperApp',
    description: 'Digitized toll road maintenance inspections and centralized bridge/road condition data into a single dashboard.',
    longDescription: 'Digitized toll road maintenance inspections and centralized bridge/road condition data into a single dashboard integrated with JMTM\'s smart maintenance ecosystem; converted PowerPoint workflows into an interactive web app.',
    startDate: 'Sep 2024',
    endDate: 'Nov 2025',
    tech: ['Next.js', 'Mantine', 'SWR', 'Axios'],
    category: ['enterprise'],
    image: '/img/projects/epl/img-1.webp',
    images: ['/img/projects/epl/img-1.webp', '/img/projects/epl/img-2.webp', '/img/projects/epl/img-3.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/JIMMS---EPL', private: true }],
    status: 'workplace'
  },
  {
    id: 'upvendo-pos',
    title: 'SaaS POS System — Upvendo',
    description: 'Interconnected SaaS POS applications (KIOSK, Online Ordering, Backoffice) for merchant operations.',
    longDescription: 'Built interconnected applications (kiosk.upvendo.com, zestidoo.com, backoffice.upvendo.com), implementing production-ready UI/UX designs and robust API integrations for merchant operations.',
    startDate: 'Jun 2024',
    endDate: 'Aug 2025',
    tech: ['Vue 3', 'Vuexy', 'TailwindCSS', 'REST APIs'],
    category: ['pos', 'saas'],
    image: '/img/projects/upvendo/img-1.webp',
    images: ['/img/projects/upvendo/img-1.webp', '/img/projects/upvendo/img-2.webp', '/img/projects/upvendo/img-3.webp', '/img/projects/upvendo/img-4.webp', '/img/projects/upvendo/img-5.webp', '/img/projects/upvendo/img-6.webp'],
    links: [
      { label: 'Kiosk', url: 'https://upvendo.com/pages/self-service-kiosks' },
      { label: 'Zestidoo', url: 'https://upvendo.com/pages/online-ordering' },
      { label: 'Backoffice', url: 'https://upvendo.com/pages/backoffice' }
    ],
    status: 'workplace'
  },

  {
    id: 'csirt',
    title: 'CSIRT — Cybersecurity CMS & Admin Panel',
    description: 'CMS and admin panel for configuring public-facing cybersecurity compliance pages at Jasamarga.',
    longDescription: 'Developed a CMS and admin panel to set up and configure public pages for cybersecurity legalitas at Jasamarga. Combined two codebases: the admin panel (adminpanel-csirt) for backend configuration and the frontend (fe-csirt) for the public-facing cybersecurity compliance pages.',
    startDate: 'Feb 2023',
    endDate: 'Feb 2025',
    tech: ['Vue 3', 'TypeScript', 'SCSS', 'CSS', 'Docker'],
    category: ['enterprise'],
    image: '/img/projects/csirt/img-1.webp',
    images: ['/img/projects/csirt/img-1.webp', '/img/projects/csirt/img-2.webp', '/img/projects/csirt/img-3.webp', '/img/projects/csirt/img-4.webp'],
    links: [
      { label: 'Admin Panel', url: 'https://github.com/zulkamaula/adminpanel-csirt', private: true },
      { label: 'Frontend', url: 'https://github.com/zulkamaula/fe-csirt', private: true }
    ],
    status: 'completed'
  },
  {
    id: 'sarirasa-webpos',
    title: 'Sarirasa WebPOS',
    description: 'Web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan.',
    longDescription: 'Developed web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan to enable efficient sales, reporting, and daily monitoring.',
    startDate: 'Feb 2021',
    endDate: 'Aug 2022',
    tech: ['Vue.js', 'Figma', 'Bootstrap', 'TailwindCSS', 'REST APIs'],
    category: ['enterprise', 'pos'],
    image: '/img/projects/sarirasa-webpos/img-1.webp',
    images: ['/img/projects/sarirasa-webpos/img-1.webp', '/img/projects/sarirasa-webpos/img-2.webp', '/img/projects/sarirasa-webpos/img-3.webp', '/img/projects/sarirasa-webpos/img-4.webp', '/img/projects/sarirasa-webpos/img-5.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/FE_SarirasaWPOS', private: true }],
    status: 'completed'
  },
  {
    id: 'unapos',
    title: 'UnaPOS — PWA Bookkeeping System',
    description: 'PWA-based bookkeeping and POS system for booking management and payment processing, built with Vue 3 and Dexie.js for offline-first local storage.',
    longDescription: 'A personal exploration of SaaS and POS concepts named UnaPOS. Built with Vue 3 and PWA for real-time booking management, payment processing, and merchant operations. Uses Dexie.js (IndexedDB wrapper) for client-side internal storage, eliminating the need for a backend database and enabling full offline functionality.',
    tech: ['Vue 3', 'PWA', 'TailwindCSS', 'Dexie.js'],
    category: ['exploration', 'pos'],
    image: '/img/projects/unapos/img-1.webp',
    links: [{ label: 'Live Site', url: 'https://v0-unapos.vercel.app' }],
    status: 'development'
  },
  {
    id: 'jmact',
    title: 'JMACT — Activity Management System',
    description: 'Internal system for managing daily activities and notifications at Jasamarga, with Firebase-powered real-time alerts.',
    longDescription: 'Contributed as Frontend developer building the UI for a Laravel monolith with Bootstrap 5 and jQuery. Integrated Firebase for real-time notification alerts within the internal JM ecosystem.',
    tech: ['Laravel', 'Blade', 'Bootstrap 5', 'jQuery', 'Firebase'],
    category: ['enterprise'],
    image: '/img/projects/jmact/img-1.webp',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/JMACT', private: true }],
    status: 'completed'
  },
  {
    id: 'aroma-wbs',
    title: 'AROMA — Whistle Blowing System (WBS)',
    description: 'Nuxt 3 whistleblowing platform integrated with KPK API for reporting violations, with pioneering CSP implementation.',
    longDescription: 'Built as the sole frontend developer using Nuxt 3. First-time implementation of Content Security Policy (CSP) on the frontend without prior benchmarks — overcoming limited references. Integrated with KPK API for whistleblowing submissions. Mostly CRUD-based features with a focus on security and compliance.',
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SCSS'],
    category: ['enterprise'],
    image: '/img/projects/aroma-wbs/img-1.webp',
    images: ['/img/projects/aroma-wbs/img-1.webp', '/img/projects/aroma-wbs/img-2.webp', '/img/projects/aroma-wbs/img-3.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/AROMA-WBS', private: true }],
    status: 'completed'
  },
  {
    id: 'jmguest',
    title: 'JMGuest — Guest Book WebApp',
    description: 'Guest registration system with KTP camera scanning, photo capture, CRUD, search, and Excel export.',
    longDescription: 'Developed a guest registration system with KTP camera scanning, photo capture, CRUD, search, and Excel export, supporting multiple guest types with customizable forms.',
    startDate: 'Oct 2023',
    endDate: 'Aug 2024',
    tech: ['Laravel', 'Vue.js', 'Bootstrap', 'REST APIs'],
    category: ['enterprise'],
    image: '/img/projects/jmguest/img-1.webp',
    images: ['/img/projects/jmguest/img-1.webp', '/img/projects/jmguest/img-2.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/JMGUEST', private: true }],
    status: 'completed'
  },
  {
    id: 'achievement-work',
    title: 'Sarirasa Probation — WebPOS Prototype & Dashboards',
    description: 'Probation project at Sarirasa: WebPOS prototype, work accomplishment dashboard, and Pesantare dashboard using Express.js and EJS.',
    longDescription: 'Completed during probation period at Sarirasa (Sate Khas Senayan). Developed and delivered multiple modules: Sarirasa WebPOS prototype (Figma mockup to frontend), Walkthru & Assessment Dashboard for W&A, and Pesantare Dashboard. Built with Express.js, EJS, MySQL, and Bootstrap/jQuery for internal operational needs.',
    tech: ['Node.js', 'Express', 'EJS', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js', 'Figma'],
    category: ['enterprise'],
    image: '/img/projects/sarirasa-probation/img-1.webp',
    images: ['/img/projects/sarirasa-probation/img-1.webp', '/img/projects/sarirasa-probation/img-2.webp', '/img/projects/sarirasa-probation/img-3.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/Achievement-Work-Project', private: true }],
    status: 'completed'
  },
  {
    id: 'kligi',
    title: 'Kligi — Dental Clinic SaaS',
    description: 'Integrated SaaS platform for dental clinic management: merchant onboarding, operational dashboard, and landing page.',
    longDescription: 'A Solid.js-based SaaS platform for dental clinic management consisting of three integrated applications: Kligi Internal (merchant management), Kligi Dashboard (daily clinic operations), and Kligi Onboarding (landing page). Built as an exploration project in collaboration with a backend engineer.',
    tech: ['Solid.js', 'TypeScript', 'TailwindCSS'],
    category: ['saas', 'exploration'],
    image: '/img/projects/kligi/img-1.webp',
    images: ['/img/projects/kligi/img-1.webp', '/img/projects/kligi/img-2.webp', '/img/projects/kligi/img-3.webp'],
    links: [
      { label: 'Kligi Internal', url: '', private: true },
      { label: 'Kligi Dashboard', url: '', private: true },
      { label: 'Kligi Onboarding', url: '', private: true }
    ],
    status: 'development'
  },
  {
    id: 'm3-money-mapper',
    title: 'M3 — Money Mapper Monitor v2',
    description: 'Full-stack personal finance management app for tracking income allocations across multiple money books and pockets with investment tracking.',
    longDescription: 'A full-stack money management application built with Nuxt 4 and Vue 3. Track income allocations across multiple pockets with percentage-based distribution, manage multiple money books, track investments across platforms (gold, stocks, ETF, crypto), and view allocation history with detailed breakdowns. Features Clerk authentication, Neon PostgreSQL, and a responsive Vuetify 3 UI.',
    tech: ['Nuxt 4', 'Vue 3', 'Vuetify 3', 'TypeScript', 'PostgreSQL', 'Clerk'],
    category: ['exploration'],
    image: '/img/projects/m3app/img-1.webp',
    images: ['/img/projects/m3app/img-1.webp', '/img/projects/m3app/img-2.webp', '/img/projects/m3app/img-3.webp', '/img/projects/m3app/img-4.webp'],
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/money-mapper-monitor-v2' }],
    status: 'development'
  },
  {
    id: 'landing-page-company',
    title: '[ZRM-Hz] Landing Page — Web Company',
    description: 'Company landing page built from Figma design with native HTML, CSS, and JavaScript.',
    longDescription: 'A landing page for a fictional web company, converted from a Figma design to a static site. Built entirely with native HTML, CSS, and JavaScript without any frameworks or libraries. Deployed on GitHub Pages as part of early personal projects before starting a professional career.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: ['exploration'],
    image: '/img/projects/landing/img-1.webp',
    links: [
      { label: 'Live Site', url: 'https://zulkamaula.github.io/%5BZRM-Hz%5D%20Web%20Project/%5BZRM-Hz%5D%20Landing%20Page%20-%20Web%20Company/index.html' },
      { label: 'GitHub', url: 'https://github.com/zulkamaula/zulkamaula.github.io/tree/master/%5BZRM-Hz%5D%20Web%20Project/%5BZRM-Hz%5D%20Landing%20Page%20-%20Web%20Company' }
    ],
    status: 'completed'
  },
  {
    id: 'phonesell',
    title: 'PhoneSell — Phone Sales App',
    description: 'A Vue 2 phone sales application with Bootstrap-Vue UI.',
    longDescription: 'A Vue 2 based phone sales application featuring product listing, shopping cart, and routing. Built with Bootstrap-Vue for responsive UI components and Axios for API communication.',
    tech: ['Vue 2', 'Vue Router', 'Bootstrap-Vue', 'Axios'],
    category: ['exploration'],
    image: '/img/projects/phonesell/img-1.webp',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/PhoneSell' }],
    status: 'completed'
  },
  {
    id: 'pokebox',
    title: 'Pokebox — Pokedex React App',
    description: 'A Pokedex app built with React and TailwindCSS.',
    longDescription: 'A React-based Pokedex app for browsing and searching Pokemon. Built with Vite, TailwindCSS for styling, and featuring a clean card-based UI.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Axios'],
    category: ['exploration'],
    image: '/img/projects/pokebox/img-1.webp',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/reactapp-pokebox' }],
    status: 'completed'
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website v2',
    description: 'Personal portfolio version 2 built with TailwindCSS and vanilla JavaScript.',
    longDescription: 'Second iteration of personal portfolio website. Built with TailwindCSS for utility-first styling and vanilla JavaScript for interactivity. Static site deployed via GitHub Pages.',
    tech: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
    category: ['exploration'],
    image: '/img/projects/portfolios/img-2.webp',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/portfolio-v2' }],
    status: 'completed'
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio Website v1',
    description: 'First version of personal portfolio built with native HTML, CSS, and JavaScript.',
    longDescription: 'The very first iteration of personal portfolio website, built entirely with native HTML, CSS, and JavaScript. A simple multi-page site showcasing early work and projects from the beginning of the career journey.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: ['exploration'],
    image: '/img/projects/portfolios/img-1.webp',
    links: [
      { label: 'Live Site', url: 'https://zulkamaula.github.io/' },
      { label: 'GitHub', url: 'https://github.com/zulkamaula/zrm' }
    ],
    status: 'completed'
  }
]
