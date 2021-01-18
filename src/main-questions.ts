import { DistinctQuestion } from 'inquirer'
import { ProjectTemplateName } from './projects/ejsConfig'

const mainQuestions: DistinctQuestion[] = [
  {
    name: 'template',
    type: 'list',
    message: 'What kind of app do You need?',
    choices: [
      {
        name: 'Nuxt app (nuxt-sparing-center)',
        value: ProjectTemplateName.Nuxt
      },
      {
        name: 'Static site (WIP)',
        value: 'static'
      }
      // TODO webpack 5? gulp?
    ]
  },
  {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) =>
      /^([A-Za-z\-\_\d])+$/.test(input) ||
      'Project name may only include letters, numbers, underscores and hashes.'
  }
]

export default mainQuestions
