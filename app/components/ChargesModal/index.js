/**
*
* ChargesModal
*
*/

import React from 'react';
import { Modal, Form, FormControl } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ChargesModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { 
      serviceInput: '', 
      priceInput: '',
    };
  }

  hide() {
    this.props.hide();
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

  changeServiceInput(e) {
    this.setState({ serviceInput: e.target.value })
  }

  changePriceInput(e) {
    this.setState({ priceInput: e.target.value })
  }

  addCharge(e) {
    let charge = {
      stayId: this.props.stay.id,
      service: this.state.serviceInput,
      cost: this.state.priceInput,
      status: 'Unsettled',
      updated: false,
    }
    this.props.addCharge(charge);
    document.getElementById('serviceInput').value = '';
    document.getElementById('priceInput').value = '';
  }

  body() {
    return (
      <Modal.Body>
        <div className="row">
          <div className="col-xs-4">
            <FormattedMessage {...messages.client}/>:
          </div>
          <div className="col-xs-8">
            { this.props.stay.customerName }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <FormattedMessage {...messages.date} />:
          </div>
          <div className="col-xs-8">
            { this.props.stay.checkInTime }
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <FormControl
              id="serviceInput"
              type="text"
              placeholder="Service"
              onChange={ this.changeServiceInput.bind(this) }
            />
          </div>
          <div className="col-sm-3">
            { this.props.stay.currency }
            <FormControl
              type="number"
              id="priceInput"
              placeholder="Price"
              onChange={ this.changePriceInput.bind(this) }
            />
          </div>
          <div className="col-sm-3">
            <Button onClick={this.addCharge.bind(this)}>
              <FormattedMessage {...messages.add} />
            </Button>
          </div>
        </div>
        this is the body.
      </Modal.Body>
    )

  }

  footer() {
    const ModalFooter = styled.div`
      padding: 15px;
    `
    return (
      <ModalFooter>
        <div className="row">
          <div className="col-xs-6">
            <Button onClick={this.hide.bind(this)} wide>
              <FormattedMessage {...messages.cancel} />
            </Button>
          </div>
          <div className="col-xs-6">
            <Button wide>
              <FormattedMessage {...messages.save} />
            </Button>
          </div>
        </div>
      </ModalFooter>
    )
  }

  render() {
    console.log('the props in charges modal:', this.props)
    return (
      <Modal
        show={this.props.show}
        onHide={this.hide.bind(this)}
        bsSize={'lg'}
      >
        {this.header()}
        {this.body()}
        {this.footer()}
      </Modal>
    );
  }
}

ChargesModal.propTypes = {

};

export default ChargesModal;
