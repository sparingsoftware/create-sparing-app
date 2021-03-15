import fs from 'fs'
import inquirer from 'inquirer'
import validate from 'validate-npm-package-name'
import { InputQuestion } from 'inquirer'

export default async function getProjectName() {
  const projectNameQuestion: InputQuestion = {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) => {
      if (!validate(input).validForNewPackages) {
        return 'Project name must be valid npm package name!'
      }

      if (fs.existsSync(input)) {
        return `Project '${input}' already exists in current directory!`
      }

      return true
    }
  }

  const answers = await inquirer.prompt<{ projectName: string }>([
    projectNameQuestion
  ])

  return answers.projectName
}
