/**
*
* RoomManagementFilter
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const RoomManagementFilter = ({ setFilter }) => {
  const selectFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FilterWrapper>
      <H5>
        <FormattedMessage {...messages.show} />
        &nbsp;&nbsp;&nbsp;
      </H5>
      <Select componentClass="select" placeholder="All" onChange={selectFilter}>
        <option value="all">
          <FormattedMessage {...messages.all} />
        </option>
        <option value="available">
          <FormattedMessage {...messages.available} />
        </option>
        <option value="checkedout">
          <FormattedMessage {...messages.checkedout} />
        </option>
        <option value="checkedin">
          <FormattedMessage {...messages.checkedin} />
        </option>
        <option value="inbound">
          <FormattedMessage {...messages.inbound} />
        </option>
      </Select>
    </FilterWrapper>
  );
};

const H5 = styled.h5`
  display: inline;
`;

const FilterWrapper = styled.div`
  text-align: right;
`;

const Select = styled(FormControl)`
  display: inline-block;
  width: 50%;
`;

RoomManagementFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default RoomManagementFilter;
