import getProjectName from './get-project-name'
import inquirer from 'inquirer'
import { InputQuestion } from 'inquirer'

jest.mock('inquirer')

describe('get-project-name module', () => {
  const promptMock = (inquirer.prompt as unknown) as jest.Mock

  it('returns project name', async done => {
    promptMock.mockResolvedValue({ projectName: 'test' })
    const name = await getProjectName()
    expect(name).toBe('test')
    done()
  })

  it('validates project name', async done => {
    promptMock.mockReset()
    promptMock.mockImplementation((questions: InputQuestion[]) => {
      const question = questions[0]

      if (question.validate) {
        expect(question.validate('valid-name')).toBe(true)
        expect(question.validate('valid_1name')).toBe(true)
        expect(question.validate('`invalidname')).not.toBe(true)
      }

      expect(question.name).toBe('projectName')

      return Promise.resolve({})
    })

    await getProjectName()
    done()
  })
})
