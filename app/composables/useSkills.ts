import { skills } from '~/data/skills'

export const useSkills = () => {
  return { skills: computed(() => skills) }
}
