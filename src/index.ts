import * as inquirer from 'inquirer'
import createProject from './create-project'
import mainQuestions from './main-questions'
import nuxtQuestion from './projects/nuxt/nuxt-questions'
import { EjsConfig } from './projects/ejsConfig'

enum ProjectTemplate {
  Nuxt = 'nuxt'
}

inquirer.prompt(mainQuestions).then(async mainAnswers => {
  let ejsConfig: EjsConfig

  if (mainAnswers.template === ProjectTemplate.Nuxt) {
    const projectAnswers = await inquirer.prompt(nuxtQuestion)

    ejsConfig = {
      projectName: mainAnswers.projectName,
      nuxtSparingCenter: {
        axiosGenerateCache: projectAnswers.axiosGenerateCache,
        axiosI18nHeader: projectAnswers.axiosI18nHeader,
        axiosRenameKeys: projectAnswers.axiosRenameKeys,
        fixBrowserStyles: projectAnswers.fixBrowserStyles,
        plugins: projectAnswers.plugins,
        sassUtilsCollection: projectAnswers.sassUtilsCollection,
        trailingSlash: projectAnswers.trailingSlash
      }
    }
  }

  createProject({
    projectName: mainAnswers.projectName,
    templateName: mainAnswers.template,
    ejsConfig
  })
})
