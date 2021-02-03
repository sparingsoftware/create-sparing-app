import inquirer from 'inquirer'
import { nuxtQuestion, NuxtQuestions } from '../projects/nuxt'
import { EjsConfig, TemplateName } from '../types'

export default async function getEjsConfig(
  projectName: string,
  templateName: TemplateName
) {
  let ejsConfig: EjsConfig

  switch (templateName) {
    /**
     * Nuxt
     */
    case TemplateName.Nuxt:
      const nuxt = await inquirer.prompt<NuxtQuestions>(nuxtQuestion)

      ejsConfig = {
        projectName: projectName,
        nuxtSparingCenter: {
          axiosI18nHeader: nuxt.axiosI18nHeader,
          fixBrowserStyles: nuxt.fixBrowserStyles,
          plugins: nuxt.plugins,
          sassUtilsCollection: nuxt.sassUtilsCollection
        }
      }

      break

    /**
     * Simple html/css/js project
     */
    case TemplateName.Simple:
      ejsConfig = null // TODO
  }

  return ejsConfig
}
