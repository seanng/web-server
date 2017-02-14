/*
 *
 * FrontDesk
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';

import { getAvailableRooms, getInboundData, getInroomData, getSummary, getView } from './selectors';
import { switchView, updateAvailability } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import OverviewView from 'components/OverviewView';
import HistoryView from 'components/HistoryView';


export class FrontDesk extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderOverview() {
    return (
      <OverviewView
        summary={this.props.summary}
        inroomData={this.props.inroomData}
        inboundData={this.props.inboundData}
        updateAvailability={this.props.updateAvailability.bind(this)}
        availabilityInput={this.props.availability}
      />
    )
  }

  renderHistoryView() {
    return (
      <HistoryView />
    )
  }

  render() {
    return (
      <div>
        <SubNavigation title='frontdesk' activeView={this.props.view} clickTab={this.props.clickTab.bind(this)} />
        <div className='container'>
          <SubHeader title={this.props.view} />
          {this.props.view === 'overview' && this.renderOverview()}
          {this.props.view === 'history' && this.renderHistoryView}
        </div>
      </div>
    );
  }
}

FrontDesk.propTypes = {
  clickTab: PropTypes.func.isRequired,
  updateAvailability: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  summary: getSummary(),
  inroomData: getInroomData(),
  inboundData: getInboundData(),
  availability: getAvailableRooms()
});


const mapDispatchToProps = (dispatch) => ({
  clickTab: (view) => {
    dispatch(switchView(view));
  },
  updateAvailability: (vacancies) => {
    dispatch(updateAvailability(vacancies));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
