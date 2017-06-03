/**
*
* HotelPhotos
*
*/

import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggablePhoto from '../DraggablePhoto'

const Container = styled.div`
  padding-bottom: 15px
`

const Primary = styled.div`
  height: 300px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

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

  movePhoto (dragIndex, hoverIndex) {
    const { photos, rearrangePhotos } = this.props
    const dragPhoto = photos[dragIndex]
    rearrangePhotos(dragIndex, hoverIndex, dragPhoto)
    this.setState({ activeIndex: hoverIndex })
  }

  deletePhoto (index) {
    const { activeIndex } = this.state
    this.props.deletePhoto(index);
    this.setState({ activeIndex: activeIndex - 1 })
  }

  render () {
    return (
      <Container>
        <div className="row">
          <div className="col-sm-9">
            <Primary>
              <img src={this.props.photos[this.state.activeIndex]} style={{height: '100%', width: '100%'}}/>
            </Primary>
          </div>
          <div className="col-sm-3" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <label style={fileLabelStyle}>
              <input type="file" style={{ display: 'none' }} onChange={this.props.addPhoto} accept='image/png,image/jpeg' />
              <GlyphWrapper>
                <Glyphicon glyph='glyphicon glyphicon-plus' style={{ fontSize: 42 }} />
              </GlyphWrapper>
            </label>
            <DraggablePhoto
              active={this.state.activeIndex}
              index={5}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(5)}
            />
            <DraggablePhoto
              active={this.state.activeIndex}
              index={4}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(4)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <DraggablePhoto
              active={this.state.activeIndex}
              index={0}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(0)}
            />
          </div>
          <div className="col-sm-3">
            <DraggablePhoto
              active={this.state.activeIndex}
              index={1}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(1)}
            />
          </div>
          <div className="col-sm-3">
            <DraggablePhoto
              active={this.state.activeIndex}
              index={2}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(2)}
            />
          </div>
          <div className="col-sm-3">
            <DraggablePhoto
              active={this.state.activeIndex}
              index={3}
              photos={this.props.photos}
              onClick={this.setPhotoAsActive}
              movePhoto={this.movePhoto.bind(this)}
              deletePhoto={() => this.deletePhoto(3)}
            />
          </div>
        </div>
      </Container>
    )
  }
}

export default DragDropContext(HTML5Backend)(HotelPhotos);
