/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { push } from 'react-router-redux';
import {
  DEFAULT_ACTION,
  LOGIN,
  SUCCESS,
  ERROR
} from './constants';

const initialState = fromJS({
  nextPathName: null,
  error: null
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SUCCESS:
      return state.set('error', null);
    case ERROR: 
      return state.set('error', action.err);

    default:
      return state;
  }
}

export default loginReducer;
