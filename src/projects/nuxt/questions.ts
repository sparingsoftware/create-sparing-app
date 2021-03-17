import { DistinctQuestion } from 'inquirer'

interface PluginChoiceValue {
  name: string
  npm?: string
  mode?: 'client' | 'server'
}

interface PluginChoice {
  name: string
  value: PluginChoiceValue
}

export const nuxtQuestion: DistinctQuestion[] = [
  {
    name: 'fixBrowserStyles',
    type: 'list',
    message: 'Overwrite user agent styles:',
    choices: [
      {
        name: 'ress',
        value: 'ress'
      },
      {
        name: 'normalize.css',
        value: 'normalize'
      }
    ]
  },
  {
    name: 'plugins',
    type: 'checkbox',
    message: 'Additional plugins:',
    choices: [
      {
        name: 'vue-on-resize',
        value: {
          name: 'vue-on-resize',
          mode: 'client',
          npm: '@sparing-software/vue-on-resize'
        }
      },
      {
        name: 'v-clamp',
        value: {
          name: 'v-clamp',
          mode: 'client',
          npm: '@sparing-software/v-clamp'
        }
      },
      {
        name: '100vh',
        value: {
          name: '100vh',
          mode: 'client',
          npm: '@sparing-software/100vh'
        }
      },
      {
        name: 'axios-i18-header',
        value: {
          name: 'axios-i18-header'
        }
      }
    ] as PluginChoice[]
  }
  // TODO Add form-builder
]

export interface NuxtQuestions {
  fixBrowserStyles: 'reset' | 'normalize'
  plugins: PluginChoiceValue[]
  axiosI18nHeader: boolean
}
