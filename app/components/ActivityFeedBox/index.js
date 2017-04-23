/**
*
* ActivityFeedBox
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import Entry from '../ActivityFeedEntry'

function ActivityFeedBox() {
  return (
    <Wrapper className="overviewBox">
      <div className="overviewBoxHeader">
        <h3><FormattedMessage {...messages.header} /></h3>
      </div>
      <TableWrapper>
        <table className="table">
          <thead>
            <tr>
              <TH className="col-xs-3">
                <FormattedMessage {...messages.time} />
              </TH>
              <th className="col-xs-9">
                <FormattedMessage {...messages.activity} />
              </th>
            </tr>
          </thead>
          <tbody>
            { /* props.activity.map((activity, key) => (
              <Entry
                key={key}
                activity={activity}
              />
            )) */ }
          </tbody>
        </table>
      </TableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50%;
`

const TH = styled.th`
  padding-left: 15px!important;
`

const TableWrapper = styled.div`
  overflow: auto;
`

ActivityFeedBox.propTypes = {

};

export default ActivityFeedBox;
