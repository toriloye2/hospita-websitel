// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 8000
  },

  srcDir: 'app/',

  dir: {
    public: 'app/public'
  },

  modules: [],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '~/assets/scss/main.scss'
  ],

  app: {
    head: {
      title: 'Unita Hospital - Quality Healthcare in Ikotun, Lagos',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Unita Hospital provides comprehensive healthcare services in Ikotun, Lagos. We accept major HMO providers and offer emergency services, maternity care, pediatrics, and more.'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap'
        }
      ]
    }
  },

  nitro: {
    preset: 'static'
  }
})
