/**
*
* ChargesList
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ChargesList = ({ charges }) => {
  console.log('charges:', charges)
  return (
    <div>
      { charges.map((charge, key) => <Charge key={key} charge={charge} /> )}
      <FormattedMessage {...messages.header} />
    </div>
  );
}

const Charge = ({ charge }) => {
  return (
    <div>
      {charge.service}
      {charge.cost}
    </div>
  )
}

ChargesList.propTypes = {

};

export default ChargesList;
