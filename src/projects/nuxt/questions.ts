import { DistinctQuestion } from 'inquirer'

const questions: DistinctQuestion[] = [
  {
    name: 'trailingSlash',
    type: 'confirm',
    message: 'Use trailing slash in urls?',
    default: false
  },
  {
    name: 'fixBrowserStyles',
    type: 'list',
    message: 'Overwrite user agent styles:',
    choices: ['reset.css', 'normalize.css', { name: 'none', value: false }]
  },
  {
    name: 'sassUtilsCollection',
    type: 'confirm',
    message: 'Import sass-utils-collection?',
    default: true
  },
  {
    name: 'plugins',
    type: 'checkbox',
    message: 'Add sparing plugins:',
    choices: ['vue-on-resize', 'v-clamp', '100vh']
  },
  {
    name: 'axiosI18nHeader',
    type: 'confirm',
    message: '(nuxt i18n) Add "Accept-Language" header to every axios request?',
    default: false
  },
  {
    name: 'axiosGenerateCache',
    type: 'confirm',
    message:
      '(nuxt generate) Use axios 10 minutes cache to prevent HTTP flood?',
    default: false
  }
]

export default questions
