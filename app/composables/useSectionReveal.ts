export const useSectionReveal = (sectionId: string, threshold = 0.15) => {
  const isVisible = ref(false)

  onMounted(() => {
    const el = document.querySelector(sectionId)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold }
    )
    observer.observe(el)
    onUnmounted(() => observer.disconnect())
  })

  return isVisible
}
