/*
 *
 * FrontDesk reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
  UPDATE_AVAILABILITY,
} from './constants';

const fakeData = {
  inbound: [{
    guestName: 'Lauren Brown',
    bookingTime: 1486834400,
    checkinTime: null,
    checkoutTime: null
  }, {
    guestName: 'Andrew Johnston',
    bookingTime: 1486864400,
    checkinTime: null,
    checkoutTime: null
  }],
  inroom: [{
    guestName: 'Josh Smith',
    checkinTime: 1486804400,
    bookingTime: 1485894400,
    checkoutTime: null
  }],
  checkedout: 1
}

const initialState = fromJS({
  view: 'overview',
  inbound: fakeData.inbound,
  inroom: fakeData.inroom,
  checkedout: fakeData.checkedout,
  availability: 0
});

function frontDeskReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIEW:
      return state
        .set('view', action.view)
    case UPDATE_AVAILABILITY:
    // also need to update saga.
      return state
        .set('availability', action.vacancies)

    default:
      return state;
  }
}

export default frontDeskReducer;
