import shell from 'shelljs'
import { exec, log } from '../utils'

export default function checkNodeVersion() {
  if (!exec('node -v').startsWith('v14.')) {
    log.error('Sorry, Sparing CLI requires node version 14')
    shell.exit(1)
    return false
  }

  return true
}
