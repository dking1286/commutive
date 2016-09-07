const express = require('express');
const path = require('path');

const userController = require('./controllers/userController');

const app = express();

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../client/app.jade'));
});

app.get('/create', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

app.get('/get', userController.getUsers);

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
