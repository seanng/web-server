const Customer = require('../../db/config').Customer;
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const cipher = Promise.promisify(bcrypt.hash);
// const compare = Promise.promisify(bcrypt.compare);

Customer.beforeCreate((user, options) => {
  return cipher(user.password, null, null).then((hashedPw) => {
    user.password = hashedPw;
  });
});
