<template>
  <main class="pt-24">
    <div v-if="project" class="container py-12">
      <NuxtLink to="/#portfolio" class="inline-flex items-center gap-2 text-sm text-secondary dark:text-slate-400 hover:text-primary transition-colors mb-8">
        <Icon name="lucide:arrow-left" size="16" />
        Back to Portfolio
      </NuxtLink>

      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <div class="aspect-video rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 overflow-hidden">
            <Icon name="lucide:image" size="64" />
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            <TechBadge v-for="tech in project.tech" :key="tech" :label="tech" />
          </div>

          <h1 class="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">{{ project.title }}</h1>

          <div class="flex gap-2 mb-6">
            <span v-for="cat in project.category" :key="cat" class="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{{ cat }}</span>
            <span class="text-xs font-medium px-3 py-1 rounded-full"
              :class="project.status === 'completed' ? 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30' : project.status === 'development' ? 'text-amber-500 bg-amber-100 dark:bg-amber-900/30' : 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'"
            >
              {{ project.status === 'completed' ? 'Completed' : project.status === 'development' ? 'In Development' : 'Workplace Project' }}
            </span>
          </div>

          <p class="text-secondary dark:text-slate-400 leading-relaxed mb-8">{{ project.longDescription }}</p>

          <div class="flex flex-wrap gap-3">
            <template v-for="link in project.links" :key="link.label">
              <a v-if="!link.private" :href="link.url" target="_blank"
                class="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium rounded-full hover:opacity-90 transition-all text-sm"
              >
                <Icon :name="link.label === 'GitHub' ? 'mdi:github' : 'lucide:external-link'" size="16" />
                {{ link.label }}
              </a>
              <span v-else
                class="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 font-medium rounded-full text-sm cursor-not-allowed"
              >
                <Icon name="lucide:lock" size="16" />
                {{ link.label }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container py-24 text-center">
      <p class="text-secondary dark:text-slate-400">Project not found.</p>
      <NuxtLink to="/#portfolio" class="text-primary hover:underline mt-4 inline-block">Back to Portfolio</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { projects } = usePortfolio()
const project = computed(() => projects.value.find(p => p.id === route.params.slug))

if (!project.value) {
  throw createError({ statusCode: 404, message: 'Project not found' })
}

useHead({
  title: `${project.value.title} — Zulkariski Mauladi`,
  meta: [{ name: 'description', content: project.value.description }]
})
</script>
