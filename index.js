#!/usr/bin/env node

require('yargs')
  .scriptName("english-to-garo-cli")
  .usage('e2garo <cmd> [args]')
  .command(require('./commands/translate'))
  .alias('v','version')
  .alias('h','help')
  .demandCommand()
  .version()
  .help()
  .argv;