import createProjectDir from './create-project-dir'
import shell from 'shelljs'
import fs from 'fs'
import { log } from '../utils'

jest.mock('../utils')
jest.mock('fs')
jest.mock('shelljs')

describe('create-project-dir module', () => {
  const examplePath = 'example/path'
  const existsSyncMock = fs.existsSync as jest.Mock

  it('creates directory if it is not exist', () => {
    existsSyncMock.mockReturnValue(false)
    createProjectDir(examplePath)
    expect(fs.mkdirSync).toBeCalledWith(examplePath)
  })

  it('shows error if directory exists', () => {
    existsSyncMock.mockReturnValue(true)
    createProjectDir(examplePath)
    expect(log.error).toBeCalledWith(
      `Folder ${examplePath} exists. Delete or use another name.`
    )
  })

  it('exits if directory exists', () => {
    existsSyncMock.mockReturnValue(true)
    createProjectDir(examplePath)
    expect(shell.exit).toBeCalledWith(1)
  })
})
