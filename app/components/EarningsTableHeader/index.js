/**
*
* EarningsTableHeader
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Table = styled.table`
	background-color: grey;
	color: white;
	height: 40px;
	margin: 5px;
	width: 100%;
`;

function EarningsTableHeader() {
  return (
    <div>
      <Table>
      	<tbody>
	        <tr className='row'>
	          <td className='col-sm-2'>Date</td>
	          <td className='col-sm-2'>Guest</td>
	          <td className='col-sm-2'>Rm #</td>
	          <td className='col-sm-2'>Rm Income (HKD)</td>
	          <td className='col-sm-2'>Add. Income (HKD)</td>
	          <td className='col-sm-2'>Total (HKD)</td>
	        </tr>
        </tbody>
      </Table>
    </div>
  );
}

EarningsTableHeader.propTypes = {

};

export default EarningsTableHeader;
