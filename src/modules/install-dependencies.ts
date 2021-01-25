import defaultShell from 'shelljs'
import { exec as defaultExec, log as defaultLog } from '../utils'

export default function installDependencies(
  projectPath: string,
  log = defaultLog,
  shell = defaultShell,
  exec = defaultExec
) {
  log.info('\nInstalling dependencies, it may take a while...')
  shell.cd(projectPath)
  exec('npm install')
}
