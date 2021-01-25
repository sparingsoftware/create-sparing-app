import installDependencies from './install-dependencies'
import defaultShell from 'shelljs'
import { Log } from '../utils'

describe('install-dependecies module', () => {
  const testProjectPath = '/project-path'
  let log: { info: unknown }
  let shell: { cd: unknown }
  let exec: jest.Mock

  beforeEach(() => {
    log = {
      info: jest.fn()
    }

    shell = {
      cd: jest.fn()
    }

    exec = jest.fn()
  })

  it('logs info about dependencies installation', () => {
    installDependencies(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(log.info).toBeCalled()
  })

  it('changes dir for dependecies installation', () => {
    installDependencies(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(shell.cd).toBeCalledWith(testProjectPath)
  })

  it('installs dependencies', () => {
    installDependencies(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(exec).toBeCalledWith('npm install')
  })
})
