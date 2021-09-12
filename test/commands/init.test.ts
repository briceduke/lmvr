import {expect, test} from '@oclif/test'

describe('init', () => {
  test
  .stdout()
  .command(['init'])
  .it('creates a lmvr repository', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})
