import * as fs from 'fs'

import { Repository } from '../../models/repository'
import { repoPath } from './repo-path'

export const repoDir = (repo: Repository, path: string[], mkdir = false) => {
  const newPath = repoPath(repo, path)

  if (fs.existsSync(newPath)) {
      if (fs.statSync(newPath).isDirectory()) return path;
      throw new Error(`${newPath} is not a directory!`)
  }

  if (mkdir) {
    fs.mkdirSync(newPath, { recursive: true })
    return newPath
  }

  return null;
}
