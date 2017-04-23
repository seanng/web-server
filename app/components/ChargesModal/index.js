/**
*
* ChargesModal
*
*/

import React from 'react';
import { Modal, Form, FormControl } from 'react-bootstrap';
import Button from '../Button';
import ChargesList from '../ChargesList';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

class ChargesModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  header() {
    const H4 = styled.h4`
      font-size: 1.5em;
    `
    return (
      <Modal.Header closeButton>
        <H4>
          <FormattedMessage 
            {...messages.header} 
            values={{
              name: this.props.stay.customerName, 
              date: this.props.stay.checkInTime
            }} 
          />&nbsp;
        </H4>
      </Modal.Header>
    )
  }

  addCharge(e) {
    let charge = {
      stayId: this.props.stay.id,
      service: document.getElementById('serviceInput').value,
      charge: (document.getElementById('priceInput').value*1).toFixed(2),
      status: 'Unsettled',
      updated: false,
    }
    this.props.addCharge(charge);
    document.getElementById('serviceInput').value = '';
    document.getElementById('priceInput').value = '';
  }

  saveCharges(e) {
    let newCharges = this.props.charges.filter(charge => charge.updated === false);
    let newTotal = newCharges.reduce((prev, current) => (prev*1 + current.charge*1).toFixed(2), this.props.stay.totalCharge*1)
    let stayId = this.props.stay.id;
    this.props.saveCharges(newCharges, newTotal, stayId);
  }

  body() {
    const Upper = styled.div`
      padding-bottom: 20px;
      border-bottom: 1px dotted silver;
    `

    const UpperBody = (
      <Upper>
        <div className="row">
          <div className="col-sm-7">
            <FormControl
              id="serviceInput"
              type="text"
              placeholder={ this.props.intl.formatMessage(messages.service) }
            />
          </div>
          <div className="col-sm-3">
            <FormControl
              type="number"
              id="priceInput"
              placeholder={ this.props.intl.formatMessage(messages.price, { currency: this.props.stay.currency }) }
            />
          </div>
          <div className="col-sm-2">
            <Button onClick={this.addCharge.bind(this)} wide>
              <FormattedMessage {...messages.add} />
            </Button>
          </div>
        </div>
      </Upper>
    )
    
    return (
      <Modal.Body>
        { UpperBody }
        <ChargesList charges={this.props.charges} currency={this.props.stay.currency} />
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
            <Button onClick={this.props.hide.bind(this)} wide>
              <FormattedMessage {...messages.cancel} />
            </Button>
          </div>
          <div className="col-xs-6">
            <Button onClick={this.saveCharges.bind(this)} wide>
              <FormattedMessage {...messages.save} />
            </Button>
          </div>
        </div>
      </ModalFooter>
    )
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.hide.bind(this)}
        bsSize={'lg'}
      >
        { this.header() }
        { this.body() }
        { this.footer() }
      </Modal>
    );
  }
}

ChargesModal.propTypes = {

};

export default injectIntl(ChargesModal);
