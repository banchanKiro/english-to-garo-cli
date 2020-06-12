const { translateToGaro } = require('../helpers');

exports.command = 'translate [key]';
exports.describe = 'Get the Garo Translation of the word';
exports.handler = (argv) => {
  const { key } = argv;
  if(!key) {
    console.error('Please provide a word to translate');
    return;
  }

  translateToGaro(key);
};
