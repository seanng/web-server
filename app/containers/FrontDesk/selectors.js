import { createSelector } from 'reselect';

/**
 * Direct selector to the frontDesk state domain
 */
const selectFrontDeskDomain = () => (state) => state.get('frontDesk');

/**
 * Other specific selectors
 */

const getView = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('view')
);


/**
 * Default selector used by FrontDesk
 */

const makeSelectFrontDesk = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFrontDesk;

export {
  selectFrontDeskDomain,
  getView
};
