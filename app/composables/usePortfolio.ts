import { projects } from '~/data/projects'

export const usePortfolio = () => {
  const stats = computed(() => ({
    years: 4,
    projects: projects.length,
    enterprises: projects.filter(p => p.category.includes('enterprise')).length,
    frameworks: ['Vue', 'Nuxt', 'React', 'Next']
  }))

  return {
    projects: computed(() => projects),
    stats
  }
}
