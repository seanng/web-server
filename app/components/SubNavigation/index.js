/**
*
* SubNavigation
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Tab from '../Tab';

const Div = styled.div`
  background-color: #eeeeee;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.div`
  color: black;
`

const TabsList = styled.div`
  display: flex;
  justify-content: flex-end;
`

function SubNavigation({title, clickTab, activeView}) {
  let Tabs;

  if (title === 'frontdesk') {
    Tabs = (
      <span>
        <Tab view={'overview'} clickTab={clickTab} active={activeView === 'overview'} />
        <Tab view={'review'} clickTab={clickTab} active={activeView === 'review'} />
      </span>
    )
  }
  if (title === 'account') {
    Tabs = (
      <span>
        <Tab view={'earnings'} clickTab={clickTab} active={activeView === 'earnings'} />
        <Tab view={'hotelProfile'} clickTab={clickTab} active={activeView === 'hotelProfile'} />
        <Tab view={'teamManagement'} clickTab={clickTab} active={activeView === 'teamManagement'} />
        <Tab view={'settings'} clickTab={clickTab} active={activeView === 'settings'} />
      </span>
    )
  }

  return (
    <Div>
      <div className="container">
        <div className="row">
          <Title className="col-xs-4">
            <FormattedMessage {...messages[title]} />
          </Title>
          <TabsList className="col-xs-8" title={title}>
            { Tabs }
          </TabsList>
        </div>
      </div>
    </Div>
  );
}

SubNavigation.propTypes = {

};

export default SubNavigation;
