export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'soft' | 'language'
  icon: string
}

export const skills: Skill[] = [
  { name: 'Vue.js / Nuxt', level: 95, category: 'frontend', icon: 'mdi:vuejs' },
  { name: 'React / Next.js', level: 80, category: 'frontend', icon: 'mdi:react' },
  { name: 'Solid.js', level: 65, category: 'frontend', icon: 'mdi:react' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: 'mdi:language-typescript' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: 'mdi:language-javascript' },
  { name: 'TailwindCSS', level: 95, category: 'frontend', icon: 'mdi:tailwind' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: 'mdi:bootstrap' },
  { name: 'Mantine', level: 70, category: 'frontend', icon: 'mdi:react' },
  { name: 'HTML5 / CSS3', level: 95, category: 'frontend', icon: 'mdi:language-html5' },
  { name: 'Pinia / Vuex', level: 85, category: 'frontend', icon: 'mdi:vuejs' },
  { name: 'Vuetify', level: 85, category: 'frontend', icon: 'mdi:vuetify' },
  { name: 'jQuery', level: 75, category: 'frontend', icon: 'mdi:language-javascript' },
  { name: 'SEO / Responsive Design', level: 80, category: 'frontend', icon: 'mdi:google' },
  { name: 'Node.js / Express', level: 75, category: 'backend', icon: 'mdi:nodejs' },
  { name: 'RESTful APIs', level: 85, category: 'backend', icon: 'mdi:api' },
  { name: 'Stripe', level: 60, category: 'backend', icon: 'lucide:credit-card' },
  { name: 'PostgreSQL / MySQL', level: 65, category: 'backend', icon: 'mdi:database' },
  { name: 'Git (GitHub, GitLab, Bitbucket)', level: 90, category: 'tools', icon: 'mdi:git' },
  { name: 'Axios / SWR / ofetch', level: 85, category: 'tools', icon: 'mdi:api' },
  { name: 'Vite', level: 85, category: 'tools', icon: 'mdi:lightning-bolt' },
  { name: 'Docker', level: 60, category: 'tools', icon: 'mdi:docker' },
  { name: 'Jira / Trello', level: 75, category: 'tools', icon: 'mdi:jira' },
  { name: 'Postman / Insomnia', level: 80, category: 'tools', icon: '/img/skills/postman.svg' },
  { name: 'VS Code / Windsurf', level: 90, category: 'tools', icon: 'mdi:visual-studio-code' },
  { name: 'Figma', level: 80, category: 'design', icon: '/img/skills/figma.svg' },
  { name: 'Adobe Photoshop', level: 70, category: 'design', icon: '/img/skills/adobephotoshop.svg' },
  { name: 'Problem Solving', level: 0, category: 'soft', icon: 'lucide:puzzle' },
  { name: 'Communication', level: 0, category: 'soft', icon: 'lucide:message-circle' },
  { name: 'Time Management', level: 0, category: 'soft', icon: 'lucide:clock' },
  { name: 'Collaboration', level: 0, category: 'soft', icon: 'lucide:users' },
  { name: 'Attention to Detail', level: 0, category: 'soft', icon: 'lucide:search' },
  { name: 'Adaptability', level: 0, category: 'soft', icon: 'lucide:refresh-cw' },
  { name: 'Indonesian', level: 100, category: 'language', icon: 'lucide:globe' },
  { name: 'English (B2 Intermediate)', level: 60, category: 'language', icon: 'lucide:globe' }
]
