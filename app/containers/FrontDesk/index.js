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

import { getView } from './selectors';
import { setView } from './actions';

import Overview from 'containers/Overview';
import Review from 'containers/Review';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import AddRoomModal from 'components/AddRoomModal';
import ChargesModal from 'components/ChargesModal';

export class FrontDesk extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SubNavigation
          title='frontdesk'
          activeView={this.props.view}
          clickTab={this.props.setView.bind(this)}
        />
        <div className='container'>
          <SubHeader
            title={this.props.view}
          />
          { this.props.view === 'overview' && <Overview /> }
          { this.props.view === 'review' && <Review /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  view: getView()
});

const mapDispatchToProps = (dispatch) => ({
  setView: (view) => dispatch(setView(view))
});

export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
