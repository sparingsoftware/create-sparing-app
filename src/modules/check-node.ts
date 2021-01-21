import * as defaultShell from 'shelljs'
import { exec as defaultExec } from '../utils'

export default function checkNodeVersion(
  exec = defaultExec,
  shell = defaultShell
) {
  if (!exec('node -v').startsWith('v14.')) {
    shell.echo('Sorry, Sparing CLI requires node version 14')
    shell.exit(1)
    return false
  }

  return true
}
