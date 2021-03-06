const cache = require('../../cache/config');
const { reply } = require('../helpers');

const deleteRoom = (hotelId, roomNumber, respond) => {
  console.log('deleting room.');
  const key = `${hotelId}:room:${roomNumber}`;
  return cache.srem(`${hotelId}:available`, roomNumber)
  .then( delFromSet => cache.del(key)
    .then( delHash => respond(null, roomNumber))
    .catch( delHashErr => respond(delHashErr)))
  .catch( delFromSetErr => respond(delFromSetErr))
}

module.exports = (client, action) => {
// hotelId obtained from socket token.
// for now, pass in fake hotelId of 1
  return deleteRoom(1, action.roomNumber, (err, roomNumber) => {
    if (err) {
      return reply(client, {
        type: 'DELETE_ROOM_ERROR',
        err
      });
    }
    return reply(client, {
      type: 'DELETE_ROOM_SUCCESS',
      roomNumber
    });
  });
}