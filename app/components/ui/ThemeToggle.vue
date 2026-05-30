<template>
  <button
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="p-2 rounded-lg text-dark dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
  >
    <Icon v-if="isDark" name="lucide:moon" size="18" />
    <Icon v-else name="lucide:sun" size="18" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
