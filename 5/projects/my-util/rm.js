#!/usr/bin/env node
const fs = require('fs');

const arr = process.argv;

if (arr.length < 3) {
  console.log('specify a file!');
  process.exit(1);
}
for (let i = 2; i < arr.length; i++) {
  let src = arr[i];
  fs.unlink(src, err => {
    if (err) throw err;
  });
}
