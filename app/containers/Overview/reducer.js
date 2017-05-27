import { Map, List, fromJS } from 'immutable';
import {
  SET_FILTER,
  SELECT_ADD_ROOM_MODAL
} from './constants';

const initialState = fromJS({
  displayAddRoomModal: false,
  rooms: [],
  filter: 'all',
  fetchRoomsError: false,
  createRoomError: false
});

function overviewReducer(state = initialState, action) {
  switch (action.type) {

    case SELECT_ADD_ROOM_MODAL:
      return state
        .set('displayAddRoom', action.display)

    case SET_FILTER:
      return state
        .set('filter', action.filter)

    case 'FETCH_ROOMS_SUCCESS':
      let rooms = action.rooms.map(room => Map(room))
      return state
        .set('rooms', List(rooms))

    case 'FETCH_ROOMS_ERROR':
      return state
        .set('rooms', List())
        .set('fetchRoomsError', true)

    case 'CREATE_ROOM_ERROR':
      return state
        .set('createRoomError', action.err)

    case 'CREATE_ROOM_SUCCESS':
      return state
        .set('createRoomError', false)
        .set('displayAddRoom', false)
        .update('rooms', rooms => rooms.set(rooms.size, Map(action.room)))

    case 'DELETE_ROOM_SUCCESS':
      return state
        .update('rooms', rooms => rooms.filter(room => room.get('roomNumber') !== action.roomNumber))

    case 'MAKE_AVAILABLE_ERROR':
      return

    case 'MAKE_AVAILABLE_SUCCESS':
      return state
        .setIn(['rooms', action.key], Map({
          roomNumber: action.roomNumber,
          employeeId: 123,
          status: 'Available',
          guestName: '( empty )'
        }))

    case 'CHECK_IN_SUCCESS':
      let { roomNumber, status, checkInTime } = action.roomData;
      return state
      .update('rooms', rooms =>
        rooms
        .update(rooms.findIndex(room =>
          room.get('roomNumber') === roomNumber
        ), room =>
          room
          .set('status', status)
          .set('checkInTime', checkInTime))
      )

    default:
      return state;
  }
}

export default overviewReducer;
