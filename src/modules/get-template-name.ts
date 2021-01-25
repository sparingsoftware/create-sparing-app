import inquirer from 'inquirer'
import { ListQuestion } from 'inquirer'
import { TemplateName } from '../types'

export default async function getTemplateName() {
  const templateNameQuestion: ListQuestion = {
    name: 'templateName',
    type: 'list',
    message: 'What kind of app do You need?',
    choices: [
      {
        name: 'Nuxt app (nuxt-sparing-center)',
        value: TemplateName.Nuxt
      },
      {
        name: 'Static site (WIP)', // TODO
        value: TemplateName.Simple
      }
    ]
  }

  const answers = await inquirer.prompt<{ templateName: TemplateName }>([
    templateNameQuestion
  ])

  return answers.templateName
}
