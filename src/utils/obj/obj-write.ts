import { createHash } from "crypto";
import { writeFileSync } from "fs";
import { deflateSync } from "zlib";

import { Object } from "../../models/object";
import { repoFile } from "../repo/repo-file";

export const objectWrite = (obj: Object, actuallyWrite = true) => {
    const data = obj.serialize()

    const res = obj.fmt + ' ' + data.length.toString() + '\x00' + data

    const sha = createHash('sha1').update(res).digest('hex')

    if (actuallyWrite) {
        const path = repoFile(obj.repo, ["objects", sha.slice(0, 2), sha.slice(2)], actuallyWrite)!

        writeFileSync(path, deflateSync(res))
    }

    return sha
}