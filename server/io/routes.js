const { webAuthenticate, webLogin, getRooms, createRoom, deleteRoom, checkIn } = require('./helpers');

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

      case 'server/GET_ROOMS':
        return getRooms(hotelId, (rooms) => {
          if (!rooms) {
            return reply({
              type: 'GET_ROOMS_ERROR'
            })
          }
          return reply({
            type: 'GET_ROOMS_SUCCESS',
            rooms
          })
        });

      case 'server/GET_STAYS':
        return getStays()

      case 'server/CREATE_ROOM':
      // hotelId obtained from socket token.
      // for now, pass in fake hotelId of 111
        return createRoom(111, action.roomNumber, (err, room) => {
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

      case 'server/DELETE_ROOM':
      // hotelId obtained from socket token.
      // for now, pass in fake hotelId of 111
        return deleteRoom(111, action.roomNumber, (err, roomNumber) => {
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
      // for now, pass in fake hotelId of 111
        return checkIn(111, action.roomNumber, (err, roomData) => {
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