<template>
  <section id="portfolio" class="section-padding relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Portfolio</p>
        <h2 class="section-title mb-4">Latest Projects</h2>
        <p class="section-subtitle">Case studies of my exploration and workplace projects</p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="f in filters"
          :key="f.value"
          @click="activeFilter = f.value"
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeFilter === f.value
            ? 'bg-primary text-white shadow-md'
            : 'bg-slate-100 dark:bg-slate-700 text-secondary dark:text-slate-300 hover:bg-primary/10'"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <article
          v-for="(project, i) in paginatedProjects" :key="project.id"
          class="group transition-all duration-700 ease-out"
          :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <NuxtLink :to="`/projects/${project.id}`" class="block">
            <div class="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700 aspect-video">
              <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                <div class="flex gap-2">
                  <span class="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-full">
                    {{ project.status }}
                  </span>
                  <span v-for="cat in project.category" :key="cat" class="text-xs font-medium text-white bg-dark/60 px-2 py-1 rounded-full">
                    {{ cat }}
                  </span>
                </div>
              </div>
              <div class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                <Icon name="lucide:image" size="40" />
              </div>
            </div>

            <div class="mt-4">
              <div class="flex flex-wrap gap-1.5 mb-2">
                <TechBadge v-for="tech in project.tech.slice(0, 3)" :key="tech" :label="tech" />
                <span v-if="project.tech.length > 3" class="text-xs text-secondary dark:text-slate-500 self-center">+{{ project.tech.length - 3 }}</span>
              </div>
              <h3 class="text-lg font-bold text-dark dark:text-white group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-secondary dark:text-slate-400 mt-1 line-clamp-2">{{ project.description }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>

      <div v-if="totalPages > 1" class="flex items-center justify-center gap-4 mt-12">
        <button
          :disabled="currentPage <= 1"
          @click="currentPage--"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="currentPage <= 1
            ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
            : 'text-dark dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'"
        >
          <Icon name="lucide:chevron-left" size="16" class="inline" />
          Prev
        </button>

        <span class="text-sm text-secondary dark:text-slate-500">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <button
          :disabled="currentPage >= totalPages"
          @click="currentPage++"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="currentPage >= totalPages
            ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
            : 'text-dark dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'"
        >
          Next
          <Icon name="lucide:chevron-right" size="16" class="inline" />
        </button>
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
</script>
