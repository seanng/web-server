const socketIO = require('socket.io');
const actions = require('./actions');

const routeHandler = (io, client) => {
  client.on('action', (action) => {
    if (action.type && action.type.split('server/')[1]) {
      let actionInSnake = action.type.split('server/')[1];
      let actionInCamel = actionInSnake.toLowerCase().replace(/_\w/g, str => str[1].toUpperCase())
      if (!actions[actionInCamel]) {
        return console.log('there was a problem.')
      }
      return actions[actionInCamel](client, action);
    }
  })
}

module.exports = (server) => {
  const io = socketIO.listen(server);
  io.on('connection', (client) => {
    console.log('client connected: ' + client.id);
    routeHandler(io, client);
  })
  return io;
}