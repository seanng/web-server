const socketIO = require('socket.io');
const routeHandler = require('./routes');

module.exports = (server) => {
  const io = socketIO.listen(server);
  io.on('connection', (client) => {
    console.log('client connected: ' + client.id);
    routeHandler(io, client);
  })
  return io;
}
