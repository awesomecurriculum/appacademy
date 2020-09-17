#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');

const arr = process.argv;

if (arr.length !== 3) {
  console.log('try again with 2!');
  process.exit(1);
}

const src = arr[2];

fs.stat(src, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    console.error(`The path ${src} does not exist.`);
    process.exit(9);
  }

  if (stats.isFile()) {
    console.log(chalk.blue(src));
  }

  if (stats.isDirectory()) {
    fs.readdir(src, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        console.log(chalk.red(file));
      });
    });
  }
});
