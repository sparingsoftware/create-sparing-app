import * as defaultFs from 'fs'
import * as defaultShell from 'shelljs'
import { log as defaultLog } from '../utils'

export default function createProjectDir(
  projectPath: string,
  shell = defaultShell,
  fs = defaultFs,
  log = defaultLog
) {
  if (fs.existsSync(projectPath)) {
    log.error(`Folder ${projectPath} exists. Delete or use another name.`)
    shell.exit(1)
  }

  fs.mkdirSync(projectPath)
}
