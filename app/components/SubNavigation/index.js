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

const Title = styled.div`
  color: black;
  font-weight: 600;
`

const TabsList = styled.div``

function SubNavigation({title, clickTab, activeView}) {
  let Tabs;

  if (title === 'frontdesk') {
    Tabs = (
      <span>
        <Tab view={'overview'} clickTab={clickTab} active={activeView === 'overview'} />
        <Tab view={'history'} clickTab={clickTab} active={activeView === 'history'} />
      </span>
    )
  }
  if (title === 'account') {
    Tabs = (
      <span>
        <Tab view={'earnings'} clickTab={clickTab} active={activeView === 'earnings'} />
        <Tab view={'hotelProfile'} clickTab={clickTab} active={activeView === 'hotelProfile'} />
        <Tab view={'settings'} clickTab={clickTab} active={activeView === 'settings'} />
      </span>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Title className="col-xs-7">
            <FormattedMessage {...messages[title]} />
          </Title>
          <TabsList className="col-xs-5" title={title}>
            { Tabs }
          </TabsList>
        </div>
      </div>
    </div>
  );
}

SubNavigation.propTypes = {

};

export default SubNavigation;
