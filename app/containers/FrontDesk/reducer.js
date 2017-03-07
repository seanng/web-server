/*
 *
 * FrontDesk reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_VIEW,
  SELECT_ADD_ROOM,
  SET_FILTER,
} from './constants';

const fakeData = [{
  roomNumber: '2030',
  guestId: 1,
  guestName: 'Kim Il Sung',
  status: 'Inbound',
  checkInTime: null,
  checkOutTime: null,
  bookingTime: 1486834400
}, {
  roomNumber: '2044',
  guestId: 2,
  guestName: 'Kim Pang Jun',
  status: 'Checked In',
  checkInTime: 1486804400,
  checkOutTime: null,
  bookingTime: 1486834400
}]

const initialState = fromJS({
  view: 'overview',
  rooms: fakeData,
  filter: 'all',
  createRoomError: false,
  displayAddRoom: false,
});

function frontDeskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return state
        .set('view', action.view)

    case SELECT_ADD_ROOM:
      return state
        .set('displayAddRoom', action.display)

    case 'CREATE_ROOM_ERROR':
      console.log('create room error', action.err)
      return state
        .set('createRoomError', action.err)

    case 'CREATE_ROOM_SUCCESS':
      console.log('create room success', action.room)
      return state
        .set('createRoomError', false)
        .set('displayAddRoom', false)
        .update('rooms', rooms => rooms.concat(action.room))

    case 'DELETE_ROOM_SUCCESS':
      console.log("delete room success", action.roomNumber)
      return state
        .update('rooms', rooms => rooms.filter(room => room.roomNumber !== action.roomNumber))

    case 'CHECK_IN_SUCCESS':
      console.log('we in here.', action.roomData)
      const { roomNumber, status, checkInTime } = action.roomData;
      return state
      .update('rooms', rooms =>
        rooms
        .update(rooms.findIndex(room =>
          room.get('roomNumber') === roomNumber), room =>
          room
          .set('status', status)
          .set('checkInTime', checkInTime)))

    case SET_FILTER:
      return state
        .set('filter', action.filter)

    default:
      return state;
  }
}

export default frontDeskReducer;
