const webLogin = (details, respond) => {
  // if authentication with postgres is successful,
    // a) create token with a payload containing employeeId.
    // b) respond(null, token)
  // else
    // respond with err
}

module.exports = (client, action) => {
  const { details } = action;
  return webLogin(details, (err, token) => {
    if (err) {
      // if err === 'no such user'
        // return reply no such user
      // if err === 'invalid email/password'
        // return reply invalid email / password
    }
    // return reply log in success with token
  })
}