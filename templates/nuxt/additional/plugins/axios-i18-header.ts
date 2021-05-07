import { Context } from '@nuxt/types'
import { api } from '~/service/__generated-api'

export default function ({ app }: Context) {
  api.instance.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = app.i18n.locale
    return config
  })
}
