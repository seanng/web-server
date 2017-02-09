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

//dummy data for earnings record
let data = [{
	id: 1,
	date: new Date(2017,0,1),
	guest: "Sean",
	roomId: 123,
	roomIncome: 400,
	addIncome: 0
}, {
	id: 2,
	date: new Date(2017,0,7),
	guest: "AJ",
	roomId: 456,
	roomIncome: 1200,
	addIncome: 108
}, {
	id: 3,
	date: new Date(2017,1,8),
	guest: "Michael",
	roomId: 888,
	roomIncome: 800,
	addIncome: 0
}];

let roomIncomeTotal = 0, addIncomeTotal = 0;

for (let record of data) {
	roomIncomeTotal += record.roomIncome;
	addIncomeTotal += record.addIncome;
}


function EarningsView() {
  return (
    <div>
    	<EarningsTableHeader />
    	{data.map((record => <EarningsTableItem key={record.id} {...record}/>))}
    	<EarningsTableFooter addIncomeTotal={addIncomeTotal} roomIncomeTotal={roomIncomeTotal}/>
    </div>
  );
}

EarningsView.propTypes = {

};

export default EarningsView;
