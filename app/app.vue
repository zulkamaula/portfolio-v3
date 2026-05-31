<template>
  <UApp>
    <div class="min-h-screen relative">
      <div class="absolute top-0 left-0 w-full h-[60vh] pointer-events-none -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[120px]"></div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>
      <div class="fixed inset-0 pointer-events-none -z-10 cursor-glow" />
      <Navbar />
      <NuxtPage />
      <Footer />
      <BackToTop />
    </div>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased'
  }
})

onMounted(() => {
  const update = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
  }
  window.addEventListener('mousemove', update)
  onUnmounted(() => window.removeEventListener('mousemove', update))
})
</script>
