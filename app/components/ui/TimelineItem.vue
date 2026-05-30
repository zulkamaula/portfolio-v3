<template>
  <div class="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0">
    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-darker"></div>
    <div class="flex items-center gap-2 mb-1">
      <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{{ typeLabel }}</span>
      <span v-if="current" class="text-xs font-medium text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">Current</span>
    </div>
    <h3 class="text-lg font-bold text-dark dark:text-white">{{ role }}</h3>
    <p class="text-primary font-medium">{{ company }}</p>
    <p class="text-sm text-secondary dark:text-slate-500 mb-3">{{ period }}</p>
    <ul class="space-y-2 mb-3">
      <li v-for="(desc, j) in descriptions" :key="j" class="text-sm text-secondary dark:text-slate-400 flex gap-2">
        <span class="text-primary mt-1 shrink-0">&#9656;</span>
        {{ desc }}
      </li>
    </ul>
    <div class="flex flex-wrap gap-1.5">
      <TechBadge v-for="tech in tech" :key="tech" :label="tech" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string
  company: string
  period: string
  typeLabel: string
  descriptions: string[]
  tech: string[]
  current?: boolean
}>()
</script>
