<template>
  <span
    class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium"
    :class="colorClass"
  >
    <Icon v-if="icon" :name="icon" width="14" height="14" />
    {{ label }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  icon?: string
  color?: 'vue' | 'react' | 'js' | 'ts' | 'node' | 'default'
}>()

const colorMap: Record<string, string> = {
  vue: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  react: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300',
  js: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  ts: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  node: 'bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300',
  default: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
}

const colorClass = computed(() => colorMap[props.color ?? 'default'])
</script>
