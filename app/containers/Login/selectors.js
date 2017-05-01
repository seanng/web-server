import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.toJS()
);

const selectNextPathName = () => createSelector(
  selectLoginDomain(),
  (substate) => substate.get('nextPathName')
)

export default makeSelectLogin;
export {
  selectLoginDomain,
  selectNextPathName,
};
