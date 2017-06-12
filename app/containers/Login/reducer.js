/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { push } from 'react-router-redux';
import {
  LOGIN,
  SUCCESS,
  ERROR,
} from './constants';

const initialState = fromJS({
  nextPathName: null,
  error: null
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return state.set('error', null);
    case ERROR:
      console.log('action error', action.err)
      return state.set('error', action.err);

    default:
      return state;
  }
}

export default loginReducer;
