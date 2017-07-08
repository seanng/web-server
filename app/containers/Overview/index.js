import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'react-bootstrap';
import { fetchRooms, checkIn, makeAvailable, deleteRoom, createRoom, setFilter, displayAddRoomModal } from './actions'
import { getRoomsByStatus, getFilter, getDisplayAddRoom } from './selectors';

import AddRoomModal from 'components/AddRoomModal';
import SummaryBox from 'components/SummaryBox';
import ActivityFeedBox from 'components/ActivityFeedBox';
import RoomManagementBox from 'components/RoomManagementBox';

export class Overview extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRooms();
  }

  getSummary() {
    const { rooms } = this.props;
    return {
      inbound: rooms.inbound.length,
      checkedin: rooms.checkedin.length,
      checkedout: rooms.checkedout.length,
      available: rooms.available.length,
      all: rooms.all.length,
    }
  }

  getFilteredRooms() {
    const { rooms, filter } = this.props;
    return rooms[filter];
  }

  render() {
    const {
      setFilter,
      showAddRoomModal,
      hideAddRoomModal,
      checkIn,
      makeAvailable,
      deleteRoom,
      displayAddRoom
    } = this.props

    return (
      <div>
        <Row>
          <Col sm={5}>
            <SummaryBox
              summary={this.getSummary()}
            />
            <ActivityFeedBox />
          </Col>
          <Col sm={7}>
            <RoomManagementBox
              setFilter={setFilter}
              rooms={this.getFilteredRooms()}
              showAddRoomModal={showAddRoomModal}
              checkIn={checkIn}
              makeAvailable={makeAvailable}
              remove={deleteRoom}
            />
          </Col>
        </Row>
        <AddRoomModal
          show={this.props.displayAddRoom}
          hide={hideAddRoomModal}
          createRoom={this.props.createRoom}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  rooms: getRoomsByStatus(),
  filter: getFilter(),
  displayAddRoom: getDisplayAddRoom(),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  fetchRooms: () => dispatch(fetchRooms()),
  checkIn: (room) => dispatch(checkIn(room)),
  makeAvailable: (room, key) => dispatch(makeAvailable(room, key)),
  deleteRoom: (room) => dispatch(deleteRoom(room)),
  createRoom: (room) => dispatch(createRoom(room)),
  showAddRoomModal: () => dispatch(displayAddRoomModal(true)),
  hideAddRoomModal: () => dispatch(displayAddRoomModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
