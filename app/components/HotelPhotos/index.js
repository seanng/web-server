/**
*
* HotelPhotos
*
*/

import React from 'react';
import styled from 'styled-components';

const Primary = styled.div`
  height: 300px;
  background-color: blue;
`;

const Secondary = styled.div`
  height: 90px;
  background-color: silver;
`;

function HotelPhotos() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-9">
          <Primary />
        </div>
        <div className="col-sm-3">
          <Secondary />
          <Secondary />
          <Secondary />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Secondary />
        </div>
        <div className="col-sm-3">
          <Secondary />
        </div>
        <div className="col-sm-3">
          <Secondary />
        </div>
        <div className="col-sm-3">
          <Secondary />
        </div>
      </div>
    </div>
  );
}

export default HotelPhotos;
