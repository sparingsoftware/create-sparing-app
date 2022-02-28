import { Context } from '@nuxt/types'

export default function ({ app, $httpService }: Context) {
  $httpService.instance.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = app.i18n.locale
    return config
  })
}
