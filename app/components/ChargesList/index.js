/**
*
* ChargesList
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const TopRow = ({ currency }) => (
  <div className="row">
    <div className="col-sm-6">
      <b><FormattedMessage {...messages.service} /></b>
    </div>
    <div className="col-sm-2">
      <b><FormattedMessage {...messages.updated} /></b>
    </div>
    <div className="col-sm-2">
      <b><FormattedMessage {...messages.settled} /></b>
    </div>
    <div className="col-sm-2">
      <b><FormattedMessage {...messages.price} values={{currency: currency}} /></b>
    </div>
  </div>
)

const BottomRow = ({ charges }) => (
  <div className="row">
    <div className="col-sm-10">
      <b><FormattedMessage {...messages.total} /></b>            
    </div>
    <div className="col-sm-2">
      <b>{ charges.reduce((prev, current) => (prev*1 + current.cost*1).toFixed(2), 0) }</b>
    </div>
  </div>
)

const ChargeRow = ({ charge }) => (
  <div className="row">
    <div className="col-sm-6">
      {charge.service}
    </div>
    <div className="col-sm-2">
      { charge.updated ? 'Yes' : 'No' }
    </div>
    <div className="col-sm-2">
      { charge.status === 'Settled' ? 'Yes' : 'No' }
    </div>
    <div className="col-sm-2">
      {charge.cost}
    </div>
  </div>
)

const Div = styled.div`
  padding-top: 20px;
`

const ChargesList = ({ currency, charges}) => (
  <Div>
    <TopRow currency={currency} />
    { charges.map((charge, key) => <ChargeRow key={key} charge={charge} /> )}
    <BottomRow charges={charges} />
  </Div>
);

ChargesList.propTypes = {

};

export default ChargesList;
