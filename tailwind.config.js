/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      // breakpoints personalizados
      sm: "360px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"), // Para estilos de texto
    require("@tailwindcss/aspect-ratio"), // Clases para proporciones (como 16:9)
  ],
};
