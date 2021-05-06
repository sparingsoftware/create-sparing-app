import fs from 'fs'
import path from 'path'
import { EjsConfig } from '../../types'
import { exec, log } from '../../utils'
import shell from 'shelljs'
import { FixBrowserStyles } from './questions'

export default async function install(
  ejsConfig: EjsConfig,
  templatePath: string,
  projectPath: string
) {
  log.info('\nInstalling...')

  const npmPackages: string[] = []

  /**
   * Install plugins
   */
  ejsConfig.plugins.forEach(plugin => {
    fs.copyFileSync(
      path.resolve(templatePath, `additional/plugins/${plugin.name}.ts`),
      path.resolve(projectPath, `plugins/${plugin.name}.ts`)
    )
  })

  for (const plugin of ejsConfig.plugins) {
    if (plugin.npm) {
      npmPackages.push(plugin.npm)
    }
  }

  /**
   * Normalize css
   */
  switch (ejsConfig?.fixBrowserStyles) {
    case FixBrowserStyles.normalize:
      npmPackages.push('normalize.css')
      break

    case FixBrowserStyles.ress:
      npmPackages.push('ress')
      break
  }

  /**
   * Install dependencies
   */
  const packages = npmPackages.join(' ')
  shell.cd(projectPath)
  exec(`npm i ${packages}`)
  exec('npm i')
}
