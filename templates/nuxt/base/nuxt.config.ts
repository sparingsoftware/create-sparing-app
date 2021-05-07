import { NuxtConfig } from '@nuxt/types'
import dotenv from 'dotenv'

dotenv.config()

const config: NuxtConfig = {
  // Server configuration
  server: {
    host: '0.0.0.0',
    port: process.env.NODE_ENV === 'production' ? 80 : 3000
  },

  serverMiddleware: ['~/server-middleware/trailing-slash'],

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
  css: ['~/assets/sass/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    <%- plugins.map(plugin => plugin.mode ? `{
      src: '@/plugins/${plugin.name}',
      mode: '${plugin.mode}'
    }`: `'@/plugins/${plugin.name}'`).join(',\n    ') %>
  ],

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
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
}

// Doc: https://github.com/nuxt-community/google-gtag-module
if (process.env.GOOGLE_ID) {
  config.modules?.push([
    '@nuxtjs/google-gtag',
    {
      id: process.env.GOOGLE_ID
    }
  ])
}

if (process.env.FRONTEND_URL) {
  config.modules?.push(...[
    // https://github.com/nuxt-community/sitemap-module
    [
      '@nuxtjs/sitemap',
      {
        hostname: process.env.FRONTEND_URL,
        path: '/sitemap.xml',
        exclude: []
      }
    ],

    // Doc: https://github.com/nuxt-community/robots-module
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: [],
        Sitemap: `${process.env.FRONTEND_URL}/sitemap.xml`
      }
    ]
  ])
}

export default config
