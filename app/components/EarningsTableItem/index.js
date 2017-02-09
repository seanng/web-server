/**
*
* EarningsTableItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Table = styled.table`
	border: 1px solid grey;
	color: grey;
	height: 40px;
	margin: 5px;
	width: 100%;
`;

function EarningsTableItem(props) {
  return (
		<div>
      <Table>
        <tr className='row'>
          <td className='col-sm-2'>{props.date.toDateString()}</td>
          <td className='col-sm-2'>{props.guest}</td>
          <td className='col-sm-2'>{props.roomId}</td>
          <td className='col-sm-2'>{props.roomIncome}</td>
          <td className='col-sm-2'>{props.addIncome}</td>
          <td className='col-sm-2'>{props.roomIncome + props.addIncome}</td>
        </tr>
      </Table>
    </div>
  );
}

EarningsTableItem.propTypes = {

};

export default EarningsTableItem;
