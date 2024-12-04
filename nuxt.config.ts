// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: [],
    },
  },
  googleFonts: {
    families: {
      "Dela+Gothic+One": [400],
      Poppins: true,
    },
    display: "swap",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vesp/nuxt-fontawesome",
  ],
  fontawesome: {
    icons: {
      brands: [
        "html5",
        "css3-alt",
        "js",
        "vuejs",
        "node",
        "instagram-square",
        "linkedin",
      ],
    },
  },
  css: ["~/assets/css/input.css"],
});
