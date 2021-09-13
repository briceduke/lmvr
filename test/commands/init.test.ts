import {expect, test} from '@oclif/test'
import { rmdirSync, rmSync } from 'fs'

describe('init', () => {
  test
  .stdout()
  .command('init')
  .it('creates a lmvr repository', ctx => {
    expect(ctx.stdout).to.contain('Initialized an empty lmvr directory!')
    
    expect(rmSync('./.lmvr', { recursive: true })).to.equal(undefined)
  })
})
