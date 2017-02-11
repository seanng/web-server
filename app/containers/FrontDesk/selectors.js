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

const getSummary = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => {
    return {
      inbound: substate.get('inbound').size,
      inroom: substate.get('inroom').size,
      checkedout: substate.get('checkedout')
    }
  }
);

const getInboundData = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('inbound')
);

const getInroomData = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('inroom')
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
  getView,
  getSummary,
  getInboundData,
  getInroomData,
};
