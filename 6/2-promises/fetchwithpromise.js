const fetch = require('node-fetch');
const github = new Map();
fetch('https://api.github.com/users/matt-ramotar')
  .then(res => res.json())
  .then(json => github.set(json.login, json))
  .then(() => console.log(github));
