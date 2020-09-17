#!/usr/bin/env node
const fs = require('fs');

const arr = process.argv;

if (arr.length !== 3) {
  console.log('specify a path');
  process.exit(1);
}

const dest = arr[2];

fs.readFile(dest, 'utf8', (err, data) => {
  if (err) throw err;

  let arr = data.split('\n');
  // for (let i = 0; i < 10; i++) {
  //   console.log(arr[i]);
  // }
  console.log(arr.slice(0, 10).join('\n'));
});

fs.stat(dest, (err, stats) => {
  if (!stats.isFile()) {
    console.error(`The path ${dest} is not a file.`);
    process.exit(17);
  }
});
