/**
*
* EarningsFilter
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Table = styled.table`
	background-color: silver;
	color: white;
	height: 40px;
	margin: 20px 5px;
	width: 100%;
	text-align: center;
`;

const Td = styled.td`
	cursor: pointer;
`;


function EarningsFilter(props) {
	
	const Td_MTD = props.activeEarningsFilter === 'mtd' ? styled.td`
		cursor: pointer;
		color: navy;
	` : styled.td`
		cursor: pointer;
	`;

	const Td_YTD = props.activeEarningsFilter === 'ytd' ? styled.td`
		cursor: pointer;
		color: navy;
	` : styled.td`
		cursor: pointer;
	`;

  return (
  	<div>
  	  <Table>
      	<tbody>
      		<tr className='row'>
	          <td className='col-sm-4'>Select Day Range:</td>
	          <Td_MTD key='mtd' className='col-sm-2' onClick={props.activeEarningsFilter === 'mtd' ? props.clickEarningsFilter.bind(this, '') : props.clickEarningsFilter.bind(this, 'mtd')}>MTD</Td_MTD>
	          <Td_YTD key='ytd' className='col-sm-2' onClick={props.activeEarningsFilter === 'ytd' ? props.clickEarningsFilter.bind(this, '') : props.clickEarningsFilter.bind(this, 'ytd')}>YTD</Td_YTD>
	          <Td key='clear' className='col-sm-4' onClick={props.clickEarningsFilter.bind(this, '')}>Clear Filter</Td>
	        </tr>
	      </tbody>
      </Table>
    </div>
  );
}

EarningsFilter.propTypes = {

};

export default EarningsFilter;
