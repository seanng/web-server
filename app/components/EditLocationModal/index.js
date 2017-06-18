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

  componentDidUpdate (prevProps) {
    if (!prevProps.isShown && this.props.isShown) {
      console.log('the modal is showing.')
      const input = document.getElementById('locationInput');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log('the place selected: ', place)
        if (!place.geometry) {
          return window.alert('No details available for input: "' + place.name + '"');
        } else {
          this.setState({
            edited: true,
            location: {
              address: place.formatted_address,
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }
          })
        }
      })
    }
  }

  hide = () => {
    this.setState({ edited: false });
    this.props.displayLocationModal(false);
  }

  update = () => {
    this.props.updateLocation(this.state.location)
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
            id='locationInput'
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
        { this.state.edited && (
          <div className="row">
            <div className="col-xs-12">
              <Button onClick={this.update}>
                <FormattedMessage {...messages.update} />
              </Button>
            </div>
          </div>
        )}
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
