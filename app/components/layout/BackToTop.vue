<template>
  <Transition name="fade">
    <button
      v-if="visible"
      @click="scrollToTop"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
    >
      <Icon name="lucide:chevron-up" size="20" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    visible.value = window.scrollY > 400
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
