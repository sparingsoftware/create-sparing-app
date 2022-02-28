import { Plugin } from '@nuxt/types'
import { Api } from '@/service/__generated-api'

declare module '@nuxt/types' {
  interface Context {
    $httpService: Api<unknown>
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $httpService: Api<unknown>
  }
}

const servicePlugin: Plugin = (context, inject) => {
  const api = new Api({
    baseURL: process.client
      ? context.$config.browserBaseURL
      : context.$config.baseURL
  })

  if (!process.client && context.$config.baseHost) {
    api.instance.defaults.headers.common.Host = context.$config.baseHost
    api.instance.defaults.headers.common['X-Forwarded-Proto'] = 'https'
  }

  context.$httpService = api
  inject('httpService', api)
}

export default servicePlugin
