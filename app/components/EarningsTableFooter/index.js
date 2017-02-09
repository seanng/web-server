/**
*
* EarningsTableFooter
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

function EarningsTableFooter(props) {
  return (
    <div>
      <Table>
        <tbody>
          <tr className='row'>
            <td className='col-sm-6'>TOTAL</td>
            <td className='col-sm-2'>{props.roomIncomeTotal}</td>
            <td className='col-sm-2'>{props.addIncomeTotal}</td>
            <td className='col-sm-2'>{props.roomIncomeTotal + props.addIncomeTotal}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}


EarningsTableFooter.propTypes = {

};

export default EarningsTableFooter;
