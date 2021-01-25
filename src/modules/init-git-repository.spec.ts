import initGitRepository from './init-git-repository'
import defaultShell from 'shelljs'
import { Log } from '../utils'

describe('init-git repository module', () => {
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

  it('logs info about initalization', () => {
    initGitRepository(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(log.info).toBeCalled()
  })

  it('changes dir fot git initialization', () => {
    initGitRepository(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(shell.cd).toBeCalledWith(testProjectPath)
  })

  it('initializes new git repository', () => {
    initGitRepository(
      testProjectPath,
      log as Log,
      shell as typeof defaultShell,
      exec
    )

    expect(exec).toBeCalledWith('git init')
  })
})
