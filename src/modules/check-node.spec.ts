import checkNodeVersion from './check-node'
import * as defaultShell from 'shelljs'

let shell: { echo: unknown; exit: unknown }

beforeEach(() => {
  shell = {
    echo: jest.fn(),
    exit: jest.fn()
  }
})

describe('check-node module', () => {
  it('checks node version', () => {
    const exec = jest.fn(() => 'v14.')
    checkNodeVersion(exec, shell as typeof defaultShell)
    expect(exec).toBeCalledWith('node -v')
  })

  it('does nothing if node version is 14.x.x', () => {
    const exec = () => 'v14.10.20'
    expect(checkNodeVersion(exec, shell as typeof defaultShell)).toBeTruthy()
  })

  it('shows error if node version is not 14.x.x', () => {
    const exec = () => 'v144.10.20'
    checkNodeVersion(exec, shell as typeof defaultShell)
    expect(shell.echo).toBeCalled()
  })

  it('exits if node version is not 14.x.x', () => {
    const exec = () => 'v13.10.20'
    checkNodeVersion(exec, shell as typeof defaultShell)
    expect(shell.exit).toBeCalledWith(1)
  })
})
