import { createSelector } from 'reselect';

/**
 * Direct selector to the hotelProfile state domain
 */
const selectHotelProfileDomain = () => (state) => state.get('hotelProfile');

/**
 * Other specific selectors
 */

const selectHotelInfo = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('hotelInfo')
)

const selectHotelDescriptionMode = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('isEditingHotelDescription')
)

/**
 * Default selector used by HotelProfile
 */

const makeSelectHotelProfile = () => createSelector(
  selectHotelProfileDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotelProfile;
export {
  selectHotelProfileDomain,
  selectHotelInfo,
  selectHotelDescriptionMode
};
