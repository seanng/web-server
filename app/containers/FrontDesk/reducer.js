/*
 *
 * FrontDesk reducer
 *
 */

import Immutable, { fromJS, isImmutable } from 'immutable';
import {
  SET_VIEW,
} from './constants';

const initialState = fromJS({
  view: 'overview',
});

function frontDeskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return state
        .set('view', action.view)

    default:
      return state;
  }
}

export default frontDeskReducer;
