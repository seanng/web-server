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
import { TOKEN_VALIDATED, TOKEN_INVALID } from './constants'

// The initial state of the App
const initialState = fromJS({
  currentUser: null,
  loaded: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_INVALID:
      console.log('token invalid;')
      return state.set('loaded', true);

    case SUCCESS:
      window.sessionStorage.accessToken = action.token
      return state.set('currentUser', action.user);
    

    default:
      return state;
  }
}

export default appReducer;
