import * as shell from 'shelljs'
import { exec } from '../utils'

export default function checkNodeVersion() {
  if (!exec('node -v').startsWith('v14.')) {
    shell.echo('Sorry, Sparing CLI requires node version 14')
    shell.exit(1)
  }
}
