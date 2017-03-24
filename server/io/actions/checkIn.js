const cache = require('../../cache/config');
const { reply } = require('../helpers');

const checkIn = (hotelId, roomNumber, respond) => {
  const key = `${hotelId}:room:${roomNumber}`;
  const checkInTime = Date.now();
  console.log('checkintime:', checkInTime)
  const status = 'Checked In';
  cache.hmset(key, 'status', status, 'checkInTime', checkInTime)
  .then( updateHash => respond(null, { roomNumber, status, checkInTime }))
  .catch( err => respond(err) )
}

module.exports = (client, action) => {
  // hotelId obtained from socket token.
  // for now, pass in fake hotelId of 1
  return checkIn(1, action.roomNumber, (err, roomData) => {
    if (err) {
      return reply(client, {
        type: 'CHECK_IN_ERROR',
        err
      })
    }
    return reply(client, {
      type: 'CHECK_IN_SUCCESS',
      roomData
    })
    // need to also update iOS
  });
}