<template>
  <section id="experience" class="section-padding bg-slate-50 dark:bg-dark/50 relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Experience</p>
        <h2 class="section-title mb-4">Where I've Worked</h2>
        <p class="section-subtitle">From POS to Enterprise — my journey across domains</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
          v-for="(exp, i) in experiences" :key="i"
          class="relative flex gap-5 md:gap-8 pb-12 last:pb-0 transition-all duration-700 ease-out"
          :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="relative flex flex-col items-center shrink-0">
            <div class="relative z-10 w-10 h-10 rounded-full bg-primary text-white shadow-md flex items-center justify-center">
              <Icon :name="exp.icon" size="18" />
            </div>
            <div v-if="i < experiences.length - 1" class="absolute top-10 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div class="flex-1 min-w-0 pt-1">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{{ exp.typeLabel }}</span>
            </div>
            <h3 class="text-lg font-bold text-dark dark:text-white">{{ exp.role }}</h3>
            <p class="text-primary font-medium">{{ exp.company }}</p>
            <p class="text-sm text-secondary dark:text-slate-500 mt-1">{{ exp.period }}</p>
            <ul class="space-y-2 mt-3">
              <li v-for="(desc, j) in exp.descriptions" :key="j" class="text-sm text-secondary dark:text-slate-400 flex gap-2">
                <span class="text-primary mt-1 shrink-0">&#9656;</span>
                {{ desc }}
              </li>
            </ul>
            <div v-if="exp.tech?.length" class="flex flex-wrap gap-1.5 mt-3">
              <TechBadge v-for="tech in exp.tech" :key="tech" :label="tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionVisible = useSectionReveal('#experience')

const experiences = computed(() => useExperience().experiences.value.map(e => ({
  ...e,
  icon: e.type === 'pos' ? 'lucide:shopping-cart' : e.type === 'saas' ? 'lucide:cloud' : e.type === 'enterprise' ? 'lucide:building-2' : 'lucide:briefcase',
  typeLabel: e.type === 'pos' ? 'POS' : e.type === 'saas' ? 'SaaS' : e.type === 'enterprise' ? 'Enterprise' : 'Freelance'
})))
</script>
