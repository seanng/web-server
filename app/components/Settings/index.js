import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import { switchSettingsView } from 'containers/Account/actions';
import substate from 'containers/Account/selectors';
import { getSettingsView } from 'containers/Account/selectors';


class Settings extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const Div = styled.div`
      border: 1px solid black;
      padding: 10px;
      height: 500px;
    `;
    return (
      <div>
        <Row>
          <Col xs={6}>
            <Div>
              Settings.
            </Div>
          </Col>
          <Col xs={6}>
            <Div>
              Settings.
            </Div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
