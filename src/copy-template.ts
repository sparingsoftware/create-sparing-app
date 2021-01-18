import * as path from 'path'
import * as fs from 'fs'
import * as ejs from 'ejs'
import { EjsConfig } from './projects/ejsConfig'

const SKIP_FILES = ['node_modules', '.template.json']

export default function copyTemplateRecursivly(
  templatePath: string,
  projectName: string,
  ejsConfig: EjsConfig
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
      const writePath = path.join(process.cwd(), projectName, file)

      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(process.cwd(), projectName, file))

      copyTemplateRecursivly(
        path.join(templatePath, file),
        path.join(projectName, file),
        ejsConfig
      )
    }
  })
}
