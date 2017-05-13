const Employee = require('./employee.model');
const { signToken } = require('../../db/helpers');
const controller = {};

controller.createNewEmployee = (res, rej, req, params) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    phoneNo,
  } = req.body;

  return Employee.create({ username, password, firstName, lastName, email, phoneNo })
    .then((user) => ({ token: signToken(user.id), user }))
    .then((data) => res({ data }));
};

controller.getEmployee = (res, rej, req, params) => {

};

controller.putEmployee = (res, rej, req, params) => {

};

module.exports = controller;
