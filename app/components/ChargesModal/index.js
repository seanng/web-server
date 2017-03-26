/**
*
* ChargesModal
*
*/

import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ChargesModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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

  body() {
    console.log('the charges are here', this.props.data)
    return (
      <Modal.Body>
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
              <FormattedMessage {...messages.submit} />
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
