const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../client/app.jade'));
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
