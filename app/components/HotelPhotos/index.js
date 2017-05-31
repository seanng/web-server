/**
*
* HotelPhotos
*
*/

import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 15px
`

const Primary = styled.div`
  height: 300px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const Secondary = styled.div`
  height: 90px;
  width: 100%;
  border: ${props => props.active === props.index ? '1px solid red' : '1px dotted grey'};
  margin-bottom: 15px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const GlyphWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;  
  border-radius: 30px;
  height: 90px;
  width: 90px;
`

const fileLabelStyle = {
  cursor: 'pointer'
}

class HotelPhotos extends React.Component {

  state = {
    activeIndex: 0
  }

  setPhotoAsActive = (activeIndex) => {
    this.props.photos.length > activeIndex && this.setState({ activeIndex })
  }

  render () {
    return (
      <Container>
        <div className="row">
          <div className="col-sm-9">
            <Primary>
              <Img src={this.props.photos[this.state.activeIndex]} />
            </Primary>
          </div>
          <div className="col-sm-3" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <label style={fileLabelStyle}>
              <input type="file" style={{ display: 'none' }} onChange={this.props.addPhoto} accept='image/png,image/jpeg' />
              <GlyphWrapper>
                <Glyphicon glyph='glyphicon glyphicon-plus' style={{ fontSize: 42 }} />
              </GlyphWrapper>
            </label>
            <Secondary index={5} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 5)}>
              { this.props.photos[5] && <Img src={this.props.photos[5]} /> }
            </Secondary>
            <Secondary index={4} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 4)}>
              { this.props.photos[4] && <Img src={this.props.photos[4]} /> }
            </Secondary>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Secondary index={0} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 0)} >
              { this.props.photos[0] && <Img src={this.props.photos[0]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary index={1} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 1)}>
              { this.props.photos[1] && <Img src={this.props.photos[1]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary index={2} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 2)}>
              { this.props.photos[2] && <Img src={this.props.photos[2]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary index={3} active={this.state.activeIndex} onClick={this.setPhotoAsActive.bind(null, 3)}>
              { this.props.photos[3] && <Img src={this.props.photos[3]} /> }
            </Secondary>
          </div>
        </div>
      </Container>
    )
  }
}

export default HotelPhotos;
