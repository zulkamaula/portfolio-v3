<template>
  <section id="experience" class="section-padding bg-slate-50 dark:bg-dark/50 relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="section-label">Experience</p>
        <h2 class="section-title mb-4">Where I've Worked</h2>
        <p class="section-subtitle">From POS to Enterprise — my journey across domains</p>
      </div>

      <UTimeline
        v-model="activeIndex"
        :items="timelineItems"
        size="md"
        color="primary"
        class="max-w-3xl mx-auto"
      >
        <template #title="{ item }">
          <h3 class="text-lg font-bold text-dark dark:text-white">{{ item.title }}</h3>
        </template>

        <template #description="{ item }">
          <p class="text-primary font-medium text-sm mb-3">{{ item.company }}</p>
          <ul class="space-y-2">
            <li v-for="(desc, j) in item.descriptions" :key="j" class="text-sm text-secondary dark:text-slate-400 flex gap-2">
              <span class="text-primary mt-1 shrink-0">&#9656;</span>
              {{ desc }}
            </li>
          </ul>
          <div v-if="item.tech?.length" class="flex flex-wrap gap-1.5 mt-3">
            <TechBadge v-for="tech in item.tech" :key="tech" :label="tech" />
          </div>
        </template>
      </UTimeline>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = computed(() => useExperience().experiences.value.map(e => ({
  ...e,
  icon: e.type === 'pos' ? 'i-lucide-shopping-cart' : e.type === 'saas' ? 'i-lucide-cloud' : e.type === 'enterprise' ? 'i-lucide-building-2' : 'i-lucide-briefcase',
  typeLabel: e.type === 'pos' ? 'POS' : e.type === 'saas' ? 'SaaS' : e.type === 'enterprise' ? 'Enterprise' : 'Freelance'
})))

const timelineItems = computed(() => experiences.value.map((e, i) => ({
  date: e.period,
  title: e.role,
  icon: e.icon,
  value: i,
  company: e.company,
  descriptions: e.descriptions,
  tech: e.tech
})))

const activeIndex = ref(0)

onMounted(() => {
  const section = document.getElementById('experience')
  if (!section) return

  const onScroll = () => {
    const rect = section.getBoundingClientRect()
    const total = timelineItems.value.length
    const vpCenter = window.innerHeight / 2
    const itemHeight = rect.height / total

    for (let i = 0; i < total; i++) {
      const indicator = rect.top + i * itemHeight
      const nextIndicator = rect.top + (i + 1) * itemHeight
      if (indicator <= vpCenter && nextIndicator > vpCenter) {
        activeIndex.value = i
        return
      }
    }

    if (rect.top + total * itemHeight <= vpCenter) {
      activeIndex.value = total - 1
    } else {
      activeIndex.value = 0
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>
