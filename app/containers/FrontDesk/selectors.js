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

const getRoomsByStatus = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => {
    const stays = substate.get('stays').toJS();
    return {
      all: stays,
      inbound: stays.filter(stay => stay.status === 'inbound'),
      inroom: stays.filter(stay => stay.status === 'inroom'),
      checkedout: stays.filter(stay => stay.status === 'checkedout'),
      available: stays.filter(stay => stay.status === 'available'),
    }
  }
);

const getDisplayAddRoom = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('displayAddRoom')
)

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
  getRoomsByStatus,
  getDisplayAddRoom,
};
