const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Error: expected arguements');
}

const readStream = fs.createReadStream('./file.dat');
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  [key, value] = line.split('=');
  index = args.findIndex((arg) => arg === key);
  if (index >= 0) {
    console.log(key,': ', value)
  }
});
