<template>
  <Transition name="toast">
    <div
      v-if="visible"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-xl text-sm font-medium"
      :class="type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  message: string
  type: 'success' | 'error'
  visible: boolean
}>()
</script>

<style scoped>
.toast-enter-active, .toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
