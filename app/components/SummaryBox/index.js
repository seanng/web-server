/**
*
* SummaryBox
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H3 from 'components/H3'
import SectionWrapper from 'components/SectionWrapper';

const SummaryBox = ({ summary }) => {
  const { inbound, checkedin, checkedout, available } = summary
  return (
    <SectionWrapper>
      <H3><FormattedMessage {...messages.header} /></H3>
      <Row>
        <FormattedMessage {...messages.inbound} />
        { inbound }
      </Row>
      <Row>
        <FormattedMessage {...messages.checkedin} />
        { checkedin }
      </Row>
      <Row>
        <FormattedMessage {...messages.checkedout} />
        { checkedout }
      </Row>
      <Row>
        <FormattedMessage {...messages.available} />
        { available }
      </Row>
      <Row total>
        <FormattedMessage {...messages.total} />
        { inbound*1 + checkedin*1 + checkedout*1 + available*1 }
      </Row>
    </SectionWrapper>
  )
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: ${ props => props.total && '700' }
`

export default SummaryBox;
