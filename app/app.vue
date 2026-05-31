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
const FAV = { light: '/favicon_io_light', dark: '/favicon_io_dark' }

useHead({
  bodyAttrs: { class: 'antialiased' },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: `${FAV.light}/favicon.ico`, id: 'favicon-ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${FAV.light}/favicon-16x16.png`, id: 'favicon-16' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${FAV.light}/favicon-32x32.png`, id: 'favicon-32' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${FAV.light}/apple-touch-icon.png`, id: 'favicon-apple' },
  ]
})

onMounted(() => {
  const favicons = ['favicon-ico', 'favicon-16', 'favicon-32', 'favicon-apple']
  const updateFav = () => {
    const base = document.documentElement.classList.contains('dark') ? FAV.dark : FAV.light
    favicons.forEach(id => {
      const el = document.querySelector<HTMLLinkElement>(`link[id="${id}"]`)
      if (el) el.href = el.href.replace(FAV.light, base).replace(FAV.dark, base)
    })
  }

  const observer = new MutationObserver(updateFav)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  onUnmounted(() => observer.disconnect())

  const update = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
  }
  window.addEventListener('mousemove', update)
  onUnmounted(() => window.removeEventListener('mousemove', update))
})
</script>
