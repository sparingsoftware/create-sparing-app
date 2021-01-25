import checkNodeVersion from './check-node'
import shell from 'shelljs'
import { exec, log } from '../utils'

jest.mock('../utils')
jest.mock('shelljs')

const execMock = exec as jest.Mock

describe('check-node module', () => {
  it('checks node version', () => {
    execMock.mockReturnValue('v14.12.10')
    checkNodeVersion()
    expect(execMock).toBeCalledWith('node -v')
  })

  it('does nothing if node version is 14.x.x', () => {
    execMock.mockReturnValue('v14.12.10')
    expect(checkNodeVersion()).toBeTruthy()
  })

  it('shows error if node version is not 14.x.x', () => {
    execMock.mockReturnValue('v6.12.10')
    checkNodeVersion()
    expect(log.error).toBeCalled()
  })

  it('exits if node version is not 14.x.x', () => {
    execMock.mockReturnValue('v144.12.10')
    checkNodeVersion()
    expect(shell.exit).toBeCalledWith(1)
  })
})
