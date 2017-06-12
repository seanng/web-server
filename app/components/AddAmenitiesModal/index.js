import React from 'react';
import { Modal, FormGroup, Form, FormControl, Col, ControlLabel, Checkbox } from 'react-bootstrap';
import Button from '../Button';
import services from 'components/HotelAmenities/services.json'

import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class AddAmenitiesModal extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      amenities: {},
      edited: false
    }
    if (props.amenities) {
      props.amenities.forEach(amenityName => {
        this.state.amenities[amenityName] = services[amenityName]
      })
    }
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

  onChange = (name) => {
    !this.state.edited && this.setState({ edited: true })
    if (!this.state.amenities[name]) {
      return this.state.amenities[name] = services[name]
    }
    return delete this.state.amenities[name]
  }

  _renderCheckedService (serviceName, i) {
    return (
      <Checkbox defaultChecked inline onChange={() => this.onChange(serviceName)} key={i}>
        { serviceName }
      </Checkbox>
    )
  }

  _renderUncheckedService (serviceName, i) {
    return (
      <Checkbox inline onChange={() => this.onChange(serviceName)} key={i}>
        { serviceName }
      </Checkbox>
    )
  }

  body () {
    const { amenities } = this.props
    return (
      <Modal.Body>
        { Object.keys(services).map((serviceKey, i) => this.state.amenities[serviceKey] ? this._renderCheckedService(serviceKey, i) : this._renderUncheckedService(serviceKey, i)) }
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

  hide = () => {
    if (this.state.edited) {
      const listOfAmenities = Object.keys(this.state.amenities)
      this.props.updateAmenities(listOfAmenities)
    }
    this.props.displayAmenitiesModal(false)
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

export default AddAmenitiesModal;
