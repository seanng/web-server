const Customer = require('../customer/customer.model');

const { signToken, validateToken } = require('../../db/helpers');
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

controller.validateToken = function validate(res, rej, req, params) {
  const {
    token,
  } = req.body;
  validateToken(token, (err, decoded) => {
    if (err) {
      return res({ data: { error: 'Decoding token error' } });
    } else if (decoded) {
      return Customer.findOne({ where: { id: decoded.userId } })
        .then((user) => {
          if (user) {
            res({ data: { token, user } });
          } else {
            res({ error: 'User does not exist' });
          }
        });
    }
  });
};

module.exports = controller;
