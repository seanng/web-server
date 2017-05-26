/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const currentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const selectHotelId = () => createSelector(
  currentUser(),
  (user) => user.hotelId
)

const checkedToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('checkedToken')
)

export {
  selectGlobal,
  makeSelectLocationState,
  currentUser,
  checkedToken,
  selectHotelId
};
