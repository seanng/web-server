const cache = require('../cache/config');
// const { retrieveStays } = require('../db/helpers');

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

const webLogin = (details, respond) => {
  // if authentication with postgres is successful,
    // a) create token with a payload containing employeeId.
    // b) respond(null, token)
  // else
    // respond with err
}

const fetchRooms = (hotelId, respond) => {
  let pattern = `${hotelId}:room:*`;
  cache.keys(pattern)
  .then(keys => {
    let rooms = [];
    keys.reduce((promiseChain, key) => {
      return cache.hgetall(key)
      .then(room => {
        if (room.status === 'Available') {
          room.guestName = '( empty )'
        }
        room.roomNumber = key.split(':')[2];
        return rooms.push(room);
      })
    }, Promise.resolve())
    .then(() => {
      respond(rooms)
    })
  })
  // get all rooms from cache that start with 'hotelId'
    // const roomKeys = cache.keys(`${hotelId}:room:*`)
    // console.log(roomKeys)
    // const rooms = roomKeys.map(key => cache.hgetall(key))
  // respond(rooms)
}

const fetchStays = (hotelId, respond) => null;
// retrieveStays(hotelId, respond);


const createRoom = (hotelId, roomNumber, respond) => {
  /* create new room in redis. we'll be temporarily using a fake hotelId of "111", so all rooms in the cache will be part of rooms key 111.

  redis rooms cache should look like this:
    {
      111:room:roomNumber: {
        roomType,
        employeeId,
        status,
        bookingTime,
        checkInTime,
        checkOutTime,
        guestId,
      },
      // for faster access in mobile app.
      111:available: Set of roomNumbers,
    } */

  if (!roomNumber) return respond('enter roomNumber')

  const key = `${hotelId}:room:${roomNumber}`;
  // THIS IS TEMPORARILY HARDCODED
  const employeeId = '123';
  // First, make sure the room does not exist
  return cache.exists(key)
  .then( exists => {
    if (exists*1)
      return respond('exists');
    // Second, add room to the available rooms set
    cache.sadd(`${hotelId}:available`, roomNumber);
    // Third, create new hash in Redis for the room
    return cache.hmset(key, 'status', 'Available', 'employeeId', employeeId)
    .then(() =>
      respond(null, {
        roomNumber,
        employeeId,
        customerName: '( empty )',
        status: 'Available',
      }))
    .catch((error)=> {
      respond(error);
    });
  })

}

const deleteRoom = (hotelId, roomNumber, respond) => {
  console.log('deleting room.');
  const key = `${hotelId}:room:${roomNumber}`;
  return cache.srem(`${hotelId}:available`, roomNumber)
  .then( delFromSet => cache.del(key)
    .then( delHash => respond(null, roomNumber))
    .catch( delHashErr => respond(delHashErr)))
  .catch( delFromSetErr => respond(delFromSetErr))
}

// const bookRoom = (custId ) => {

// }

const checkIn = (hotelId, roomNumber, respond) => {
  const key = `${hotelId}:room:${roomNumber}`;
  const checkInTime = Date.now();
  console.log('checkintime:', checkInTime)
  const status = 'Checked In';
  cache.hmset(key, 'status', status, 'checkInTime', checkInTime)
  .then( updateHash => respond(null, { roomNumber, status, checkInTime }))
  .catch( err => respond(err) )

}

const makeAvailable = (hotelId, roomNumber, respond) => {
  const key = `${hotelId}:room:${roomNumber}`;
  cache.hmset(key, 'status', 'Available')
  .then(ok => respond(null))
  .catch(err => respond(err))
}

module.exports = {
  webAuthenticate,
  webLogin,
  fetchRooms,
  createRoom,
  deleteRoom,
  // bookRoom,
  checkIn,
  fetchStays,
  makeAvailable,
}