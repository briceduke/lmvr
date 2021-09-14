import { Repository } from '../../models/repository'
import { repoDir } from './repo-dir'
import { repoPath } from './repo-path'

export const repoFile = (repo: Repository, path: string[], mkdir = false) => {
  if (repoDir(repo, path.slice(0, -1), mkdir)) return repoPath(repo, path)
}
