const postAuth = (res, rej, req, params) => {
  console.log(res, rej, req, params);
  return res('post Auth');
}

module.exports = (req, params) => new Promise((res, rej) => {
  if (req.method === 'POST') return postAuth(res, rej, req, params);
})
