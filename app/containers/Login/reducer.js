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
      console.log('successfully passing from server', action)
      return state.set('error', null);
    case ERROR:
      console.log('action error', action.err)
      return state.set('error', action.err);

    default:
      return state;
  }
}

export default loginReducer;
