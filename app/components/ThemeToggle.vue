<template>
  <button
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="relative w-14 h-7 rounded-full transition-all duration-300 shrink-0"
    :class="isDark ? 'bg-teal-600/30' : 'bg-slate-200'"
  >
    <span
      class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center"
      :class="isDark ? 'translate-x-7' : 'translate-x-0'"
    >
      <Icon :name="isDark ? 'lucide:moon' : 'lucide:sun'" size="14" class="text-teal-600" />
    </span>
  </button>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'portfolio-theme'
const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

function toggle() {
  isDark.value = !isDark.value
  localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  applyTheme()
}
</script>