import axios from 'axios'
import { Context } from '@nuxt/types'

export default function ({ app }: Context) {
  axios.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = app.i18n.locale
    return config
  })
}
