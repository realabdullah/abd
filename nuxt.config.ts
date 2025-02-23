export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  compatibilityDate: "2025-02-23"
});