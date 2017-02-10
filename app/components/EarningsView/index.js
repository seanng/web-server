/**
*
* EarningsView
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import moment from 'moment';
// import messages from './messages';

import EarningsTableHeader from '../EarningsTableHeader';
import EarningsTableItem from '../EarningsTableItem';
import EarningsTableFooter from '../EarningsTableFooter';
import EarningsFilter from '../EarningsFilter';

function EarningsView(props) {
  let 
  roomIncomeTotal = 0, 
  addIncomeTotal = 0, 
  currentMonth = moment().month(), 
  currentYear = moment().year(),
  totalFunc = (record) => {
    roomIncomeTotal += record.roomIncome;
    addIncomeTotal += record.addIncome;
  };

  for (let record of props.data) {
  	if (props.activeEarningsFilter === 'mtd') {
      if (record.date.getMonth() === currentMonth) {
        totalFunc(record);
      }
    } else if (props.activeEarningsFilter === 'ytd') {
      if (record.date.getFullYear() === currentYear) {
        totalFunc(record);
      }
    } else {
      totalFunc(record);
    }
  }

  return (
    <div>
    	<EarningsFilter activeEarningsFilter={props.activeEarningsFilter} clickEarningsFilter={props.clickEarningsFilter}/>
    	<EarningsTableHeader />
      {props.activeEarningsFilter === '' && props.data.map((record => <EarningsTableItem key={record.id} {...record}/>))}
      {props.activeEarningsFilter === 'mtd' && props.data.filter((record => record.date.getMonth() === currentMonth)).map((record => <EarningsTableItem key={record.id} {...record}/>))}
      {props.activeEarningsFilter === 'ytd' && props.data.filter((record => record.date.getFullYear() === currentYear)).map((record => <EarningsTableItem key={record.id} {...record}/>))}
    	<EarningsTableFooter addIncomeTotal={addIncomeTotal} roomIncomeTotal={roomIncomeTotal}/>
    </div>
  );
}

EarningsView.propTypes = {

};

export default EarningsView;
