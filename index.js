const yargs = require('yargs');

const args = process.argv.slice(2);

if (args.length === 0) {
  yargs.showHelp();
  return;
}

yargs
  .command(require('./commands/translate'))
  .alias('v','version')
  .alias('h','help')
  .version()
  .help()
  .argv;