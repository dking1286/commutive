const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express();

app.set('view engine', 'jade');

app.use(
  express.static(path.join(__dirname, '../client')),
  createLocalsObject,
  logRequests,
  bodyParser.urlencoded({extended : true})
);

// ROUTES
app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../client/app.jade'));
});

app.post('/login', userController.getUserData, (req, res) => {
  res.json(res.locals.user);
});

app.post('/signup', userController.createUser, (req, res) => {
  res.json(res.locals.user);
});

app.post('/user/:email', userController.updateUser, (req, res) => {
  res.json(res.locals.user);
});

app.get('/users', userController.getUsers, (req, res) => {
  res.json(res.locals.data);
});

app.use((req, res) => {
  res.status(400);
  res.send('Error');
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});

function logRequests(req, res, next) {
  console.log(req.method, req.url);
  next();
}


function createLocalsObject(req, res, next) {
  res.locals = {};
  next();
}
