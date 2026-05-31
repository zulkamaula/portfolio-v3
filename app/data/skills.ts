export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'soft' | 'language'
  icon: string
}

export const skills: Skill[] = [
  { name: 'Vue.js / Nuxt', level: 95, category: 'frontend', icon: '/img/skills/vuedotjs.svg' },
  { name: 'React / Next.js', level: 65, category: 'frontend', icon: '/img/skills/react.svg' },
  { name: 'Solid.js', level: 75, category: 'frontend', icon: '/img/skills/Solidjs.svg' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '/img/skills/typescript.svg' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: '/img/skills/javascript.svg' },
  { name: 'TailwindCSS', level: 95, category: 'frontend', icon: '/img/skills/tailwindcss.svg' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: '/img/skills/bootstrap.svg' },
  { name: 'Mantine', level: 60, category: 'frontend', icon: '/img/skills/mantine.svg' },
  { name: 'HTML5 / CSS3', level: 95, category: 'frontend', icon: '/img/skills/html5.svg' },
  { name: 'Pinia / Vuex', level: 85, category: 'frontend', icon: '/img/skills/pinia.svg' },
  { name: 'Vuetify', level: 85, category: 'frontend', icon: '/img/skills/vuetify.svg' },
  { name: 'jQuery', level: 75, category: 'frontend', icon: '/img/skills/jquery.svg' },
  { name: 'SEO / Responsive Design', level: 80, category: 'frontend', icon: 'mdi:google' },
  { name: 'Node.js / Express', level: 75, category: 'backend', icon: '/img/skills/nodedotjs.svg' },
  { name: 'RESTful APIs', level: 85, category: 'backend', icon: 'mdi:api' },
  { name: 'Stripe', level: 60, category: 'backend', icon: '/img/skills/stripe.svg' },
  { name: 'Firebase', level: 60, category: 'backend', icon: '/img/skills/firebase.svg' },
  { name: 'PostgreSQL / MySQL', level: 45, category: 'backend', icon: '/img/skills/postgressql.svg' },
  { name: 'Git (GitHub, GitLab, Bitbucket)', level: 90, category: 'tools', icon: '/img/skills/git.svg' },
  { name: 'Axios / SWR / ofetch', level: 85, category: 'tools', icon: 'mdi:api' },
  { name: 'Vite', level: 85, category: 'tools', icon: 'mdi:lightning-bolt' },
  { name: 'Docker', level: 40, category: 'tools', icon: 'mdi:docker' },
  { name: 'Jira / Trello', level: 75, category: 'tools', icon: '/img/skills/trello.svg' },
  { name: 'Postman / Insomnia', level: 80, category: 'tools', icon: '/img/skills/postman.svg' },
  { name: 'Chart.js', level: 65, category: 'tools', icon: '/img/skills/chartdotjs.svg' },
  { name: 'VS Code / Windsurf', level: 90, category: 'tools', icon: '/img/skills/visualstudiocode.svg' },
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
