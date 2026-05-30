<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-dark dark:text-slate-300 flex items-center gap-2">
        <Icon :name="skill.icon" size="16" class="text-slate-400" />
        {{ skill.name }}
      </span>
      <span class="text-xs text-secondary dark:text-slate-500">{{ skill.level }}%</span>
    </div>
    <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1000 ease-out"
        :style="{ width: skill.level + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ skill: Skill }>()
</script>
