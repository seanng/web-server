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

const getSettingsView = () => createSelector(
  selectAccountDomain(),
  (substate) => substate.get('settingsView')
);

const getEarningsFilter = () => createSelector(
  selectAccountDomain(),
  (substate) => substate.get('earningsFilter')
);

const getHotelDescriptionMode = () => createSelector(
  selectAccountDomain(),
  substate => substate.get('isEditingHotelDescription')
)

const selectHotelInfo = () => createSelector(
  selectAccountDomain(),
  substate => substate.get('hotelInfo')
)

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
  getView,
  getSettingsView,
  getEarningsFilter,
  selectHotelInfo,
  getHotelDescriptionMode,
};
