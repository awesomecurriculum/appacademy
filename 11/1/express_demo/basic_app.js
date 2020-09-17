const express = require('express');
// reference to express application object
const app = express();

// http://localhost:8081/ --> "Hello from Express!"

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const port = 8081;

app.listen(port, () => console.log(`listening on port ${port}`));
