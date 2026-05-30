<template>
  <a
    :href="href"
    target="_blank"
    :aria-label="label"
    class="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 border border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Icon :name="icon" width="18" height="18" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  icon: string
  label: string
}>()
</script>
