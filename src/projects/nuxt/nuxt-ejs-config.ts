type FixBrowserStyles = 'reset' | 'normalize' | false
type SparingPlugin = 'vue-on-resize' | 'v-clamp' | '100vh'
type Programminglanguage = 'JavaScript' | 'Typescript'

interface NuxtSparingCenterConfig {
  fixBrowserStyles: FixBrowserStyles
  sassUtilsCollection: boolean
  plugins: SparingPlugin[]
  axiosRenameKeys: boolean
  axiosI18nHeader: boolean
  axiosGenerateCache: boolean
}

export interface NuxtEjsConfig {
  projectName: string
  programmingLanguage: Programminglanguage
  nuxtSparingCenter: NuxtSparingCenterConfig
}
