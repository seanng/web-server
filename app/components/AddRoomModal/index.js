/**
*
* AddRoomModal
*
*/

import React from 'react';
import { Modal, FormGroup, Form, FormControl, Col, ControlLabel } from 'react-bootstrap'
import Button from '../Button';
import styled from 'styled-components';

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

  header() {
    const H4 = styled.h4`
      font-size: 1.5em;
    `
    return (
      <Modal.Header closeButton>
        <H4><FormattedMessage {...messages.header} /></H4>
      </Modal.Header>
    )
  }

  render() {
    const ModalFooter = styled.div`
      padding: 15px;
      text-align: center;
    `

    return (
      <Modal
        show={this.props.show}
        onHide={this.hide.bind(this)}
      >
        {this.header()}
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
        <ModalFooter>
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
        </ModalFooter>
      </Modal>
    )
  }

}

AddRoomModal.propTypes = {

};

export default AddRoomModal;
