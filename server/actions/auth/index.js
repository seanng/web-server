const controller = require('./auth.controller');

module.exports = (req, params) => new Promise((res, rej) => {
  if (req.method === 'POST') return controller.postAuth(res, rej, req, params);
});
