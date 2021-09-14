import { readFileSync } from "fs";
import { inflateSync } from "zlib";

import { Repository } from "../../models/repository";
import { repoFile } from "../repo/repo-file";

export const objectRead = (repo: Repository, sha: string) => {
    const path = repoFile(repo, ["objects", sha.slice(0, 2), sha.slice(2)])!

    const raw = inflateSync(readFileSync(path))

    const x = raw.indexOf(' ')
    const fmt = raw.slice(0, x)

    const y = raw.slice(x).indexOf('\x00')
    const size = parseInt(raw.slice(x, y).toString('ascii'))

    if (size !== (raw.length - parseInt(y) - 1)) throw new Error(`Malformed object ${sha}: bad length`)

    let c;
    if (fmt.toString() === 'commit') c = Commit
    if (fmt.toString() === 'tree') c = Tree
    if (fmt.toString() === 'tag') c = Tag
    if (fmt.toString() === 'blob') c = Blob
    else throw new Error(`Unknown type ${fmt.toString('ascii')} for object ${sha}`)

    return c(repo, raw.slice(y+1))
}