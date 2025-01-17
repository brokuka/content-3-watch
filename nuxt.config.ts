// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'template-copyright', '@nuxt/content'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2025-01-17',
})