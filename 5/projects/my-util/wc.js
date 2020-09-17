#!/usr/bin/env node
const fs = require('fs');

const arr = process.argv;

if (arr.length !== 3) {
  console.log('specify a path');
  process.exit(1);
}

const dest = arr[2];

fs.stat(dest, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    console.error(`The path ${src} does not exist.`);
    process.exit(2);
  }

  if (stats.isDirectory()) {
    console.error(`no words in directory!`);
    process.exit(14);
  }

  function isWhitespace(c) {
    return c === ' ' || c === '\t' || c == '\n';
  }

  fs.readFile(dest, 'utf8', (err, data) => {
    if (err) throw err;

    let lines = 0;
    let chars = 0;
    let words = 0;

    for (let i = 0; i < data.length; i += 1) {
      chars += 1;
      if (isWhitespace(data[i]) && !isWhitespace(data[i - 1])) {
        words += 1;
      }
      if (data[i] === '\n') {
        lines += 1;
      }
    }

    console.log(lines, words, chars);
  });
});
