export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'design'
  icon: string
}

export const skills: Skill[] = [
  { name: 'Vue.js / Nuxt', level: 95, category: 'frontend', icon: 'mdi:vuejs' },
  { name: 'React / Next.js', level: 80, category: 'frontend', icon: 'mdi:react' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: 'mdi:language-typescript' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: 'mdi:language-javascript' },
  { name: 'TailwindCSS', level: 95, category: 'frontend', icon: 'mdi:tailwind' },
  { name: 'HTML5 / CSS3', level: 95, category: 'frontend', icon: 'mdi:language-html5' },
  { name: 'Pinia / Vuex', level: 85, category: 'frontend', icon: 'mdi:vuejs' },
  { name: 'Vuetify', level: 85, category: 'frontend', icon: 'mdi:vuetify' },
  { name: 'Node.js / Express', level: 75, category: 'backend', icon: 'mdi:nodejs' },
  { name: 'REST API', level: 80, category: 'backend', icon: 'mdi:api' },
  { name: 'Socket.io', level: 70, category: 'backend', icon: 'mdi:socketio' },
  { name: 'PostgreSQL / MySQL', level: 65, category: 'backend', icon: 'mdi:database' },
  { name: 'Git / GitHub', level: 90, category: 'tools', icon: 'mdi:git' },
  { name: 'Docker', level: 60, category: 'tools', icon: 'mdi:docker' },
  { name: 'Figma', level: 80, category: 'design', icon: 'mdi:figma' },
  { name: 'Adobe Photoshop', level: 70, category: 'design', icon: 'mdi:adobe-photoshop' },
  { name: 'Postman', level: 80, category: 'tools', icon: 'mdi:postman' },
  { name: 'npm / pnpm', level: 90, category: 'tools', icon: 'mdi:npm' }
]
