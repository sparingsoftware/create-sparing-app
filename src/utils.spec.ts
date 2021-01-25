import { exec } from './utils'
import shell from 'shelljs'

jest.mock('shelljs', () => ({
  exec: jest.fn()
}))

describe('utils', () => {
  describe('exec function', () => {
    it('should silently execute shell command', () => {
      const execMock = shell.exec as jest.Mock
      execMock.mockReturnValue({})
      exec('command')
      expect(shell.exec).toBeCalledWith('command', { silent: true })
    })
  })
})
