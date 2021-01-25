import getTemplateName from './get-template-name'
import inquirer from 'inquirer'
import { ListQuestion } from 'inquirer'

jest.mock('inquirer')

describe('get-template-name module', () => {
  const promptMock = (inquirer.prompt as unknown) as jest.Mock

  it('has question with templates names', async done => {
    promptMock.mockImplementation((questions: ListQuestion[]) => {
      const question = questions[0]
      expect(question.name).toBe('templateName')
      expect(question.type).toBe('list')

      const chocies = (question.choices as Array<any>).map(
        question => question.value
      )

      expect(chocies.includes('nuxt')).toBeTruthy()
      expect(chocies.includes('simple')).toBeTruthy()

      return Promise.resolve({})
    })

    await getTemplateName()
    done()
  })

  it('returns template name', async done => {
    promptMock.mockReset()
    promptMock.mockResolvedValue({ templateName: 'test' })
    const name = await getTemplateName()
    expect(name).toBe('test')
    done()
  })
})
