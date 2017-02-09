/**
*
* EarningsView
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import EarningsTableHeader from '../EarningsTableHeader';
import EarningsTableItem from '../EarningsTableItem';
import EarningsTableFooter from '../EarningsTableFooter';

function EarningsView(props) {
let roomIncomeTotal = 0, addIncomeTotal = 0;

for (let record of props.data) {
	roomIncomeTotal += record.roomIncome;
	addIncomeTotal += record.addIncome;
}
  return (
    <div>
    	<EarningsTableHeader />
    	{props.data.map((record => <EarningsTableItem key={record.id} {...record}/>))}
    	<EarningsTableFooter addIncomeTotal={addIncomeTotal} roomIncomeTotal={roomIncomeTotal}/>
    </div>
  );
}

EarningsView.propTypes = {

};

export default EarningsView;
