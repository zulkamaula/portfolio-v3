<template>
  <section id="about" class="section-padding relative">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="section-label">About Me</p>
          <h2 class="section-title mb-6 text-balance">
            Crafting Digital Solutions with Precision
          </h2>

          <div class="space-y-4 text-secondary dark:text-slate-400 leading-relaxed">
            <p>
              A seasoned Frontend Engineer with <span class="font-semibold text-dark dark:text-white">4+ years</span> of experience
              building SaaS and POS web applications using <span class="font-semibold text-dark dark:text-white">Vue.js (2/3), Nuxt, and TailwindCSS</span>.
              Earned a promotion to Senior Staff in under 2 years by delivering 4+ internal tools and POS systems that improved
              store operational efficiency by up to 70%.
            </p>
            <p>
              I've worked across diverse domains — from toll road enterprise systems at PT. Jasamarga (Persero) Tbk
              to SaaS POS platforms at Upvendo (The Mazi Group) and restaurant digitization at Sarirasa Group.
              This breadth of experience has sharpened my ability to adapt quickly to any frontend stack and business context.
            </p>
            <p>
              I hold a <span class="font-semibold text-dark dark:text-white">Bachelor's Degree in Computer Science</span>
              from Indraprasta PGRI University (GPA 3.09) and combine technical expertise with strong UI/UX sensibilities.
              Beyond coding, I communicate effectively in English (EF SET B2 Upper Intermediate) and
              thrive in collaborative, cross-functional environments.
            </p>
            <p>
              Whether it's optimizing a POS checkout flow or architecting a multi-tenant SaaS dashboard,
              I bring precision and passion to every project.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 mt-6">
            <TechBadge v-for="tech in coreTechs" :key="tech.label" :label="tech.label" :color="tech.color" />
          </div>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-bold text-dark dark:text-white mb-6">Let's Connect</h3>
          <p class="text-secondary dark:text-slate-400 mb-6">Let's get in touch with my social media:</p>

          <div class="flex gap-3 justify-center">
            <SocialIcon v-for="s in socials" :key="s.label" :href="s.href" :icon="s.icon" :label="s.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const coreTechs = [
  { label: 'Vue.js', color: 'vue' as const },
  { label: 'Nuxt', color: 'vue' as const },
  { label: 'React', color: 'react' as const },
  { label: 'Next.js', color: 'react' as const },
  { label: 'TypeScript', color: 'ts' as const },
  { label: 'TailwindCSS', color: 'default' as const }
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/zulkamaula', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zulkamaula', icon: 'mdi:linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/zulkamaula_/', icon: 'mdi:instagram' }
]
</script>
