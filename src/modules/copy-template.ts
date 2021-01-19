import * as fs from 'fs'
import * as ejs from 'ejs'
import * as path from 'path'
import { EjsConfig } from '../types'

export default function copyTemplate(
  templatePath: string,
  projectPath: string,
  ejsConfig: EjsConfig
) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file)
    const stats = fs.statSync(origFilePath)

    if (stats.isFile()) {
      const fileRead = fs.readFileSync(origFilePath, 'utf8')
      const contents = ejsConfig ? ejs.render(fileRead, ejsConfig) : fileRead
      const writePath = path.join(projectPath, file)
      fs.writeFileSync(writePath, contents, 'utf8')
    }

    if (stats.isDirectory()) {
      fs.mkdirSync(path.join(projectPath, file))
      copyTemplate(
        path.join(templatePath, file),
        path.join(projectPath, file),
        ejsConfig
      )
    }
  })
}
