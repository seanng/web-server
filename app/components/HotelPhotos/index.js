/**
*
* HotelPhotos
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 15px
`

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
    <Container>
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
    </Container>
  );
}

export default HotelPhotos;
