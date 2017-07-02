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
  substate =>
    substate.get('hotelInfo').toJS()
)

const selectHotelPoliciesMode = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('isEditingHotelPolicies')
)

const isEditingHotelProfile = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('isEditingHotelProfile')
)

const selectDisplayAmenitiesModal = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('displayAmenitiesModal')
)

const selectDisplayLocationModal = () => createSelector(
  selectHotelProfileDomain(),
  substate => substate.get('displayLocationModal')
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
  selectHotelPoliciesMode,
  isEditingHotelProfile,
  selectDisplayAmenitiesModal,
  selectDisplayLocationModal
};
