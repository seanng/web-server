const Customer = require('../../db/config').Customer;
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const cipher = Promise.promisify(bcrypt.hash);

Customer.beforeCreate((user, options) => {
  console.log('user', user);
  return cipher(user.password, null, null).then((hashedPw) => {
    user.password = hashedPw;
  });
});

module.exports = Customer;
