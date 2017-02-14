import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../Button'
import InputSelector from '../InputSelector'

export default class AvailabilityBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  increaseValue () {
    this.setState({value: this.state.value + 1})
  }

  decreaseValue () {
    this.setState({value: this.state.value - 1})
  }

  editValue(evt) {
    this.setState({value: (evt.target.value)*1})
  }

  updateAvailability() {
    this.props.updateAvailability(this.state.value)
  }

  render() {
    return (
      <div className="overviewBox">
        <FormattedMessage {...messages.header} />
        <InputSelector
          editValue={this.editValue.bind(this)}
          increaseValue={this.increaseValue.bind(this)}
          decreaseValue={this.decreaseValue.bind(this)}
          value={this.state.value}
        />
        <Button onClick={this.updateAvailability.bind(this)}>
          <FormattedMessage {...messages.update} />
        </Button>
      </div>
    )
  }

}