export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: ('enterprise' | 'exploration' | 'pos' | 'saas')[]
  image: string
  links: { label: string; url: string; private?: boolean }[]
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
    category: ['enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/JIMMS---EPL', private: true }],
    status: 'workplace'
  },
  {
    id: 'upvendo-pos',
    title: 'SaaS POS System — Upvendo',
    description: 'Interconnected SaaS POS applications (KIOSK, Online Ordering, Backoffice) for merchant operations.',
    longDescription: 'Built interconnected applications (kiosk.upvendo.com, zestidoo.com, backoffice.upvendo.com), implementing production-ready UI/UX designs and robust API integrations for merchant operations.',
    tech: ['Vue 3', 'Vuexy', 'TailwindCSS', 'REST APIs'],
    category: ['pos', 'saas'],
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
    category: ['enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/JMGUEST', private: true }],
    status: 'completed'
  },
  {
    id: 'sarirasa-webpos',
    title: 'Sarirasa WebPOS',
    description: 'Web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan.',
    longDescription: 'Developed web-based POS modules for Cashier, Kitchen, Online Ordering, and Dashboard Management System for Sate Khas Senayan to enable efficient sales, reporting, and daily monitoring.',
    tech: ['Vue.js', 'Figma', 'Bootstrap', 'TailwindCSS', 'REST APIs'],
    category: ['enterprise', 'pos'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/FE_SarirasaWPOS', private: true }],
    status: 'completed'
  },
  {
    id: 'unapos',
    title: 'UnaPOS — PWA Bookkeeping System',
    description: 'Explorasi SaaS dan POS app untuk manajemen booking dan sistem pembayaran, dibangun dengan Vue 3 dan PWA.',
    longDescription: 'Sebuah aplikasi eksplorasi SaaS dan POS yang diberi nama UnaPOS (diambil dari nama anak). Dibangun dengan Vue 3 dan PWA untuk mendukung manajemen booking, sistem pembayaran, dan operasional merchant secara real-time.',
    tech: ['Vue 3', 'PWA', 'TailwindCSS'],
    category: ['exploration', 'pos'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/pwa-bookkeeping-system', private: true }],
    status: 'development'
  },
  {
    id: 'm3-money-mapper',
    title: 'M3 — Money Mapper Monitor v2',
    description: 'Full-stack personal finance management app for tracking income allocations across multiple money books and pockets with investment tracking.',
    longDescription: 'A full-stack money management application built with Nuxt 4 and Vue 3. Track income allocations across multiple pockets with percentage-based distribution, manage multiple money books, track investments across platforms (gold, stocks, ETF, crypto), and view allocation history with detailed breakdowns. Features Clerk authentication, Neon PostgreSQL, and a responsive Vuetify 3 UI.',
    tech: ['Nuxt 4', 'Vue 3', 'Vuetify 3', 'TypeScript', 'PostgreSQL', 'Clerk'],
    category: ['exploration'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/money-mapper-monitor-v2' }],
    status: 'development'
  },
  {
    id: 'jmact',
    title: 'JMACT — Activity Management System',
    description: 'Internal system for managing daily activities and notifications at Jasamarga, with Firebase-powered real-time alerts.',
    longDescription: 'Contributed as Frontend developer building the UI for a Laravel monolith with Bootstrap 5 and jQuery. Integrated Firebase for real-time notification alerts within the internal JM ecosystem.',
    tech: ['Laravel', 'Blade', 'Bootstrap 5', 'jQuery', 'Firebase'],
    category: ['enterprise'],
    image: '/img/projects/placeholder.svg',
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
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/AROMA-WBS', private: true }],
    status: 'completed'
  },
  {
    id: 'csirt',
    title: 'CSIRT — Cybersecurity CMS & Admin Panel',
    description: 'CMS and admin panel for configuring public-facing cybersecurity compliance pages at Jasamarga.',
    longDescription: 'Developed a CMS and admin panel to set up and configure public pages for cybersecurity legalitas at Jasamarga. Combined two codebases: the admin panel (adminpanel-csirt) for backend configuration and the frontend (fe-csirt) for the public-facing cybersecurity compliance pages.',
    tech: ['Vue 3', 'TypeScript', 'SCSS', 'CSS', 'Docker'],
    category: ['enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [
      { label: 'Admin Panel', url: 'https://github.com/zulkamaula/adminpanel-csirt', private: true },
      { label: 'Frontend', url: 'https://github.com/zulkamaula/fe-csirt', private: true }
    ],
    status: 'completed'
  },
  {
    id: 'achievement-work',
    title: 'Sarirasa Probation — WebPOS Prototype & Dashboards',
    description: 'Probation project at Sarirasa: WebPOS prototype, work accomplishment dashboard, and Pesantare dashboard using Express.js and EJS.',
    longDescription: 'Completed during probation period at Sarirasa (Sate Khas Senayan). Developed and delivered multiple modules: Sarirasa WebPOS prototype (Figma mockup to frontend), Walkthru & Assessment Dashboard for W&A, and Pesantare Dashboard. Built with Express.js, EJS, MySQL, and Bootstrap/jQuery for internal operational needs.',
    tech: ['Node.js', 'Express', 'EJS', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js', 'Figma'],
    category: ['enterprise'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/Achievement-Work-Project', private: true }],
    status: 'completed'
  },
  {
    id: 'mav',
    title: 'MAV — Movie Vue App',
    description: 'A movie browsing app built with Vue 3, Vuex, and Bootstrap 5.',
    longDescription: 'A personal exploration project to browse and search movies using Vue 3 with Composition API, Vuex for state management, and Bootstrap 5 for UI. Integrates with a movie API for live data. Deployed on Netlify.',
    tech: ['Vue 3', 'Vuex', 'Vue Router', 'Bootstrap 5', 'Axios', 'Sass'],
    category: ['exploration'],
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/MAV---Movie-Vue-App' }],
    status: 'completed'
  },
  {
    id: 'phonesell',
    title: 'PhoneSell — Phone Sales App',
    description: 'A Vue 2 phone sales application with Bootstrap-Vue UI.',
    longDescription: 'A Vue 2 based phone sales application featuring product listing, shopping cart, and routing. Built with Bootstrap-Vue for responsive UI components and Axios for API communication.',
    tech: ['Vue 2', 'Vue Router', 'Bootstrap-Vue', 'Axios'],
    category: ['exploration'],
    image: '/img/projects/placeholder.svg',
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
    image: '/img/projects/placeholder.svg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/reactapp-pokebox' }],
    status: 'completed'
  }
]
