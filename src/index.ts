import * as inquirer from 'inquirer'
import createProject from './createProject'
import nuxtQuestion from './projects/nuxt/questions'

enum ProjectTemplate {
  Nuxt = 'nuxt'
}

const mainQuestions: inquirer.DistinctQuestion[] = [
  {
    name: 'template',
    type: 'list',
    message: 'What kind of app do You need?',
    choices: [
      { name: 'Nuxt app (nuxt-sparing-center)', value: 'nuxt' },
      { name: 'Static site (gulp)', value: 'static' }
    ]
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    validate: (input: string) =>
      /^([A-Za-z\-\_\d])+$/.test(input) ||
      'Project name may only include letters, numbers, underscores and hashes.'
  }
]

inquirer.prompt(mainQuestions).then(async mainAnswers => {
  let projectQuestions: inquirer.DistinctQuestion[]
  let projectAnswers: inquirer.Answers

  switch (mainAnswers.template) {
    case ProjectTemplate.Nuxt:
      projectQuestions = nuxtQuestion
      break

    default:
      break
  }

  projectAnswers = await inquirer.prompt(projectQuestions)

  console.log(projectAnswers)

  createProject({
    projectName: mainAnswers.name,
    templateName: mainAnswers.template,
    ejsConfig: {
      people: ['Adam', 'Alex', 'Mike']
    }
  })
})
