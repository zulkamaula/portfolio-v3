<template>
  <section id="contact" class="section-padding bg-slate-50 dark:bg-dark/50 relative">
    <div class="container">
      <div class="text-center mb-16">
        <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Contact</p>
        <h2 class="section-title mb-4">Get In Touch!</h2>
        <p class="section-subtitle">Have a project in mind? Let's build something great together.</p>
      </div>

      <form
        ref="formRef"
        netlify
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thankyou"
        class="max-w-xl mx-auto"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div class="space-y-6">
          <div>
            <label for="full-name" class="block text-sm font-semibold text-dark dark:text-white mb-2">Full Name</label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              required
              v-model="formData.name"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-semibold text-dark dark:text-white mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              v-model="formData.email"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-semibold text-dark dark:text-white mb-2">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              v-model="formData.subject"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Project Collaboration"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold text-dark dark:text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              v-model="formData.message"
              rows="5"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full py-3 bg-primary text-white font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Icon v-if="submitting" name="lucide:loader-circle" size="18" class="animate-spin" />
            <Icon v-else name="lucide:send" size="18" />
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const formRef = ref<HTMLFormElement>()

async function handleSubmit() {
  submitting.value = true
  try {
    const formDataObj = new FormData()
    formDataObj.append('form-name', 'contact')
    formDataObj.append('full-name', formData.name)
    formDataObj.append('email', formData.email)
    formDataObj.append('subject', formData.subject)
    formDataObj.append('message', formData.message)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString()
    })

    navigateTo('/thankyou')
  } catch (e) {
    alert('Something went wrong. Please try again.')
  } finally {
    submitting.value = false
  }
}
</script>
