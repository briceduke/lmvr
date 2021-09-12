import * as pathModule from 'path'
import { Repository } from '../models/repository'

export const repoPath = (repo: Repository, path: string[]) => {
  return pathModule.join(repo.lmvrDir, path.join('/'))
}
