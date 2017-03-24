const cache = require('../../cache/config');
const { reply } = require('../helpers');

const fetchRooms = (hotelId, respond) => {
  let pattern = `${hotelId}:room:*`;
  cache.keys(pattern)
  .then(keys => {
    let rooms = [];
    keys.reduce((promiseChain, key) => {
      return cache.hgetall(key)
      .then(room => {
        if (room.status === 'Available') {
          room.customerName = '( empty )'
        }
        room.roomNumber = key.split(':')[2];
        return rooms.push(room);
      })
    }, Promise.resolve())
    .then(() => {
      respond(rooms)
    })
  })
}

module.exports = (client, action) => {
  return fetchRooms(1, (rooms) => {
    if (!rooms) {
      return reply(client, {
        type: 'FETCH_ROOMS_ERROR'
      })
    }
    return reply(client, {
      type: 'FETCH_ROOMS_SUCCESS',
      rooms
    })
  })
}