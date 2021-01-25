import defaultShell from 'shelljs'
import { exec as defaultExec, log as defaultLog } from '../utils'

export default function initGitRepository(
  projectPath: string,
  log = defaultLog,
  shell = defaultShell,
  exec = defaultExec
) {
  log.info('Initializing a new git repository...')
  shell.cd(projectPath)
  exec('git init')
}
