import * as shell from 'shelljs'
import chalk from 'chalk'

export interface Log {
  error: (msg: string) => void
  info: (msg: string) => void
  black: (msg: string) => void
}

export const log: Log = {
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

export function exec(command: string) {
  return shell.exec(command, { silent: true }).stdout
}
