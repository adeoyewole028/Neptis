// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: false,

  app: {
    head: {
      title: "Welcome to Neptis",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Transform Your Images into Stunning Websites with Neptis",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined",
        },
      ],
    },
  },

  css: ["~/assets/css/global.css"],
  modules: ["@nuxthq/ui"],
  devtools: { enabled: true },
});
