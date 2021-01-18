import * as fs from 'fs'
import * as path from 'path'
import * as shell from 'shelljs'
import copyTemplate from './copy-template'
import { EjsConfig } from './projects/ejsConfig'
import { log } from './utils'

export default function createProject({
  projectName,
  templateName,
  ejsConfig
}: {
  projectName: string
  templateName: string
  ejsConfig: EjsConfig
}) {
  const projectPath = path.join(process.cwd(), projectName)
  const templatePath = path.join(__dirname, '../', 'templates', templateName)

  if (fs.existsSync(projectPath)) {
    log.error(`Folder ${projectPath} exists. Delete or use another name.`)
    shell.exit(1)
  }

  fs.mkdirSync(projectPath)

  copyTemplate(templatePath, projectName, ejsConfig)
}
