// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})
