import * as inquirer from 'inquirer'

export default async function getProjectName() {
  const projectNameQuestion: inquirer.InputQuestion = {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) =>
      /^([A-Za-z\-\_\d])+$/.test(input) ||
      'Project name may only include letters, numbers, underscores and hashes.'
  }

  const answers = await inquirer.prompt<{ projectName: string }>([
    projectNameQuestion
  ])

  return answers.projectName
}
