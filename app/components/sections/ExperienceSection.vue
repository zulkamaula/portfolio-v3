<template>
  <section id="experience" class="section-padding bg-slate-50 dark:bg-dark/50 relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Experience</p>
        <h2 class="section-title mb-4">Where I've Worked</h2>
        <p class="section-subtitle">From POS to Enterprise — my journey across domains</p>
      </div>

      <div class="max-w-3xl mx-auto relative">
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-px"></div>

        <div v-for="(exp, i) in experiences" :key="i" class="relative mb-12 last:mb-0">
          <div class="flex flex-col md:flex-row items-start gap-6" :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            <div class="hidden md:flex w-1/2" :class="i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'">
              <div v-if="i % 2 === 0" class="text-right">
                <div class="flex items-center gap-2 justify-end mb-1">
                  <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{{ exp.typeLabel }}</span>
                  <span v-if="exp.current" class="text-xs font-medium text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">Current</span>
                </div>
                <h3 class="text-lg font-bold text-dark dark:text-white">{{ exp.role }}</h3>
                <p class="text-primary font-medium">{{ exp.company }}</p>
                <p class="text-sm text-secondary dark:text-slate-500 mt-1">{{ exp.period }}</p>
              </div>
            </div>

            <div class="md:hidden">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{{ exp.typeLabel }}</span>
                <span v-if="exp.current" class="text-xs font-medium text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">Current</span>
              </div>
              <h3 class="text-lg font-bold text-dark dark:text-white">{{ exp.role }}</h3>
              <p class="text-primary font-medium">{{ exp.company }}</p>
              <p class="text-sm text-secondary dark:text-slate-500 mt-1">{{ exp.period }}</p>
            </div>

            <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md shrink-0 z-10 mx-auto md:mx-0">
              <Icon :name="exp.icon" size="18" />
            </div>

            <div v-if="i % 2 !== 0" class="hidden md:block w-1/2 pl-8">
              <ul class="space-y-2">
                <li v-for="(desc, j) in exp.descriptions" :key="j" class="text-sm text-secondary dark:text-slate-400 flex gap-2">
                  <span class="text-primary mt-1 shrink-0">&#9656;</span>
                  {{ desc }}
                </li>
              </ul>
              <div class="flex flex-wrap gap-1.5 mt-3">
                <TechBadge v-for="tech in exp.tech" :key="tech" :label="tech" />
              </div>
            </div>

            <div v-if="i % 2 === 0" class="hidden md:block w-1/2"></div>
            <div v-if="i % 2 !== 0" class="hidden md:block w-1/2"></div>
          </div>

          <div v-if="i % 2 === 0" class="md:hidden mt-3 ml-14">
            <ul class="space-y-2">
              <li v-for="(desc, j) in exp.descriptions" :key="j" class="text-sm text-secondary dark:text-slate-400 flex gap-2">
                <span class="text-primary mt-1 shrink-0">&#9656;</span>
                {{ desc }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <TechBadge v-for="tech in exp.tech" :key="tech" :label="tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = computed(() => useExperience().experiences.value.map(e => ({
  ...e,
  icon: e.type === 'pos' ? 'lucide:shopping-cart' : e.type === 'saas' ? 'lucide:cloud' : e.type === 'enterprise' ? 'lucide:building-2' : 'lucide:briefcase',
  typeLabel: e.type === 'pos' ? 'POS' : e.type === 'saas' ? 'SaaS' : e.type === 'enterprise' ? 'Enterprise' : 'Freelance'
})))
</script>
