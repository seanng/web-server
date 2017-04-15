const jwt = require('jsonwebtoken');

const signToken = function signToken(id) {
  return jwt.sign({ userId: id }, 'random_Secret', { expiresIn: 36000 });
};

module.exports = {
  signToken,
};
