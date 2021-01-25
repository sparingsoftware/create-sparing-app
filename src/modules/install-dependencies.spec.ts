import installDependencies from './install-dependencies'
import shell from 'shelljs'
import { log, exec } from '../utils'

jest.mock('shelljs')
jest.mock('../utils')

shell.cd = jest.fn()

describe('install-dependecies module', () => {
  const testProjectPath = '/project-path'

  it('logs info about dependencies installation', () => {
    installDependencies(testProjectPath)
    expect(log.info).toBeCalled()
  })

  it('changes dir for dependecies installation', () => {
    installDependencies(testProjectPath)
    expect(shell.cd).toBeCalledWith(testProjectPath)
  })

  it('installs dependencies', () => {
    installDependencies(testProjectPath)
    expect(exec).toBeCalledWith('npm install')
  })
})
