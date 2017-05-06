const jwt = require('jsonwebtoken');
const secret = '19ajsadijmvz';

const signToken = function signToken(id) {
  return jwt.sign({ userId: id }, secret, { expiresIn: 36000 });
};

const validateToken = function validateToken(token, cb) {
  return jwt.verify(token, secret, cb);
};

module.exports = {
  signToken,
  validateToken,
};
