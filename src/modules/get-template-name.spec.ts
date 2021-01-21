import getTemplateName from './get-template-name'
import * as defaultInquirer from 'inquirer'
import { ListQuestion } from 'inquirer'

describe('get-template-name module', () => {
  it('has question with templates names', async done => {
    const inquirer = {
      async prompt(questions: ListQuestion[]) {
        const question = questions[0]
        expect(question.name).toBe('templateName')
        expect(question.type).toBe('list')

        const chocies = (question.choices as Array<any>).map(
          question => question.value
        )

        expect(chocies.includes('nuxt')).toBeTruthy()
        expect(chocies.includes('simple')).toBeTruthy()

        return {}
      }
    }

    getTemplateName(inquirer as typeof defaultInquirer)

    done()
  })

  it('returns template name', async done => {
    const inquirer = {
      async prompt(_) {
        return {
          templateName: 'test'
        }
      }
    }

    const name = await getTemplateName(inquirer as typeof defaultInquirer)
    expect(name).toBe('test')
    done()
  })
})
