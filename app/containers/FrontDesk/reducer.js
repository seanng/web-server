/*
 *
 * FrontDesk reducer
 *
 */

import Immutable, { fromJS, isImmutable } from 'immutable';
import {
  SET_VIEW,
  SELECT_ADD_ROOM,
  SELECT_VIEW_CHARGES,
  SET_FILTER,
  FETCH_STAYS,
} from './constants';

const initialState = fromJS({
  view: 'overview',
  rooms: [],
  stays: [],
  filter: 'all',
  createRoomError: false,
  displayAddRoom: false,
  viewCharges: false,
  isReviewLoading: true,
  fetchStaysError: false,
  fetchRoomsError: false,
});

function frontDeskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return state
        .set('view', action.view)

    case SELECT_ADD_ROOM:
      return state
        .set('displayAddRoom', action.display)

    case 'FETCH_ROOMS_SUCCESS':
      let rooms = action.rooms.map(room => Immutable.Map(room))
      return state
        .set('rooms', Immutable.List(rooms))

    case 'FETCH_ROOMS_ERROR':
      return state
        .set('rooms', [])
        .set('fetchRoomsError', true)

    case FETCH_STAYS:
      return state
        .set('stays', [])
        .set('isReviewLoading', true)

    case 'FETCH_STAYS_SUCCESS':
      let stays = action.stays.map(stay => Immutable.Map(stay))
      return state
        .set('stays', Immutable.List(stays))
        .set('fetchStaysError', false)
        .set('isReviewLoading', false)

    case 'FETCH_STAYS_ERROR':
      return state
        .set('fetchStaysError', true)

    case SELECT_VIEW_CHARGES:
      return state
        .set('viewCharges', action.stay)

    case 'CREATE_ROOM_ERROR':
      return state
        .set('createRoomError', action.err)

    case 'CREATE_ROOM_SUCCESS':
      return state
        .set('createRoomError', false)
        .set('displayAddRoom', false)
        .update('rooms', rooms => rooms.set(rooms.size, Immutable.Map(action.room)))

    case 'DELETE_ROOM_SUCCESS':
      return state
        .update('rooms', rooms => rooms.filter(room => room.get('roomNumber') !== action.roomNumber))

    case 'MAKE_AVAILABLE_ERROR':
      return

    case 'MAKE_AVAILABLE_SUCCESS':
      return state
        .setIn(['rooms', action.key], Immutable.Map({
          roomNumber: action.roomNumber,
          employeeId: 123,
          status: 'Available',
          guestName: '( empty )'
        }))

    case 'CHECK_IN_SUCCESS':
      const { roomNumber, status, checkInTime } = action.roomData;
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

    case SET_FILTER:
      return state
        .set('filter', action.filter)

    default:
      return state;
  }
}

export default frontDeskReducer;
