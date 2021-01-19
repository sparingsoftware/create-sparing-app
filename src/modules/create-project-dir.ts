import * as fs from 'fs'
import * as shell from 'shelljs'
import { log } from '../utils'

export default function createProjectDir(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    log.error(`Folder ${projectPath} exists. Delete or use another name.`)
    shell.exit(1)
  }

  fs.mkdirSync(projectPath)
}
