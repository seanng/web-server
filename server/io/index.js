const { webAuthenticate, webLogin, getRooms, createRoom, deleteRoom, checkIn, } = require('./helpers');

module.exports = (server) => {
  const io = require('socket.io').listen(server);
  io.on('connection', (client) => {
    console.log('client connected: ' + client.id);

    const reply = (data) => client.emit('action', data);

    client.on('action', action => {
      switch (action.type) {

        case 'server/WEB_AUTHENTICATE':
          // call this on app start.
          const { token } = action;
          return webAuthenticate(token, (err, userInfo) => {

          })

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
          return getRooms(hotelId, rooms => {
            if (!rooms)
              return reply({ type: 'GET_ROOMS_ERROR' })
            return reply({ type: 'GET_ROOMS_SUCCESS', rooms })
          })

        case 'server/GET_STAYS':
          return getStays()

        case 'server/CREATE_ROOM':
          // hotelId obtained from socket token.
          // for now, pass in fake hotelId of 111
          return createRoom(111, action.roomNumber, (err, room) => {
            if (err)
              return reply({ type: 'CREATE_ROOM_ERROR', err });
            return reply({ type: 'CREATE_ROOM_SUCCESS', room });
          })

        case 'server/DELETE_ROOM':
          // hotelId obtained from socket token.
          // for now, pass in fake hotelId of 111
          return deleteRoom(111, action.roomNumber, (err, roomNumber) => {
            if (err)
              return reply({ type: 'DELETE_ROOM_ERROR', err });
            return reply({ type: 'DELETE_ROOM_SUCCESS', roomNumber });
          })

        // this wouldn't be a socket route.
        // case 'server/BOOK_ROOM':
          // const { roomNumber } = action;
          // return bookRoom(client, 111, roomNumber, (err, room) => {
            // if (err)
              // return reply({ type: 'BOOK_ROOM_ERROR', err })
            // return io.emit "book room success" with room data to hotel and client.
          // })

        case 'server/CHECK_IN':
          const { roomNumber } = action;
          return checkIn(111, roomNumber, (err, roomData) => {
            if (err)
              return reply({ type: 'CHECK_IN_ERROR', err })
            return reply({ type: 'CHECK_IN_SUCCESS', roomData })
          })

      }
    })

    // OBSOLETE!

    client.on('book room', () => {
      // update in Redis:
        // a) room status to inbound
        // b) customerId
      // on Redis update success,
        // a) add Stay creation in PostgreSQL to queue
        // b) emit to iOS and web "booked room" with room info data
    });

    client.on('unbook room', () => {
      // update in Redis:
        // a) room status to available
        // b) remove customerId
      // on Redis update success,
        // a) add Stay update of status to "cancelled" to queue
        // b) emit to iOS and web "unbooked room" with room info data
    });

    client.on('check in', () => {
      // update in Redis:
        // a) room status to checked in
        // b) check in time
      // on Redis update success,
        // a) add Stay updates to queue
        // b) emit to iOS and web "checked in" with room info data
    })

    client.on('check out', () => {
      // delete room in Redis
      // on Redis delete success,
        // a) add Stay update of status to "checked out" to queue, with checkout time
        // b) emit to iOS and web "checked out" with room info data
    })

    client.on('delete room', () => {
      // delete room in Redis
    })

  })

  return io;
}