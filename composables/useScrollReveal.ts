export const useScrollReveal = () => {
  const observer = ref<IntersectionObserver | null>(null)

  const observe = (el: Element, options?: IntersectionObserverInit) => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, ...options }
    )
    observer.value.observe(el)
  }

  onUnmounted(() => observer.value?.disconnect())

  return { observe }
}
