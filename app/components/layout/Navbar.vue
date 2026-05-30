<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white/90 dark:bg-darker/90 backdrop-blur-md shadow-sm' : 'bg-transparent']"
  >
    <div class="container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <NuxtLink to="/" class="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          zulkariski
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <a v-for="link in links" :key="link.href" :href="link.href" class="text-sm font-medium text-dark dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
            {{ link.label }}
          </a>
          <ThemeToggle />
        </nav>

        <div class="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button @click="isOpen = !isOpen" class="p-2 text-dark dark:text-slate-300" :aria-label="isOpen ? 'Close menu' : 'Open menu'">
            <Icon v-if="isOpen" name="lucide:x" size="24" />
            <Icon v-else name="lucide:menu" size="24" />
          </button>
        </div>
      </div>
    </div>

    <Transition name="slide">
      <div v-if="isOpen" class="md:hidden bg-white dark:bg-dark border-t dark:border-slate-700">
        <div class="container py-4 flex flex-col gap-4">
          <a v-for="link in links" :key="link.href" :href="link.href" @click="isOpen = false" class="text-sm font-medium text-dark dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors py-2">
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const isScrolled = ref(false)
const isOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
