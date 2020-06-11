const fs = require('fs');
const readline = require('readline');
const { appFolder } = require('../constants');
const readStream = fs.createReadStream([appFolder, 'file.dat'].join("/"));

exports.command = 'translate [key]';
exports.describe = 'Get the Garo Translation of the word';
exports.handler = (argv) => {
  const { key } = argv;
  if(!key) {
    console.error('Please provide a word to translate');
  }

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });
  
  rl.on('line', (line) => {
    [english, garo] = line.split('=');
    if( english === key ) {
      console.log(`${english}: ${garo}`);
    }
  });
};
