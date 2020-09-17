const http = require('http');
const ReasonPhrase = require('./ReasonPhrase');

http
  .createServer(function (req, res) {
    const statusCode = ReasonPhrase.get(req.url);
    if (statusCode) {
      res.write('<h1>OK</h1>');
      res.writeHead(statusCode);
      console.log(`${statusCode} ${req.url}`);
      res.end();
    } else {
      console.log('404 File Not Found');
      res.writeHead(404);
      res.end();
    }
  })
  .listen(3000, function () {
    console.log('Listening on port 3000...');
  });
