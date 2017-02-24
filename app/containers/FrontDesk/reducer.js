/*
 *
 * FrontDesk reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_VIEW,
  ADD_ROOM
} from './constants';

const fakeData = [{
  stayId: 1,
  roomNumber: 2030,
  guestName: 'Kim Il Sung',
  status: 'inbound',
  checkInTime: null,
  checkOutTime: null,
  bookingTime: 1486834400
}, {
  stayId: 2,
  roomNumber: 2044,
  guestName: 'Kim Pang Jun',
  status: 'inroom',
  checkInTime: 1486804400,
  checkOutTime: null,
  bookingTime: 1486834400
}]

const initialState = fromJS({
  view: 'overview',
  stays: fakeData,
});

function frontDeskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return state
        .set('view', action.view)
    case ADD_ROOM:
      return state
        //update backend
        .set('')

    default:
      return state;
  }
}

export default frontDeskReducer;
