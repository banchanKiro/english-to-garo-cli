const fs = require('fs');
const readline = require('readline');
const { appFolder } = require('./constants');
const readStream = fs.createReadStream([appFolder, 'file.dat'].join("/"));

exports.translateToGaro = (word) => {
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });
  
  rl.on('line', (line) => {
    [english, garo] = line.split('=');
    if( english === word ) {
      console.log(`${english}: ${garo}`);
      rl.close();
      readStream.destroy();
    }
  });
};