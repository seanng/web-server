/**
*
* SummaryBox
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SummaryBox = ({summary}) => {
  const { inbound, checkedin, checkedout, available } = summary
  return (
    <Wrapper className='overviewBox'>
      <div className="overviewBoxHeader">
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
      </div>
      <Summary>
        <Div className="row">
          <div className="col-xs-6">
            <FormattedMessage {...messages.inbound} />
          </div>
          <Value className="col-xs-6">
            { inbound }
          </Value>
        </Div>
        <Div className="row">
          <div className="col-xs-6">
            <FormattedMessage {...messages.checkedin} />
          </div>
          <Value className="col-xs-6">
            { inbound }
          </Value>
        </Div>
        <Div className="row">
          <div className="col-xs-6">
            <FormattedMessage {...messages.checkedout} />
          </div>
          <Value className="col-xs-6">
            { checkedout }
          </Value>
        </Div>
        <Div className="row">
          <div className="col-xs-6">
            <FormattedMessage {...messages.available} />
          </div>
          <Value className="col-xs-6">
            { available }
          </Value>
        </Div>
        <Div className="row">
          <Total className="col-xs-6">
            <FormattedMessage {...messages.total} />
          </Total>
          <Total className="col-xs-6">
            <Value>
              { inbound*1 + checkedin*1 + checkedout*1 + available*1 }
            </Value>
          </Total>
        </Div>
      </Summary>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin-bottom: 2em;
`

const Div = styled.div`
  padding: 6px 0px;
`

const Summary = styled.div`
  padding: 16px 40px;
`

const Total = styled.div`
  font-weight: 700;
`

const Value = styled.div`
  text-align: right;
`

SummaryBox.propTypes = {

};

export default SummaryBox;
