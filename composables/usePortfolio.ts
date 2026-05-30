import { projects } from '~/data/projects'
import { experiences } from '~/data/experience'

export const usePortfolio = () => {
  const stats = computed(() => ({
    years: 4,
    projects: projects.length,
    enterprises: projects.filter(p => p.category === 'enterprise').length,
    frameworks: ['Vue', 'Nuxt', 'React', 'Next']
  }))

  const featuredProjects = computed(() => projects.filter(p => p.category !== 'exploration'))

  return {
    projects: computed(() => projects),
    featuredProjects,
    stats,
    experiences: computed(() => experiences)
  }
}
