const User = require('./../models/userModel');

const userController = {
  createUser(req, res, next) {
    console.log('req.body is', req.body);
    const userInfo = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    }

    User.create(userInfo)
      .then(result => {
        console.log(`User created with info ${userInfo}`);
        console.log(`result is ${result}`);

        res.locals.user = {
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
        }
        next();
      }).catch(err => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  getUserData(req, res, next) {
    const {email, password} = req.body;

    User.find({email, password})
      .then(result => {
        res.locals.user = {
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          hourlyPay: NaN,
          commuteTime: NaN,
          commuteDistance: NaN
        }
        next();
      }).catch(err => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  getUsers(req, res, next) {
    User.find({})
      .then(data => {
        res.locals.data = data;
        next();
      }).catch(err => {
        console.error(err);
        throw err;
      });
  },
};

module.exports = userController;
