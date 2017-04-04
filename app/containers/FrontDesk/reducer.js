/*
 *
 * FrontDesk reducer
 *
 */

import Immutable, { fromJS, isImmutable } from 'immutable';
import {
  ADD_CHARGE,
  SET_VIEW,
  SELECT_ADD_ROOM,
  SET_FILTER,
  FETCH_STAYS,
  FETCH_CHARGES,
  HIDE_CHARGES_MODAL,
} from './constants';

const initialState = fromJS({
  view: 'overview',
  rooms: [],
  stays: [],
  stay: {},
  charges: [],
  filter: 'all',
  createRoomError: false,
  displayAddRoom: false,
  viewCharges: false,
  isReviewLoading: true,
  fetchStaysError: false,
  fetchRoomsError: false,
  fetchChargesError: false,
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
        .set('rooms', Immutable.List())
        .set('fetchRoomsError', true)

    case FETCH_STAYS:
      return state
        .set('stays', Immutable.Map())
        .set('isReviewLoading', true)

    case 'FETCH_STAYS_SUCCESS':
      let fetchedStays = action.stays.map(stay => Immutable.Map(stay))
      return state
        .set('stays', Immutable.List(fetchedStays))
        .set('fetchStaysError', false)
        .set('isReviewLoading', false)

    case 'FETCH_STAYS_ERROR':
      return state
        .set('fetchStaysError', true)

    case FETCH_CHARGES:
      let stays = state.get('stays');
      let stayIndex = stays.findIndex(stay => stay.get('id') === action.stayId);
      return state 
        .set('stay', stays.get(stayIndex))

    case 'FETCH_CHARGES_SUCCESS':
      let newCharges = action.charges.map(charge => {
        charge.updated = true;
        return Immutable.Map(charge);
      })
      return state
        .set('charges', Immutable.List(newCharges))
        .set('fetchChargesError', false)
        .set('viewCharges', true)

    case 'FETCH_CHARGES_ERROR':
      return state
        .set('fetchChargesError', action.err)

    case HIDE_CHARGES_MODAL:
      return state
        .set('viewCharges', false)
        .set('charges', Immutable.List())
        .set('stay', Immutable.Map())

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

    case SET_FILTER:
      return state
        .set('filter', action.filter)

    case ADD_CHARGE: 
      return state
        .update('charges', charges => charges.set(charges.size, Immutable.Map(action.charge)))

    case 'SAVE_CHARGES_SUCCESS':
      let updatedCharges = action.charges.map(charge => {
        charge.updated = true;
        return Immutable.Map(charge);
      })
      return state
        .set('charges', Immutable.List(updatedCharges))
        .set('fetchChargesError', false)
        .set('viewCharges', false)
        .update('stays', stays => 
          stays.update(stays.findIndex(stay => 
            stay.get('id') == action.stayId
          ), stay =>
            stay.set('totalCharge', action.newTotal)
          ))

    default:
      return state;
  }
}

export default frontDeskReducer;
