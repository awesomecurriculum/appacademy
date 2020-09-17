const fetch = require('node-fetch');

// fetch('https://api.github.com/users/matt-ramotar')
//   .then(res => res.json())
//   .then(json => console.log(json));

async function fetcher() {
  const res = await fetch('https://api.github.com/users/matt-ramotar');
  return res.json();
}

fetcher().then(res => console.log(res));
