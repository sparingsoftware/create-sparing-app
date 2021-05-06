#!/usr/bin/env node

import path from 'path'
import checkNodeVersion from './modules/check-node'
import renderLogo from './modules/render-logo'
import getProjectName from './modules/get-project-name'
// import getTemplateName from './modules/get-template-name'
import getEjsConfig from './modules/get-ejs-config'
import createProjectDir from './modules/create-project-dir'
import copyTemplate from './modules/copy-template'
import initGitRepository from './modules/init-git-repository'
import showFinalInfo from './modules/show-final-info'
import { TemplateName } from './types'

async function main() {
  checkNodeVersion()
  renderLogo()

  const templateName = TemplateName.Nuxt //await getTemplateName()
  const projectName = await getProjectName()
  const templatePath = path.join(__dirname, '../templates', templateName)
  const projectPath = path.join(process.cwd(), projectName)
  const ejsConfig = await getEjsConfig(projectName, templateName)
  const postInstall = (
    await import(path.join(__dirname, 'projects', templateName, 'install.js'))
  ).default

  createProjectDir(projectPath)
  copyTemplate(path.join(templatePath, 'base'), projectPath, ejsConfig)
  postInstall(ejsConfig, templatePath, projectPath)
  initGitRepository(projectPath)
  showFinalInfo()
}

main()
