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

export enum FixBrowserStyles {
  ress = 'ress',
  normalize = 'normalize'
}

export interface NuxtQuestions {
  fixBrowserStyles: FixBrowserStyles
  plugins: PluginChoiceValue[]
  axiosI18nHeader: boolean
}

export const nuxtQuestion: DistinctQuestion[] = [
  {
    name: 'fixBrowserStyles',
    type: 'list',
    message: 'Overwrite user agent styles:',
    choices: [
      {
        name: 'ress',
        value: FixBrowserStyles.ress
      },
      {
        name: 'normalize.css',
        value: FixBrowserStyles.normalize
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
      },
      {
        name: 'vue-conjunctions',
        value: {
          name: 'vue-conjunctions'
        }
      }
    ] as PluginChoice[]
  }
  // TODO Add form-builder
]
