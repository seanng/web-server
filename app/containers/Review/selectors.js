import { createSelector } from 'reselect';

/**
 * Direct selector to the review state domain
 */
const selectReviewDomain = () => (state) => state.get('review');

/**
 * Other specific selectors
 */

const selectStay = () => createSelector(
  selectReviewDomain(),
  (substate) => substate.get('stay').toJS()
)

const selectStays = () => createSelector(
  selectReviewDomain(),
  (substate) => substate.get('stays').toJS()
)

const selectCharges = () => createSelector(
  selectReviewDomain(),
  (substate) => substate.get('charges').toJS()
)

const displayChargesModal = () => createSelector(
  selectReviewDomain(),
  (substate) => substate.get('viewCharges')
)

/**
 * Default selector used by Review
 */

const makeSelectReview = () => createSelector(
  selectReviewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReview;
export {
  selectReviewDomain,
  selectStay,
  selectStays,
  selectCharges,
  displayChargesModal
};
