import { createSelector } from 'reselect';

/**
 * Direct selector to the overview state domain
 */
const selectOverviewDomain = () => (state) => state.get('overview');

/**
 * Other specific selectors
 */

const getFilter = (status) => createSelector(
  selectOverviewDomain(),
  (substate) => substate.get('filter')
)

const getRoomsByStatus = () => createSelector(
  selectOverviewDomain(),
  (substate) => {
    const rooms = substate.get('rooms').toJS();
    return {
      all: rooms,
      inbound: rooms.filter(stay => stay.status === 'Inbound'),
      checkedin: rooms.filter(stay => stay.status === 'Checked In'),
      checkedout: rooms.filter(stay => stay.status === 'Checked Out'),
      available: rooms.filter(stay => stay.status === 'Available'),
    }
  }
);

const getDisplayAddRoom = () => createSelector(
  selectOverviewDomain(),
  (substate) => substate.get('displayAddRoom')
)

/**
 * Default selector used by Overview
 */

const makeSelectOverview = () => createSelector(
  selectOverviewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOverview;

export {
  selectOverviewDomain,
  getRoomsByStatus,
  getFilter,
  getDisplayAddRoom
};
