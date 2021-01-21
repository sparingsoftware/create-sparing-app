import createProjectDir from './create-project-dir'
import * as defaultShell from 'shelljs'
import * as defaultFs from 'fs'
import { Log } from '../utils'

describe('create-project-dir module', () => {
  const examplePath = 'example/path'

  let fs: { existsSync: unknown; mkdirSync: unknown }
  let shell: { exit: unknown }
  let log: { error: unknown }

  beforeEach(() => {
    fs = {
      existsSync: () => false,
      mkdirSync: jest.fn()
    }

    shell = {
      exit: jest.fn()
    }

    log = {
      error: jest.fn()
    }
  })

  it('creates directory if it is not exist', () => {
    createProjectDir(
      examplePath,
      shell as typeof defaultShell,
      fs as typeof defaultFs
    )

    expect(fs.mkdirSync).toBeCalledWith(examplePath)
  })

  it('shows error if directory exists', () => {
    fs.existsSync = () => true

    createProjectDir(
      examplePath,
      shell as typeof defaultShell,
      fs as typeof defaultFs,
      log as Log
    )

    expect(log.error).toBeCalledWith(
      `Folder ${examplePath} exists. Delete or use another name.`
    )
  })

  it('exits if directory exists', () => {
    fs.existsSync = () => true

    createProjectDir(
      examplePath,
      shell as typeof defaultShell,
      fs as typeof defaultFs,
      log as Log
    )

    expect(shell.exit).toBeCalledWith(1)
  })
})
