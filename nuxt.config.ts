import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@pinia/nuxt', '@nuxtjs/supabase', '@nuxt/image'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    // Options
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '',
      include: [''],
      exclude: [''],
      saveRedirectToCookie: false,
    }
  },
  devtools: { enabled: false }
})