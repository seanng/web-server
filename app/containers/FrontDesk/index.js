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

import { getRoomsByStatus, getView } from './selectors';
import { switchView, addRoom } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import FrontDeskOverview from 'components/FrontDeskOverview';
import FrontDeskReview from 'components/FrontDeskReview';

export class FrontDesk extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getSummary() {
    const rooms = this.props.rooms;
    return {
      inbound: rooms.inbound.length,
      inroom: rooms.inroom.length,
      checkedout: rooms.checkedout.length,
      available: rooms.available.length,
      all: rooms.all.length,
    }
  }

  renderOverview() {
    return (
      <FrontDeskOverview
        summary={ this.getSummary() }
        rooms={ this.props.rooms }
        addRoom={ this.props.bind(this) }
      />
    )
  }

  renderReview() {
    return (
      <FrontDeskReview

      />
    )
  }

  render() {
    return (
      <div>
        <SubNavigation
          title='frontdesk'
          activeView={this.props.view}
          setView={this.props.setView.bind(this)}
        />
        <div className='container'>
          <SubHeader
            title={this.props.view}
          />
          { this.props.view === 'overview' && this.renderOverview() }
          { this.props.view === 'review' && this.renderReview() }
        </div>
      </div>
    );
  }
}

FrontDesk.propTypes = {
  setView: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  view: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  rooms: getRoomsByStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  setView: (view) => {
    dispatch(setView(view));
  },
  addRoom: () => {
    dispatch(addRoom());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
