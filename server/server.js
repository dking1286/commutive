const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express();

app.set('view engine', 'jade');

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.use(
  express.static(path.join(__dirname, '../client')),
  createLocalsObject,
  bodyParser.urlencoded({extended : true})
);

app.use((req, res, next) => {
  console.log(req.body);
  next();
})

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


function createLocalsObject(req, res, next) {
  res.locals = {};
  next();
}
