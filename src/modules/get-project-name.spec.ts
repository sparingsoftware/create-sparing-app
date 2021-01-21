import getProjectName from './get-project-name'
import * as defaultInquirer from 'inquirer'
import { InputQuestion } from 'inquirer'

describe('get-project-name module', () => {
  it('returns project name', async done => {
    const inquirer = {
      async prompt(_) {
        return {
          projectName: 'test'
        }
      }
    }

    const name = await getProjectName(inquirer as typeof defaultInquirer)
    expect(name).toBe('test')
    done()
  })

  it('validates project name', async done => {
    const inquirer = {
      async prompt(questions: InputQuestion[]) {
        const question = questions[0]
        expect(question.name).toBe('projectName')
        expect(question.validate('valid-name')).toBe(true)
        expect(question.validate('valid_1name')).toBe(true)
        expect(question.validate('`invalidname')).not.toBe(true)

        return {}
      }
    }

    await getProjectName(inquirer as typeof defaultInquirer)
    done()
  })
})
