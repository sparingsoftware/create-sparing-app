import * as fs from 'fs'
import * as path from 'path'
import chalk from 'chalk'
import copyTemplate from './copy-template'
import { EjsConfig } from './projects/ejsConfig'

export default function createProject({
  projectName,
  templateName,
  ejsConfig
}: {
  projectName: string
  templateName: string
  ejsConfig: EjsConfig
}) {
  const projectPath = path.join(__dirname, '../', projectName)
  const templatePath = path.join(__dirname, '../', 'templates', templateName)

  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`Folder ${projectPath} exists. Delete or use another name.`)
    )
    return false
  }

  fs.mkdirSync(projectPath)

  copyTemplate(templatePath, projectName, ejsConfig)
}
