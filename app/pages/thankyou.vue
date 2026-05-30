<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="container text-center py-24">
      <div class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
        <Icon name="lucide:check-check" size="40" class="text-primary" />
      </div>
      <h1 class="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Thank You!</h1>
      <p class="text-secondary dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        Your message has been sent successfully. I'll get back to you within 24 hours.
        Cheers! 🍻
      </p>
      <NuxtLink to="/" class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:opacity-90 transition-all">
        <Icon name="lucide:arrow-left" size="16" />
        Back to Home
      </NuxtLink>
    </div>
  </main>
</template>
