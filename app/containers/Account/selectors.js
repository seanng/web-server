import { createSelector } from 'reselect';
 
/**
 * Direct selector to the account state domain
 */
const selectAccountDomain = () => (state) => state.get('account');

/**
 * Other specific selectors
 */

const getView = () => createSelector(
  selectAccountDomain(),
  (substate) => substate.get('view')
);

/**
 * Default selector used by Account
 */

const makeSelectAccount = () => createSelector(
  selectAccountDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAccount;

export {
  selectAccountDomain,
  getView
};
