/**
*
* AddRoomModal
*
*/

import React from 'react';
import { Modal, FormGroup, Form, FormControl, Col, ControlLabel } from 'react-bootstrap'
import Button from '../Button';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class AddRoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomNumber: '',
    }
  }

  hide() {
    this.setState({ newRoomNumber: '' });
    this.props.hide();
  }

  editRoomNumber(e) {
    this.setState({ newRoomNumber: e.target.value });
  }

  createRoom() {
    this.props.createRoom(this.state.newRoomNumber);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.hide.bind(this)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage {...messages.header} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="roomNumberInput">
              <Col componentClass={ControlLabel} sm={4}>
                <FormattedMessage {...messages.roomNumber}/>
              </Col>
              <Col sm={8}>
                <FormControl
                  onChange={this.editRoomNumber.bind(this)}
                  type="text"
                  autoFocus
                />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-xs-6">
              <Button onClick={this.hide.bind(this)}>
                <FormattedMessage {...messages.cancel} />
              </Button>
            </div>
            <div className="col-xs-6">
              <Button onClick={this.createRoom.bind(this)}>
                <FormattedMessage {...messages.createRoom} />
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }

}

AddRoomModal.propTypes = {

};

export default AddRoomModal;
