import Vue from 'vue'
import { createLocalVue, ThisTypedMountOptions } from '@vue/test-utils'
import merge from 'lodash/merge'

// If your components use plugins you can add them here. vue-i18n is commented out by default

// import VueI18n from 'vue-i18n'

// import en from '@/locales/en'

// const defaultPluginList = {
//   i18n: true
// }

// type PluginList = typeof defaultPluginList

function getMountOptions(
  overrides: ThisTypedMountOptions<Vue>,
  // pluginList?: PluginList
) {
  // const plugins = { ...defaultPluginList, ...pluginList }
  const localVue = createLocalVue()

  // if (plugins.i18n) localVue.use(VueI18n)

  const defaultMountOptions = {
    localVue,
    // ...(plugins.i18n && {
    //   i18n: new VueI18n({
    //     locale: 'en',
    //     fallbackLocale: 'en',
    //     messages: { en }
    //   })
    // }),
    mocks: {
      $addEventListener: jest.fn(),
      $onResize: jest.fn(() => ({ fire: jest.fn() }))
    }
  }

  return merge(defaultMountOptions, overrides)
}

export default getMountOptions
