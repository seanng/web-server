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
  border: 1px dotted grey;
  margin-bottom: 15px;
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

const glyphiconStyle = {
  fontSize: 42
};

class HotelPhotos extends React.Component {

  state = {
    previewPhoto: this.props.photos[0]
  }

  render () {
    return (
      <Container>
        <div className="row">
          <div className="col-sm-9">
            <Primary>
              <Img src={this.state.previewPhoto} />
            </Primary>
          </div>
          <div className="col-sm-3" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <GlyphWrapper onClick={ this.props.addPhoto }>
              <Glyphicon glyph='glyphicon glyphicon-plus' style={glyphiconStyle} />
            </GlyphWrapper>
            <Secondary>
              { this.props.photos[5] && <Img src={this.props.photos[5]} /> }
            </Secondary>
            <Secondary>
              { this.props.photos[4] && <Img src={this.props.photos[4]} /> }
            </Secondary>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <Secondary>
              { this.props.photos[0] && <Img src={this.props.photos[0]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary>
              { this.props.photos[1] && <Img src={this.props.photos[1]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary>
              { this.props.photos[2] && <Img src={this.props.photos[2]} /> }
            </Secondary>
          </div>
          <div className="col-sm-3">
            <Secondary>
              { this.props.photos[3] && <Img src={this.props.photos[3]} /> }
            </Secondary>
          </div>
        </div>
      </Container>
    )
  }
}

export default HotelPhotos;
