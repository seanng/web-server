const Customer = require('../customer/customer.model');
const signToken = require('./auth.service').signToken;
const controller = {};

controller.postAuth = (res, rej, req, params) => {
  const {
    username,
    password,
  } = req.body;

  return Customer.findAll({ where: { username } })
    .then((user) => {
      console.log(user.comparePassword);
      // return user[0].comparePassword(password, (err, isMatch) => {
      //   if (err) {
      //     res({ data: { error: 'DB error' } });
      //   } else if (isMatch) {
      //     res({ data: { token: signToken(user.id), user } });
      //   } else {
      //     res({ data: { error: 'Invalid password' } });
      //   }
      // });
    });
};

module.exports = controller;
