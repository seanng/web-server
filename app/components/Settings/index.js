/**
*
* Settings
*
*/

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { switchSettingsView } from 'containers/Account/actions';
import substate from 'containers/Account/selectors';
import { getSettingsView } from 'containers/Account/selectors';
import messages from './messages';

class Settings extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  sideView() {
    const Div = styled.div`
      marginTop: 15px;
    `;

    const Option = styled.span`
      display: block;
      fontSize: 16px;
      marginBottom: 15px;
    `;

    return (
      <Div className="col-sm-4">
        <Option onClick={this.props.setView.bind(this, 'contact')}>
          <FormattedMessage {...messages.contactInformation} />
        </Option>
        <Option onClick={this.props.setView.bind(this, 'password')}>
          <FormattedMessage {...messages.changePassword} />
        </Option>
        <Option onClick={this.props.setView.bind(this, 'notifications')}>
          <FormattedMessage {...messages.notifications} />
        </Option>
        <Option onClick={this.props.setView.bind(this, 'permissions')}>
          <FormattedMessage {...messages.permissions} />
        </Option>
        <Option onClick={this.props.setView.bind(this, 'manageTeam')}>
          <FormattedMessage {...messages.manageTeam} />
        </Option>
      </Div>
    )
  }

  mainView() {
    const Div = styled.div`
      border: 1px solid black;
      padding: 10px;
    `;
    return (
      <Div className="col-sm-8">
        { this.props.view }
      </Div>
    )
  }

  render() {
    return (
      <div className="row">
        { this.sideView() } 
        { this.mainView() }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  view: getSettingsView(),
});

function mapDispatchToProps(dispatch) {
  return {
    setView: (view) => dispatch(switchSettingsView(view))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
