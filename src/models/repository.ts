import * as osPath from 'path'
import * as fs from 'fs'
import * as iniParser from 'ini'
import { repoFile } from '../utils/repo/repo-file';

export class Repository {
    worktree: string;

    conf: { [key: string]: any; } | undefined;

    lmvrDir: string;

    constructor(path: string, force = false) {
      this.worktree = path
      this.lmvrDir = osPath.join(path, '.lmvr')

      if (!force || !fs.lstatSync(this.worktree).isDirectory()) throw new Error(`${path} is not a lmvr repository!`)

      // Config file
      const configFile = repoFile(this, ['config'])

      if (configFile && fs.existsSync(configFile)) this.conf = iniParser.parse(fs.readFileSync(configFile, 'utf-8'))
      else if (!force) throw new Error('Configuration file is missing!')

      if (!force) {
        const ver = this.conf!.core.repositoryformatversion
        if (ver !== 0) throw new Error(`Unsupported repositoryformatversion, ${ver}`)
      }
    }
}
