<template>
  <footer class="bg-dark dark:bg-darker border-t border-slate-700/50">
    <div class="container py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-3xl font-bold text-white mb-4">ZRM</h2>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
            Frontend Engineer with 4+ years of experience building SaaS and POS
            web applications using Vue.js, Nuxt, and TailwindCSS.
          </p>
        </div>
        <div class="md:text-right">
          <h3 class="text-lg font-semibold text-white mb-4">Links</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="text-sm text-slate-400 hover:text-primary transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center justify-center gap-4 mt-12 mb-8">
        <SocialIcon v-for="s in socials" :key="s.label" :href="s.href" :icon="s.icon" :label="s.label" />
      </div>

      <p class="text-center text-xs text-slate-500 border-t border-slate-700/50 pt-8">
        Made with <span class="text-red-400">&#9829;</span> by
        <a href="https://github.com/zulkamaula" target="_blank" class="text-primary hover:underline">Zulkariski Mauladi</a>.
        &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/zulkamaula', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zulkamaula', icon: 'mdi:linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/zulkamaula_/', icon: 'mdi:instagram' }
]
</script>
