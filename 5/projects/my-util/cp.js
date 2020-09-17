#!/usr/bin/env node
const fs = require('fs');

const arr = process.argv;

if (arr.length !== 4) {
  console.log('try again with 2!');
  process.exit(1);
}

const src = arr[2];
const dest = arr[3];

fs.copyFile(src, dest, err => {
  if (err) throw err;
});

fs.stat(src, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    console.error(`The path ${src} does not exist.`);
    process.exit(9);
  }

  if (stats.isDirectory()) {
    console.error(`The path ${src} is a directory.`);
    process.exit(10);
  }
});
