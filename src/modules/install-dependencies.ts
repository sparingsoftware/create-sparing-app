import * as shell from 'shelljs'
import { exec, log } from '../utils'

export default function installDependencies(projectPath: string) {
  log.info('\nInstalling dependencies, it may take a while...')
  shell.cd(projectPath)
  exec('npm install')
}
