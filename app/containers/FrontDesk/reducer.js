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
  roomId: 1,
  roomNumber: 2030,
  guestId: 1,
  guestName: 'Kim Il Sung',
  status: 'Inbound',
  checkInTime: null,
  checkOutTime: null,
  bookingTime: 1486834400
}, {
  roomId: 2,
  roomNumber: 2044,
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
    case SET_FILTER:
      return state
        .set('filter', action.filter)

    default:
      return state;
  }
}

export default frontDeskReducer;
