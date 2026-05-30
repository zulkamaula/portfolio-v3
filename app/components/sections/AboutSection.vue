<template>
  <section id="about" class="section-padding relative">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-2">About Me</p>
          <h2 class="section-title mb-6 text-balance">
            The quirky individual with an eclectic flair!
          </h2>

          <div class="space-y-4 text-secondary dark:text-slate-400 leading-relaxed">
            <p>
              A seasoned Frontend Engineer with <span class="font-semibold text-dark dark:text-white">4+ years of experience</span>
              specializing in <span class="font-semibold text-dark dark:text-white">Vue.js & Nuxt</span> ecosystem.
              I've built and maintained POS systems, SaaS platforms, and enterprise-level applications
              that serve thousands of users daily.
            </p>
            <p>
              Beyond Vue/Nuxt, I have hands-on experience with <span class="font-semibold text-dark dark:text-white">React, Next.js, and Solid.js</span>,
              allowing me to adapt quickly to any frontend stack. I hold a Bachelor's degree in IT
              and combine technical expertise with strong UI/UX sensibilities.
            </p>
            <p>
              I'm driven by the desire to craft intuitive, performant applications that make a real impact.
              Whether it's optimizing a POS checkout flow or architecting a multi-tenant SaaS dashboard,
              I bring precision and passion to every project.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-6">
            <TechBadge v-for="tech in coreTechs" :key="tech.label" :label="tech.label" :icon="tech.icon" :color="tech.color" />
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-dark dark:text-white mb-6">Let's Connect</h3>
          <p class="text-secondary dark:text-slate-400 mb-6">Let's get in touch with my social media:</p>

          <div class="flex gap-3">
            <SocialIcon v-for="s in socials" :key="s.label" :href="s.href" :icon="s.icon" :label="s.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const coreTechs = [
  { label: 'Vue.js', icon: 'mdi:vuejs', color: 'vue' },
  { label: 'Nuxt', icon: 'mdi:nuxt', color: 'vue' },
  { label: 'React', icon: 'mdi:react', color: 'react' },
  { label: 'TypeScript', icon: 'mdi:language-typescript', color: 'ts' },
  { label: 'Node.js', icon: 'mdi:nodejs', color: 'node' },
  { label: 'TailwindCSS', icon: 'mdi:tailwind', color: 'default' }
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/zulkamaula', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zulkamaula', icon: 'mdi:linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/zulkamaula_/', icon: 'mdi:instagram' }
]
</script>
