import {Command, flags} from '@oclif/command'

import { repoCreate } from '../utils/repo-create'

export default class Init extends Command {
  static description = 'Initialize a new, empty repository.'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'path', required: false}]

  async run() {
    const {args} = this.parse(Init)

    repoCreate(args.path)
  }
}
