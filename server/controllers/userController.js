const User = require('./../models/userModel');

const userController = {
  createUser(req, res, next) {
    const userInfo = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    }

    User.create(userInfo)
      .then(result => {
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

    User.findOne({email})
      .then(result => {
        if (!result) return res.sendStatus(400);
        if (result.password !== password) return res.sendStatus(400);

        res.locals.user = {
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          hourlyPay: result.hourlyPay,
          commuteTime: result.commuteTime,
          commuteDistance: result.commuteDistance
        }
        next();
      }).catch(err => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  updateUser(req, res, next) {
    const email = req.params.email;
    const {commuteTime, commuteDistance, hourlyPay} = req.body;

    User.findOneAndUpdate({email: email}, {
      $set: {commuteTime, commuteDistance, hourlyPay}
    }).then(result => {
      res.locals.user = {
        email,
        firstName: result.firstName,
        lastName: result.lastName,
        commuteTime,
        commuteDistance,
        hourlyPay
      };
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
