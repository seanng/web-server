const { webAuthenticate, webLogin, fetchRooms, createRoom, deleteRoom, makeAvailable, checkIn, fetchStays } = require('./helpers');

module.exports = (io, client) => {

  const reply = (data) => client.emit('action', data);

  client.on('action', (action) => {
    switch (action.type) {
      case 'server/WEB_AUTHENTICATE':
        // call this on app start.
        const { token } = action;
        return webAuthenticate(token, (err, userInfo) => {

        });

      case 'server/WEB_LOGIN':
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

      case 'server/FETCH_ROOMS':
        return fetchRooms(1, (rooms) => {
          if (!rooms) {
            return reply({
              type: 'FETCH_ROOMS_ERROR'
            })
          }
          return reply({
            type: 'FETCH_ROOMS_SUCCESS',
            rooms
          })
        });

      case 'server/FETCH_STAYS':
        console.log('fetching stays.')
        return fetchStays(1, (err, stays) => {
          if (err) {
            return reply({
              type: 'FETCH_STAYS_ERROR'
            })
          }
          return reply({
            type: 'FETCH_STAYS_SUCCESS',
            stays
          })
        })

      case 'server/CREATE_ROOM':
      // hotelId obtained from socket token.
      // for now, pass in fake hotelId of 1
        return createRoom(1, action.roomNumber, (err, room) => {
          if (err) {
            return reply({
              type: 'CREATE_ROOM_ERROR',
              err
            });
          }
          return reply({
            type: 'CREATE_ROOM_SUCCESS',
            room
          });
        });

      case 'server/MAKE_AVAILABLE':
        const { roomNumber, key } = action;
        return makeAvailable(1, roomNumber, (err) => {
          if (err) {
            return reply({
              type: 'MAKE_AVAILABLE_ERROR',
              err
            });
          }
          return reply({
            type: 'MAKE_AVAILABLE_SUCCESS',
            roomNumber, key
          })
        })

      case 'server/DELETE_ROOM':
      // hotelId obtained from socket token.
      // for now, pass in fake hotelId of 1
        return deleteRoom(1, action.roomNumber, (err, roomNumber) => {
          if (err) {
            return reply({
              type: 'DELETE_ROOM_ERROR',
              err
            });
          }
          return reply({
            type: 'DELETE_ROOM_SUCCESS',
            roomNumber
          });
        });

      case 'server/CHECK_IN':
      // hotelId obtained from socket token.
      // for now, pass in fake hotelId of 1
        return checkIn(1, action.roomNumber, (err, roomData) => {
          if (err) {
            return reply({
              type: 'CHECK_IN_ERROR',
              err
            })
          }
          return reply({
            type: 'CHECK_IN_SUCCESS',
            roomData
          })
          // need to also update iOS
        });

      default:
        return reply({ type: '404' })
    };
  })
}