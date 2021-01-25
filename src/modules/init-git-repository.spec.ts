import initGitRepository from './init-git-repository'
import shell from 'shelljs'
import { log, exec } from '../utils'

jest.mock('shelljs')
jest.mock('../utils')

shell.cd = jest.fn()

describe('init-git repository module', () => {
  const testProjectPath = '/project-path'

  it('logs info about initalization', () => {
    initGitRepository(testProjectPath)

    expect(log.info).toBeCalled()
  })

  it('changes dir fot git initialization', () => {
    initGitRepository(testProjectPath)

    expect(shell.cd).toBeCalledWith(testProjectPath)
  })

  it('initializes new git repository', () => {
    initGitRepository(testProjectPath)

    expect(exec).toBeCalledWith('git init')
  })
})
