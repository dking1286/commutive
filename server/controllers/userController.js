const User = require('./../models/userModel');

const userController = {
  createUser(req, res, next) {
    const userInfo = {
      email: 'test2@hello.com',
      firstName: 'First',
      lastName: 'Last',
      password: 'super secure',
      hourlyPay: 2,
      commuteTime: 200,
      commuteDistance: 20,
    }

    User.create(userInfo)
      .then(result => {
        console.log('User created');
        next();
      }).catch(err => {
        console.error(err);
        throw err;
      });
  },

  getUsers(req, res, next) {
    User.find({})
      .then(results => {
        res.json(results);
      }).catch(err => {
        console.error(err);
        throw err;
      })
  },
};

module.exports = userController;
