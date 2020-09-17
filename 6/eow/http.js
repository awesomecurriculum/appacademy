const http = require('http');

http
  .createServer(function (req, res) {
    if (req.url === '/OK') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write('OK');
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(8000, () => console.log('Server listening on port 8000'));
