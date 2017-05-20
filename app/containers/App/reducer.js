/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { SUCCESS } from '../Login/constants';
import { TOKEN_VALIDATED, TOKEN_INVALID, LOGOUT } from './constants'

// The initial state of the App
const initialState = fromJS({
  currentUser: null,
  checkedToken: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      console.log('successfully authenticated. the token returned is: ', action.token)
      window.localStorage.accessToken = action.token
      return state
        .set('currentUser', action.user)
        .set('checkedToken', true);

    case TOKEN_INVALID:
      console.log('the token is invalid:', action.token, 'err:', action.err)
      return state.set('checkedToken', true);

    case LOGOUT:
      return state.set('currentUser', null);

    default:
      return state;
  }
}

export default appReducer;
