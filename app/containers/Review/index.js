import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { fetchStays, fetchCharges, addCharge, saveCharges } from './actions'
import { selectStays, selectStay, selectCharges, displayChargesModal } from './selectors';
import messages from './messages';

import ChargesModal from 'components/ChargesModal'
import ReviewEntryRow from 'components/ReviewEntryRow';

export class Review extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.fetchStays()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stays && this.state.loading) {
      this.setState({ loading: false })
    }
  }

  hideChargesModal = () => {
    this.props.selectViewCharges(false)
  }

  selectViewCharges = (id) => {
    this.props.selectViewCharges(id)
  }

  isLoading() {
    return (
      <div>
        loading.
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return this.isLoading()
    }
    const { stay, charges, displayChargesModal, addCharge, saveCharges, stays } = this.props;
    return (
      <div>
        <div className="body-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th><FormattedMessage {...messages.date} /></th>
                <th><FormattedMessage {...messages.guest} /></th>
                <th><FormattedMessage {...messages.room} /></th>
                <th><FormattedMessage {...messages.checkin} /></th>
                <th><FormattedMessage {...messages.checkout} /></th>
                <th><FormattedMessage {...messages.duration} /></th>
                <th><FormattedMessage {...messages.roomCharge} /></th>
                <th><FormattedMessage {...messages.surcharges} /></th>
                <th><FormattedMessage {...messages.total} /></th>
              </tr>
            </thead>
            <tbody>
              { stays.map((stay, key)=> (
                <ReviewEntryRow
                  key={key}
                  showChargesModal={this.selectViewCharges}
                  stay={stay}
                />
              )) }
            </tbody>
          </table>
        </div>
        <ChargesModal
          stay={stay}
          charges={charges}
          show={displayChargesModal}
          hide={this.hideChargesModal}
          addCharge={addCharge}
          saveCharges={saveCharges}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  stays: selectStays(),
  stay: selectStay(),
  charges: selectCharges(),
  displayChargesModal: displayChargesModal()
});

const mapDispatchToProps = (dispatch) => ({
  addCharge: (charge) =>
    dispatch(addCharge(charge)),
  saveCharges: (newCharges, newTotal, stayId) =>
    dispatch(saveCharges(newCharges, newTotal, stayId)),
  fetchStays: () =>
    dispatch(fetchStays()),
  selectViewCharges: (stayId) =>
    dispatch(fetchCharges(stayId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review);
