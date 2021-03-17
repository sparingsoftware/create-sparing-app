import fs from 'fs'
import path from 'path'
import { EjsConfig } from '../../types'
import { exec, log } from '../../utils'

export default async function postInstall(
  ejsConfig: EjsConfig,
  templatePath: string,
  projectPath: string
) {
  log.info('\nPost-install configuration...')

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
    case 'normalize':
      npmPackages.push('normalize.css')
      break

    case 'reset':
      npmPackages.push('ress')
      break
  }

  /**
   * Update package.json
   */
  const packages = npmPackages.join(' ')
  exec(`npm i --ignore-scripts --no-audit --no-package-lock ${packages}`)
}
