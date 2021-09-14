import * as fs from 'fs'
import * as pathModule from 'path'

import { repoFile } from './repo-file'
import { repoDir } from './repo-dir'
import { repoDefaultConfig } from './repo-default-config'

import { Repository } from "../../models/repository"

export const repoCreate = (path = './') => {
    const repo = new Repository(path, true)

    if (fs.existsSync(repo.lmvrDir)) {
        if (!fs.statSync(repo.lmvrDir).isDirectory()) throw new Error(`${path} is not a directory!`)
        if (fs.readdirSync(repo.lmvrDir).length > 0) throw new Error(`${path} is not empty!`)
    } else {
        fs.mkdirSync(repo.lmvrDir, {recursive: true})
    }

    if (!repoDir(repo, ["branches"], true)) throw new Error("Branches!")
    if (!repoDir(repo, ["objects"], true)) throw new Error("Objects!")
    if (!repoDir(repo, ["refs", "tags"], true)) throw new Error("Refs/Tags!")
    if (!repoDir(repo, ["refs", "heads"], true)) throw new Error("Refs/Heads!")

    fs.writeFileSync(repoFile(repo, ["description"])!, "Unnamed repository; edit this file's description to name the repository.\n")

    fs.writeFileSync(repoFile(repo, ["HEAD"])!, "ref: refs/heads/main\n")

    const configPath = repoFile(repo, ["config"])!
    
    const config = repoDefaultConfig(configPath)

    fs.writeFileSync(configPath, config)

    return repo
}