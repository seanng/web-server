const Customer = require('../customer/customer.model');
const Employee = require('../employee/employee.model');
const signToken = require('./auth.service').signToken;
const controller = {};

controller.postAuth = (res, rej, req, params) => {
  const {
    username,
    email,
    password,
  } = req.body;

  if (params[0] === 'employee') {
    return Employee.findOne({ where: { email } })
      .then(validateUser)
  }

  return Customer.findOne({ where: { username } })
    .then(validateUser);
};

const validateUser = (user) =>
  user.comparePassword(password, (err, isMatch) => {
    if (err) {
      res({ data: { error: 'DB error' } });
    } else if (isMatch) {
      res({ data: { token: signToken(user.id), user } });
    } else {
      res({ data: { error: 'Invalid password' } });
    }
  });

module.exports = controller;
