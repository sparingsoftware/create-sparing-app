import * as shell from 'shelljs'
import chalk from 'chalk'

export const log = {
  error(msg: string) {
    console.log(chalk.red(msg))
  },
  info(msg: string) {
    console.log(chalk.whiteBright(msg))
  },
  black(msg: string) {
    console.log(chalk.bgRgb(0, 0, 0).whiteBright(msg))
  }
}

function exec(command: string) {
  return shell.exec(command, { silent: true }).stdout
}

export function checkNodeVersion() {
  if (!shell.which('node')) {
    shell.echo('Sorry, Sparing CLI requires node')
    shell.exit(1)
  }

  if (!exec('node -v').startsWith('v14.')) {
    shell.echo('Sorry, Sparing CLI requires node version 14')
    shell.exit(1)
  }
}

export function installDependencies({ dir }: { dir: string }) {
  log.info('\nInstalling dependencies, it may take a while...')
  shell.cd(dir)
  exec('npm i')
}

export function renderLogo() {
  log.black('\n           ')
  log.black('   S P X   ')
  log.black('   A R I   ')
  log.black('   X N G   ')
  log.black('           \n')
}

export function showFinalInfo() {
  log.info('Done')
}
