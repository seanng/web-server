/*
 *
 * Account reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
  SET_EARNINGS_FILTER
} from './constants';

const initialState = fromJS({
	view: 'earnings',
	earningsFilter: ''
});

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIEW:
      return state.set('view', action.view);
    case SET_EARNINGS_FILTER:
      return state.set('earningsFilter', action.earningsFilter);
    default:
      return state;
  }
}

export default accountReducer;
