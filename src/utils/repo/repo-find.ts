import { lstatSync } from "fs"
import { join } from "path"
import { Repository } from "../../models/repository"

export const repoFind = (path = '.', required = true): unknown => {

    if (lstatSync(join(path, '.lmvr')).isDirectory()) return new Repository(path)

    const parent = join(path, '..')

    if (parent === path) {
        if (required) throw new Error("No lmvr directory!")
        return null
    }

    return repoFind(parent, required)
}