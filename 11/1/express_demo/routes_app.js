const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const productPaths = ['/product/1', '/product/2', '/product/asdf'];

  const productsPaths = ['/products', '/our-products', '/product', '/prodcts', '/productts', '/productos'];

  const params = { productPaths, productsPaths };

  res.render('index', params);
});

app.get('/product/:id(\\d+)', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  res.send(`Product ID: ${productId}`);
});

app.get('/*produ?ct+*s?', (req, res) => {
  res.send('Products');
});

app.get(/^\/((our-)?produ?ct{1, 2}s? | productos)\/?$/i, (req, res) => {
  res.send('Products');
});

const port = 8081;

app.listen(port, () => console.log(`listening on port ${port}`));
