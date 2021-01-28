import dotenv from 'dotenv'

dotenv.config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '<%= projectName %>',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // https://github.com/SparingSoftware/nuxt-sparing-center
    [
      '@sparing-software/nuxt-sparing-center',
      {
        plugins: [<%- nuxtSparingCenter.plugins.map(plugin => `'${plugin}'`).join(', ') %>],
        serviceModule: true,
        baseImport: false,
        trailingSlash: false,
        axiosI18nHeader: <%= nuxtSparingCenter.axiosI18nHeader %>,
        axiosGenerateCache: <%= nuxtSparingCenter.axiosGenerateCache %>,
        styleResources: true,
        sassUtilsCollection: <%= nuxtSparingCenter.sassUtilsCollection %>,
        boxSizing: true,
        fixBrowserStyles: '<%= nuxtSparingCenter.fixBrowserStyles %>',
        fixFontSmoothing: true
      }
    ],

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL || process.env.BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
