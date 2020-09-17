// imports express module
const express = require('express');

// create the express application object
// can call variety of methods handle req/res
const app = express();

// Define Route #1
app.get('/', (req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request method: ${req.path}`);
  console.log(req);

  res.send('Route #1');
});

// Define Route #2
app.get('/', (req, res) => {
  res.send('Route #2');
});

// Define Route #3
app.get('/search/:wildcard', (req, res) => {
  let wildcardValue = req.params.wildcard;
  console.log(`Wildcard value: ${wildcardValue}`);

  res.send(`Wildcard route: ${wildcardValue}`);
});

/* app.get('/search/:tag', (req, res) => {
  let val = req.params.tag;
  console.log(req.params);
  console.log(`Wildcard value: ${val}`);
});
*/

// define a port and start listening for connections
const port = 8080;

// cb called when listening for http connections from client
app.listen(port, () => console.log(`Listening on port ${port}...`));
