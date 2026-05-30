import { experiences } from '~/data/experience'

export const useExperience = () => {
  return { experiences: computed(() => experiences) }
}
