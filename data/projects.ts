export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: 'vue' | 'react' | 'enterprise' | 'exploration'
  image: string
  links: { label: string; url: string }[]
  status: 'completed' | 'development' | 'workplace'
}

export const projects: Project[] = [
  {
    id: 'webpos-pro',
    title: 'WebPOS Pro',
    description: 'A comprehensive Point of Sale system built for multi-store operations with real-time inventory management, sales analytics, and role-based access control.',
    longDescription: 'A comprehensive Point of Sale system built for multi-store operations with real-time inventory management, sales analytics, and role-based access control. Features include offline-first capability, barcode scanning integration, and customizable receipt templates.',
    tech: ['Vue 3', 'Pinia', 'TypeScript', 'TailwindCSS', 'Chart.js', 'IndexedDB'],
    category: 'enterprise',
    image: '/img/projects/webpos.jpg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'development'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Multi-tenant dashboard with real-time data visualization, user management, and subscription analytics for SaaS platforms.',
    longDescription: 'A multi-tenant analytics dashboard designed for SaaS platforms. Features include real-time data visualization with Chart.js, user role management, subscription lifecycle tracking, and customizable widget layouts.',
    tech: ['Nuxt 3', 'VueUse', 'Chart.js', 'TailwindCSS', 'TypeScript'],
    category: 'enterprise',
    image: '/img/projects/saas-dashboard.jpg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'development'
  },
  {
    id: 'enterprise-hrm',
    title: 'Enterprise HRM System',
    description: 'Employee management system for HR operations including attendance tracking, payroll, performance reviews, and organizational charts.',
    longDescription: 'An internal employee management system developed for head office HR operations. Handles attendance tracking, payroll processing, performance review cycles, and dynamic organizational chart rendering.',
    tech: ['Vue 2', 'Vuetify', 'Vuex', 'ExpressJS', 'EJS', 'MySQL'],
    category: 'enterprise',
    image: '/img/projects/hrm.jpg',
    links: [],
    status: 'workplace'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Storefront',
    description: 'Full-featured e-commerce platform with product catalog, cart, checkout flow, and admin panel using Next.js.',
    longDescription: 'A full-featured e-commerce platform showcasing server-side rendering capabilities with Next.js. Includes product catalog with advanced filtering, shopping cart with persistent state, Stripe checkout integration, and an admin dashboard.',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'Prisma'],
    category: 'react',
    image: '/img/projects/ecommerce.jpg',
    links: [{ label: 'Live Demo', url: 'https://github.com/zulkamaula' }, { label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'completed'
  },
  {
    id: 'mav-movie',
    title: 'MAV — Movie Vue App',
    description: 'A movie discovery web app built with Vue 2 that consumes the IMDB API for film listings and search.',
    longDescription: 'An exploratory web application to discover and search movies. Built with Vue 2, consuming the IMDB API for real-time film data with search, filtering, and detail views.',
    tech: ['Vue 2', 'Vuex', 'Axios', 'TailwindCSS'],
    category: 'vue',
    image: '/img/projects/mav.jpg',
    links: [{ label: 'Live Demo', url: 'https://mymav.netlify.app/' }, { label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'completed'
  },
  {
    id: 'phonesell',
    title: 'PhoneSell',
    description: 'A mobile phone commercial application built with VueJS following a Figma UI/UX design with JSON data API integration.',
    longDescription: 'A mobile phone commerce application built from a Figma UI/UX design. Features product listings, search, and cart functionality with JSON data API consumption.',
    tech: ['Vue 2', 'Vuex', 'Axios', 'TailwindCSS'],
    category: 'vue',
    image: '/img/projects/phonesell.jpg',
    links: [{ label: 'Live Demo', url: 'https://phonesell.netlify.app/' }, { label: 'GitHub', url: 'https://github.com/zulkamaula' }],
    status: 'completed'
  },
  {
    id: 'slr-app',
    title: 'SLRApp',
    description: 'A GitHub repository browser built with ReactJS that displays user repos from search queries.',
    longDescription: 'Show List Repo App — an exploratory application to display a list of repos owned by a user from the search field. Built with ReactJS and GitHub API integration.',
    tech: ['React', 'CSS3', 'GitHub API'],
    category: 'react',
    image: '/img/projects/slrapp.jpg',
    links: [{ label: 'GitHub', url: 'https://github.com/zulkamaula/slrapp' }],
    status: 'completed'
  },
  {
    id: 'assessment-dashboard',
    title: 'Assessment Point Dashboard',
    description: 'An internal dashboard for head office assessment management, built with ExpressJS and EJS.',
    longDescription: 'An internal dashboard developed at my workplace for head office assessment point management. Handles employee evaluation data with reporting and visualization features.',
    tech: ['ExpressJS', 'EJS', 'Bootstrap', 'MySQL'],
    category: 'enterprise',
    image: '/img/projects/assessment.jpg',
    links: [],
    status: 'workplace'
  }
]
