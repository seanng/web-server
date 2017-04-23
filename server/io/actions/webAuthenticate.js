// call this on app start.
const webAuthenticate = (token, respond) => {
  // if (!token)
    // return respond('no token')
  // check token with the jwt secret.
  // token should contain employeeId
  // if successful authentication,
    // a) get userInfo from postgres with employeeId
    // b) respond(null, userInfo)
  // else
    // return respond('token error')
}

module.exports = (client, action) => webAuthenticate(action.token, (err, userInfo) => {

});