/**
*
* DraggablePhoto
*
*/

import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import styled from 'styled-components';
import { Glyphicon } from 'react-bootstrap';
import { DRAGGABLE_PHOTO } from 'containers/HotelProfile/constants';

const ItemTypes = {
  PHOTO: 'photo'
}

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

const styles = {
  glyphWrapper: {
    position: 'absolute',
    top: '3px',
    right: '13%',
    zIndex: 3,
    color: 'red'
  }
}

const photoSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const photoTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }
    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    // Time to actually perform the action
    props.movePhoto(dragIndex, hoverIndex);
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
}

class Photo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { photos, isDragging, connectDragSource, connectDropTarget, index, active, onClick, deletePhoto } = this.props
    const opacity = isDragging ? 0: 1
    if (index >= photos.length) {
      return <Secondary active={false} />
    }
    return connectDragSource(connectDropTarget(
      <div>
        <Secondary index={index} active={active} onClick={onClick.bind(null, index)} style={{...opacity}}>
          <span style={styles.glyphWrapper} onClick={deletePhoto}>
            <Glyphicon glyph='glyphicon glyphicon-minus' />
          </span>
          { photos[index] && <Img src={photos[index]} /> }
        </Secondary>
      </div>
    ))
  }
}

const DraggablePhoto = DragSource(DRAGGABLE_PHOTO, photoSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Photo);

export default DropTarget(DRAGGABLE_PHOTO, photoTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DraggablePhoto);
