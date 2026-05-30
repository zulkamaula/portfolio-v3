<template>
  <div class="min-h-screen">
    <Navbar />
    <NuxtPage />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>
