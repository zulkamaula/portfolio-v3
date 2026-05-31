<template>
  <section id="skills" class="section-padding bg-slate-50 dark:bg-dark/50 relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="section-label">Skills</p>
        <h2 class="section-title mb-4">Technology & Tools</h2>
        <p class="section-subtitle">Technologies I use to build modern web applications</p>
      </div>

      <div class="max-w-4xl mx-auto space-y-10">
        <div
          v-for="(group, index) in groupedSkills"
          :key="group.category"
          class="skill-category transition-all duration-300"
          :class="activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <h3 class="text-lg font-semibold text-dark dark:text-white mb-6 flex items-center gap-2">
            <Icon :name="group.icon" size="20" class="text-primary" />
            {{ group.category }}
          </h3>

          <template v-if="group.category === 'Soft Skills'">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills" :key="skill.name"
                class="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
              >
                <Icon :name="skill.icon" size="14" class="text-primary" />
                {{ skill.name }}
              </span>
            </div>
          </template>

          <template v-else>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="skill in group.skills" :key="skill.name" class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-dark dark:text-slate-300 flex items-center gap-2">
                    <img v-if="skill.icon.startsWith('/')" :src="skill.icon" class="w-4 h-4" alt="" />
                    <Icon v-else :name="skill.icon" size="16" />
                    {{ skill.name }}
                  </span>
                  <span class="text-xs text-secondary dark:text-slate-500">{{ skill.level }}%</span>
                </div>
                <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-linear-to-r from-primary to-emerald-400 rounded-full transition-all duration-500 ease-out"
                    :style="{ width: activeIndex === index ? skill.level + '%' : '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref(-1)

onMounted(() => {
  const onScroll = () => {
    const vpCenter = window.innerHeight / 2
    const categories = document.querySelectorAll<HTMLElement>('.skill-category')
    let found = -1
    for (let i = 0; i < categories.length; i++) {
      const el = categories[i]
      if (!el) break
      const top = el.getBoundingClientRect().top
      if (top > vpCenter) break
      found = i
    }
    activeIndex.value = found
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const groupedSkills = computed(() => {
  const allSkills = useSkills().skills.value
  const groups = [
    { category: 'Soft Skills', icon: 'lucide:heart', skills: allSkills.filter(s => s.category === 'soft') },
    { category: 'Frontend', icon: 'lucide:monitor', skills: allSkills.filter(s => s.category === 'frontend') },
    { category: 'Backend & API', icon: 'lucide:server', skills: allSkills.filter(s => s.category === 'backend') },
    { category: 'Tools & DevOps', icon: 'lucide:wrench', skills: allSkills.filter(s => s.category === 'tools') },
    { category: 'Design', icon: 'lucide:pencil-ruler', skills: allSkills.filter(s => s.category === 'design') },
    { category: 'Languages', icon: 'lucide:languages', skills: allSkills.filter(s => s.category === 'language') },
  ]
  return groups.filter(g => g.skills.length)
})
</script>