<template>
  <section id="portfolio" class="section-padding relative">
    <div class="container">
      <div class="text-center mb-12 sm:mb-16">
        <p class="section-label">Portfolio</p>
        <h2 class="section-title mb-4">Latest Projects</h2>
        <p class="section-subtitle">Case studies of my exploration and workplace projects</p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
        <UButton
          v-for="f in filters"
          :key="f.value"
          :color="activeFilter === f.value ? 'primary' : 'neutral'"
          :variant="activeFilter === f.value ? 'solid' : 'soft'"
          size="sm"
          class="rounded-full"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </UButton>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        <article
          v-for="(project, i) in paginatedProjects" :key="project.id"
          class="group relative rounded-xl transition-all duration-700 ease-out"
          :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <NuxtLink :to="`/projects/${project.id}`" class="block">
            <div class="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700 aspect-video">
              <img v-if="project.image !== '/img/projects/placeholder.svg'" :src="project.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              <div v-else class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                <Icon name="lucide:image" size="40" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10 flex items-end p-4">
                <div class="flex gap-2">
                  <UBadge color="neutral" variant="solid" size="sm">
                    {{ project.status }}
                  </UBadge>
                  <UBadge v-for="cat in project.category" :key="cat" color="neutral" variant="soft" size="sm">
                    {{ cat }}
                  </UBadge>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <TechBadge v-for="tech in project.tech.slice(0, 3)" :key="tech" :label="tech" />
                <span v-if="project.tech.length > 3" class="text-xs text-secondary dark:text-slate-500 self-center">+{{ project.tech.length - 3 }}</span>
              </div>
              <h3 class="text-lg font-bold text-dark dark:text-white group-hover:text-primary truncate">
                {{ project.title }}
              </h3>
              <p class="text-sm text-secondary dark:text-slate-400 mt-1 line-clamp-2">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>

      <div v-if="totalPages > 1" class="flex justify-center mt-8 sm:mt-12">
        <UPagination
          v-model:page="currentPage"
          :total="filteredProjects.length"
          :items-per-page="pageSize"
          :sibling-count="1"
          size="sm"
          color="neutral"
          active-color="primary"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'POS', value: 'pos' },
  { label: 'SaaS', value: 'saas' },
  { label: 'Exploration', value: 'exploration' }
]

const sectionVisible = useSectionReveal('#portfolio')

const pageSize = 6
const currentPage = ref(1)

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  const { projects } = usePortfolio()
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => p.category.includes(activeFilter.value as any))
})

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / pageSize))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProjects.value.slice(start, start + pageSize)
})

watch(activeFilter, () => { currentPage.value = 1 })

watch(currentPage, () => {
  const el = document.getElementById('portfolio')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
})
</script>
