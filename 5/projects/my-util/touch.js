#!/usr/bin/env node
const fs = require('fs');

const arr = process.argv;

if (arr.length !== 3) {
  console.log('specify a path');
  process.exit(1);
}

const dest = arr[2];

fs.writeFile(dest, '', err => {
  if (err) throw err;
});

fs.stat(dest, (err, stats) => {
  console.log(stats.mtime);
  if (stats.isFile()) {
    return fs.utimes(dest, stats.atime, new Date(), err => {
      if (err) throw err;
    });
  }
  console.log(stats.mtime);
  if (stats.isDirectory()) {
    console.error(`The path ${dest} is a directory.`);
    process.exit(2);
  }
});
