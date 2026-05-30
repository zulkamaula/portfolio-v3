<template>
  <div class="rounded-xl bg-slate-100 dark:bg-slate-700 overflow-hidden group cursor-pointer">
    <NuxtLink :to="`/projects/${project.id}`" class="block">
      <div class="aspect-video relative overflow-hidden">
        <div class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
          <Icon name="lucide:image" size="48" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div class="flex gap-2">
            <span class="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-full">{{ project.status }}</span>
          </div>
        </div>
      </div>
      <div class="p-4">
        <div class="flex flex-wrap gap-1.5 mb-2">
          <TechBadge v-for="tech in project.tech.slice(0, 3)" :key="tech" :label="tech" />
          <span v-if="project.tech.length > 3" class="text-xs text-secondary dark:text-slate-500 self-center">+{{ project.tech.length - 3 }}</span>
        </div>
        <h3 class="text-lg font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{{ project.title }}</h3>
        <p class="text-sm text-secondary dark:text-slate-400 mt-1 line-clamp-2">{{ project.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{ project: Project }>()
</script>
