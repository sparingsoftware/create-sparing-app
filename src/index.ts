#!/usr/bin/env node
import * as inquirer from 'inquirer'
import createProject from './create-project'
import mainQuestions from './main-questions'
import nuxtQuestion from './projects/nuxt/nuxt-questions'
import { EjsConfig } from './projects/ejsConfig'
import {
  checkNodeVersion,
  installDependencies,
  renderLogo,
  showFinalInfo
} from './utils'

checkNodeVersion()
renderLogo()

inquirer.prompt(mainQuestions).then(async mainAnswers => {
  let ejsConfig: EjsConfig

  // if (mainAnswers.template === ProjectTemplateName.Nuxt) {
  const projectAnswers = await inquirer.prompt(nuxtQuestion)

  ejsConfig = {
    projectName: mainAnswers.projectName,
    programmingLanguage: projectAnswers.programmingLanguage,
    nuxtSparingCenter: {
      axiosGenerateCache: projectAnswers.axiosGenerateCache,
      axiosI18nHeader: projectAnswers.axiosI18nHeader,
      axiosRenameKeys: projectAnswers.axiosRenameKeys,
      fixBrowserStyles: projectAnswers.fixBrowserStyles,
      plugins: projectAnswers.plugins,
      sassUtilsCollection: projectAnswers.sassUtilsCollection
    }
  }
  // }

  createProject({
    projectName: mainAnswers.projectName,
    templateName: mainAnswers.template,
    ejsConfig
  })

  installDependencies({
    dir: mainAnswers.projectName
  })

  showFinalInfo()
})
