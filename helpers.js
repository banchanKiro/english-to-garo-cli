const fs = require('fs');
const readline = require('readline');
const { appFolder } = require('./constants');
const readStream = fs.createReadStream([appFolder, 'file.dat'].join("/"));

exports.translateToGaro = (word) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });
  
  let notFound = true;

  rl.on('line', (line) => {
    [english, garo] = line.split('=');
    if( english === word ) {
      console.log(`${english}: ${garo}`);
      notFound = false;
      rl.close();
      readStream.destroy();
    }
  });

  rl.on('close', () => {
    if(notFound) {
      console.error(`${word} was not found in the dictionary.`);
    }
  });
};