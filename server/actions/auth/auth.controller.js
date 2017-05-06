const Customer = require('../customer/customer.model');
<<<<<<< HEAD
const { signToken } = require('../../db/helpers');
=======
const signToken = require('./auth.service').signToken;
>>>>>>> 721eeb2653a0ec168fa8fa9fdc4c32e06b23a258
const controller = {};

controller.postAuth = (res, rej, req, params) => {
  const {
    username,
    email,
    password,
  } = req.body;

  return Customer.findOne({ where: { username } })
    .then((user) => {
      return user.comparePassword(password, (err, isMatch) => {
        if (err) {
          res({ data: { error: 'DB error' } });
        } else if (isMatch) {
          res({ data: { token: signToken(user.id), user } });
        } else {
          res({ data: { error: 'Invalid password' } });
        }
      });
    });
};

module.exports = controller;
