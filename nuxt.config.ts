export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/icon'],
  icon: {
    serverBundle: { collections: ['lucide', 'mdi'] }
  },
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'netlify-static' },
  site: { url: 'https://portfolio-v3.netlify.app' },
  app: {
    head: {
      title: 'Zulkariski Mauladi — Frontend Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Frontend Engineer with 4+ years of experience specializing in Vue & Nuxt. Experienced in POS, SaaS, and Enterprise System development.' },
        { property: 'og:title', content: 'Zulkariski Mauladi — Frontend Engineer' },
        { property: 'og:description', content: 'Frontend Engineer specializing in Vue, Nuxt, React & Next. Experience in POS, SaaS, and Enterprise Systems.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap' }
      ]
    }
  }
})
