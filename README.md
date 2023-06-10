oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vinylcat-cli
$ vinylcat COMMAND
running command...
$ vinylcat (--version)
vinylcat-cli/0.0.0 darwin-x64 node-v18.15.0
$ vinylcat --help [COMMAND]
USAGE
  $ vinylcat COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vinylcat hello PERSON`](#vinylcat-hello-person)
* [`vinylcat hello world`](#vinylcat-hello-world)
* [`vinylcat help [COMMANDS]`](#vinylcat-help-commands)
* [`vinylcat plugins`](#vinylcat-plugins)
* [`vinylcat plugins:install PLUGIN...`](#vinylcat-pluginsinstall-plugin)
* [`vinylcat plugins:inspect PLUGIN...`](#vinylcat-pluginsinspect-plugin)
* [`vinylcat plugins:install PLUGIN...`](#vinylcat-pluginsinstall-plugin-1)
* [`vinylcat plugins:link PLUGIN`](#vinylcat-pluginslink-plugin)
* [`vinylcat plugins:uninstall PLUGIN...`](#vinylcat-pluginsuninstall-plugin)
* [`vinylcat plugins:uninstall PLUGIN...`](#vinylcat-pluginsuninstall-plugin-1)
* [`vinylcat plugins:uninstall PLUGIN...`](#vinylcat-pluginsuninstall-plugin-2)
* [`vinylcat plugins update`](#vinylcat-plugins-update)

## `vinylcat hello PERSON`

Say hello

```
USAGE
  $ vinylcat hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/workspace/vinylcat-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `vinylcat hello world`

Say hello world

```
USAGE
  $ vinylcat hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ vinylcat hello world
  hello world! (./src/commands/hello/world.ts)
```

## `vinylcat help [COMMANDS]`

Display help for vinylcat.

```
USAGE
  $ vinylcat help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for vinylcat.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `vinylcat plugins`

List installed plugins.

```
USAGE
  $ vinylcat plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ vinylcat plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `vinylcat plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ vinylcat plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ vinylcat plugins add

EXAMPLES
  $ vinylcat plugins:install myplugin 

  $ vinylcat plugins:install https://github.com/someuser/someplugin

  $ vinylcat plugins:install someuser/someplugin
```

## `vinylcat plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ vinylcat plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ vinylcat plugins:inspect myplugin
```

## `vinylcat plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ vinylcat plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ vinylcat plugins add

EXAMPLES
  $ vinylcat plugins:install myplugin 

  $ vinylcat plugins:install https://github.com/someuser/someplugin

  $ vinylcat plugins:install someuser/someplugin
```

## `vinylcat plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ vinylcat plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ vinylcat plugins:link myplugin
```

## `vinylcat plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vinylcat plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vinylcat plugins unlink
  $ vinylcat plugins remove
```

## `vinylcat plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vinylcat plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vinylcat plugins unlink
  $ vinylcat plugins remove
```

## `vinylcat plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ vinylcat plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ vinylcat plugins unlink
  $ vinylcat plugins remove
```

## `vinylcat plugins update`

Update installed plugins.

```
USAGE
  $ vinylcat plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
