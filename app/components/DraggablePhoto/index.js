/**
*
* DraggablePhoto
*
*/

import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Secondary = styled.div`
  height: 90px;
  width: 100%;
  border: ${props => props.active === props.index ? '1px solid red' : '1px dotted grey'};
  margin-bottom: 15px;
  cursor: pointer;
`;

class DraggablePhoto extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { photos, index, active, onClick } = this.props
    return (
      <Secondary index={index} active={active} onClick={onClick.bind(null, index)}>
        { photos[index] && <Img src={photos[index]} /> }
      </Secondary>
    );
  }
}

export default DraggablePhoto;
