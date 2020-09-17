const dash = require('dashdash');
const fetch = require('node-fetch');
const fs = require('fs');

const options = {
  allowUnknown: true,
  options: [
    {
      names: ['output', 'o'],
      type: 'arrayOfString',
      help: 'file in which to store the fetched content',
    },
    {
      names: ['format', 'f'],
      type: 'string',
      help: 'format in which to return the fetched content',
    },
    {
      names: ['help', 'h'],
      type: 'bool',
      help: 'print this help and exit',
    },
  ],
};

const parser = dash.createParser(options);

const opts = parser.parse(options);
const url = opts._args[0];
console.log(opts);
const format = opts.format;

const path = opts.output;

fetch(url)
  .then(response => (format === 'json' ? response.json() : response.text()))
  .then(data =>
    fs.writeFile(path, data, err => {
      if (err) throw err;
      console.log('The file has been saved');
    })
  );
