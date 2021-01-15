type FixBrowserStyles = 'reset' | 'normalize' | false
type SparingPlugin = 'vue-on-resize' | 'v-clamp' | '100vh'

interface NuxtSparingCenterConfig {
  trailingSlash: boolean
  fixBrowserStyles: FixBrowserStyles
  sassUtilsCollection: boolean
  plugins: SparingPlugin[]
  axiosRenameKeys: boolean
  axiosI18nHeader: boolean
  axiosGenerateCache: boolean
}

export interface NuxtEjsConfig {
  projectName: string
  nuxtSparingCenter: NuxtSparingCenterConfig
}
