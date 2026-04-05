// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Mi tienda de servicios",
      meta: [
        {
          name: 'description',
          content:"Bienvenido a mi tienda de servicios generales"
        }
      ]
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', 'nuxt-icons'],

  ///SPA Single Page App
  // ssr:false,
  // nitro:{
  //   preset:'static',
  //   static: true
  // }
  nitro: {
    prerender: {
      routes: ['/', '/about', '/products', '/contact', '/pricing'],
      ignore: ['/dashboard', '/dasboard/**'],
      //Habilitar el crawling para descubrir enlaces automaticamente
      crawlLinks: true
    }
  }
})

