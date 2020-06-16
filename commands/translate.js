const { translateToGaro } = require('../helpers');

exports.command = 'translate [word]';
exports.describe = 'Get the Garo Translation of the word';
exports.handler = (argv) => {
  const { word } = argv;
  if(!word) {
    console.error('Please provide a word to translate');
    return;
  }

  translateToGaro(word);
};
