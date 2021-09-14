lmvr
====

Lemur Version Control: The slightly off-putting TypeScript implementation of Git

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lmvr.svg)](https://npmjs.org/package/lmvr)
[![CircleCI](https://circleci.com/gh/briceduke/lmvr/tree/main.svg?style=shield)](https://circleci.com/gh/briceduke/lmvr/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/lmvr.svg)](https://npmjs.org/package/lmvr)
[![License](https://img.shields.io/npm/l/lmvr.svg)](https://github.com/briceduke/lmvr/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lmvr
$ lmvr COMMAND
running command...
$ lmvr (-v|--version|version)
lmvr/0.0.0 win32-x64 node-v16.7.0
$ lmvr --help [COMMAND]
USAGE
  $ lmvr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lmvr help [COMMAND]`](#lmvr-help-command)
* [`lmvr init [PATH]`](#lmvr-init-path)

## `lmvr help [COMMAND]`

display help for lmvr

```
USAGE
  $ lmvr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `lmvr init [PATH]`

Initialize a new, empty repository.

```
USAGE
  $ lmvr init [PATH]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/briceduke/lmvr/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
