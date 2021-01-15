import * as fs from 'fs'
import * as path from 'path'
import * as ejs from 'ejs'
import chalk from 'chalk'

const SKIP_FILES = ['node_modules', '.template.json']
const CURR_DIR = process.cwd()

function copyTemplateRecursivly(
  templatePath: string,
  projectName: string,
  ejsConfig: any // todo
) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file)
    const stats = fs.statSync(origFilePath)

    if (SKIP_FILES.includes(file)) return

    if (stats.isFile()) {
      const contents = ejs.render(
        fs.readFileSync(origFilePath, 'utf8'),
        ejsConfig
      )
      const writePath = path.join(CURR_DIR, projectName, file)

      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file))

      copyTemplateRecursivly(
        path.join(templatePath, file),
        path.join(projectName, file),
        ejsConfig
      )
    }
  })
}

export default function createProject({
  projectName,
  templateName,
  ejsConfig
}: {
  projectName: string
  templateName: string
  ejsConfig: any // todo
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

  copyTemplateRecursivly(templatePath, projectName, ejsConfig)

  return true
}
