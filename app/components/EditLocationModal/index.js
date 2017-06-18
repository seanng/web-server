/**
*
* EditLocationModal
*
*/

import React from 'react';
import styled from 'styled-components';
import { Modal, FormGroup, Form, FormControl, Col, ControlLabel, Checkbox } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '../Button';

class EditLocationModal extends React.Component {

  state = {
    edited: false,
    location: null
  }

  hide = () => {
    if (this.state.edited) {
      this.props.updateLocation(this.state.location)
    }
    this.props.displayLocationModal(false)
  }

  header () {
    const H4 = styled.h4`
      font-size: 1.5em;
    `
    return ( 
      <Modal.Header closeButton>
        <H4><FormattedMessage {...messages.header} /></H4>
      </Modal.Header>
    )
  }

  body () {
    const inputStyle = {

    }
    return (
      <Modal.Body>
        <FormGroup>
          <ControlLabel>Current Address</ControlLabel>
          <p>{ this.props.address }</p>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Update Address</ControlLabel>
          <FormControl 
            type='text' 
            placeholder='Enter Hotel Location'
            style={inputStyle} 
          />
        </FormGroup>
      </Modal.Body>
    )
  }

  footer () {
    const ModalFooter = styled.div`
      padding: 15px;
      text-align: center;
    `
    return (
      <ModalFooter>
        <div className="row">
          <div className="col-xs-12">
            <Button onClick={this.hide}>
              <FormattedMessage {...messages.close} />
            </Button>
          </div>
        </div>
      </ModalFooter>
    )
  }

  render () {
    return (
      <Modal
        show={this.props.isShown}
        onHide={this.hide}
      >
        {this.header()}
        {this.body()}
        {this.footer()}
      </Modal>
    );
  }
}

export default EditLocationModal;
