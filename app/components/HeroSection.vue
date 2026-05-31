<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div class="flex-1 text-center lg:text-left">
          <p class="text-primary font-semibold text-lg mb-2">Hi there.. 👋, I'm</p>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white mb-4">
            <span class="inline-block">{{ displayedText }}</span>
            <span class="animate-pulse text-primary">|</span>
          </h1>

          <h2 class="text-lg md:text-xl text-secondary dark:text-slate-400 mb-6">
            Frontend Engineer
            <span class="text-dark dark:text-slate-300 font-semibold">| Vue/Nuxt.js | POS & SaaS Platform</span>
          </h2>

          <p class="text-secondary dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Engineer with <span class="font-semibold text-dark dark:text-white">4+ years</span> of experience building SaaS and POS
            web applications using <span class="font-semibold text-dark dark:text-white">Vue.js, Nuxt, and TailwindCSS</span>.
            Successfully developed 4+ internal tools and POS systems, improving store operational efficiency by up to 70%.
          </p>

          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#contact" class="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Get In Touch
            </a>
            <a href="#portfolio" class="px-8 py-3 border border-slate-300 dark:border-slate-600 text-dark dark:text-slate-300 font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300">
              View My Work
            </a>
          </div>

          <div class="flex items-center gap-8 mt-12 justify-center lg:justify-start">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-dark dark:text-white">
                {{ stat.value }}{{ stat.suffix }}
              </div>
              <div class="text-xs text-secondary dark:text-slate-500 uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 photo-ring">
            <div class="w-full h-full rounded-full overflow-hidden shadow-xl">
              <img src="/img/self-pict-zulka.png" alt="Zulkariski Mauladi" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: 4, suffix: '+', label: 'Years Exp' },
  { value: 14, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '', label: 'Frameworks' },
  { value: 3, suffix: '+', label: 'Domains' }
]

const words = ['Zulkariski Mauladi', 'Frontend Engineer', 'Vue & Nuxt Dev', 'POS & SaaS Builder']
const displayedText = ref('')
const wordIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

function typeEffect() {
  const current = words[wordIndex.value]!
  if (!isDeleting.value) {
    displayedText.value = current.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === current.length) {
      setTimeout(() => { isDeleting.value = true }, 2000)
      setTimeout(typeEffect, 2100)
      return
    }
    setTimeout(typeEffect, 80)
  } else {
    displayedText.value = current.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      wordIndex.value = (wordIndex.value + 1) % words.length
      setTimeout(typeEffect, 500)
      return
    }
    setTimeout(typeEffect, 40)
  }
}

onMounted(() => setTimeout(typeEffect, 500))
</script>

<style scoped>
.photo-ring::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  pointer-events: none;
  background: conic-gradient(from 15deg,
    transparent 0deg, transparent 25deg,
    rgba(20,184,166,0.3) 30deg,
    #14b8a6 45deg,
    #94a3b8 180deg,
    #94a3b8 315deg,
    rgba(148,163,184,0.3) 330deg,
    transparent 335deg, transparent 360deg);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
}
</style>

