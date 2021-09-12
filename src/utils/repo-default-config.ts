import * as fs from 'fs'
import * as iniParser from 'ini'

export const repoDefaultConfig = (path: fs.PathOrFileDescriptor) => {
    let configFile = { core: { repositoryformatversion: 0, filemode: false, bare: false }};

    return iniParser.stringify(configFile)
}