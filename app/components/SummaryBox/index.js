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
  const { inbound, inroom, checkedout, available } = summary
  return (
    <div className='overviewBox'>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <div className="row">
        <div className="col-xs-6">
          <FormattedMessage {...messages.inbound} />
        </div>
        <div className="col-xs-6">
          { inbound }
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <FormattedMessage {...messages.inroom} />
        </div>
        <div className="col-xs-6">
          { inbound }
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <FormattedMessage {...messages.checkedout} />
        </div>
        <div className="col-xs-6">
          { checkedout }
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <FormattedMessage {...messages.available} />
        </div>
        <div className="col-xs-6">
          { available }
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <FormattedMessage {...messages.total} />
        </div>
        <div className="col-xs-6">
          { inbound*1 + inroom*1 + checkedout*1 + available*1 }
        </div>
      </div>
    </div>
  )
};

SummaryBox.propTypes = {

};

export default SummaryBox;
