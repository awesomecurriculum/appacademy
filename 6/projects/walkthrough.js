const http = require('http');

http
  .createServer(function (request, response) {
    if (request.url === '/200') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<h1>OK</h1>');
      response.end();
    } else {
      response.writeHead(404);
    }
  })
  .listen(8080, function () {
    console.log('Listening for reequests on port 8080...');
  });
