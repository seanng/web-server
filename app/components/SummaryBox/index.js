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
  const { inbound, inroom, checkedout } = summary
  return (
    <div className='overviewBox'>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Inbound</td>
            <td>{inbound}</td>
          </tr>
          <tr>
            <td>In Room</td>
            <td>{inroom}</td>
          </tr>
          <tr>
            <td>Checked Out</td>
            <td>{checkedout}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{inbound*1 + inroom*1 + checkedout*1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

SummaryBox.propTypes = {

};

export default SummaryBox;
