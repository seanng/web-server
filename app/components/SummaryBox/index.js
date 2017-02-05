/**
*
* SummaryBox
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';



const SummaryBox = () => (
  <div className='overviewBox'>
    <h3>
      <FormattedMessage {...messages.header} />
    </h3>
    <table>
      <tr>
        <td>Inbound</td>
        <td>1</td>
      </tr>
      <tr>
        <td>In Room</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Checked Out</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>3</td>
      </tr>
    </table>
  </div>
);

SummaryBox.propTypes = {

};

export default SummaryBox;
