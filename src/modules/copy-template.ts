import fs, { WriteFileOptions } from 'fs'
import ejs from 'ejs'
import path from 'path'

export default function copyTemplate(
  templatePath: string,
  projectPath: string,
  ejsConfig: any,
  writeFileOptions?: WriteFileOptions
) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file)
    const stats = fs.statSync(origFilePath)

    if (stats.isFile()) {
      const fileRead = fs.readFileSync(origFilePath, 'utf8')
      const contents = ejsConfig ? ejs.render(fileRead, ejsConfig) : fileRead

      // Change 'gitignore' to '.gitignore' due to npm gitignore issues
      let writePath =
        file === 'gitignore'
          ? path.join(projectPath, '.gitignore')
          : path.join(projectPath, file)

      fs.writeFileSync(writePath, contents, writeFileOptions ?? 'utf8')
    }

    if (stats.isDirectory()) {
      fs.mkdirSync(path.join(projectPath, file))
      copyTemplate(
        path.join(templatePath, file),
        path.join(projectPath, file),
        ejsConfig,
        file === '.husky' ? { encoding: 'utf8', mode: 0o0755 } : undefined // make all hook files executable
      )
    }
  })
}
