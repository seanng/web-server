/**
*
* HotelDescription
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Glyphicon, FormControl } from  'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { toggleHotelDescriptionMode } from 'containers/HotelProfile/actions'
import { getHotelDescriptionMode } from 'containers/HotelProfile/selectors'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class HotelDescription extends React.Component {

  _editHotelProfile = (e) => {
    console.log('editing.', e.target.value)
    this.props.editHotelProfile({ description: e.target.value })
  }

  _toggleEditMode = (e) => {
    this.props.toggleEditMode();
  }

  _formattedDescription () {
    const { description } = this.props
    return (
      <div>
        { description }
      </div>
    )
  }

  _editingDescription () {
    const { description } = this.props
    return (
      <div>
        <FormControl 
          componentClass="textarea" 
          placeholder="Add a description for your hotel!"
          value={description}
          onChange={this._editHotelProfile}
          id='hotelDescriptionInput'
        />
      </div>
    )
  }

  render () {
    const glyphicon = this.props.isEditingMode ? 'glyphicon glyphicon-floppy-disk' : 'glyphicon glyphicon-pencil';
    return (
      <div className="row">
        <div className="col-xs-11">
          { this.props.isEditingMode ? this._editingDescription() : this._formattedDescription() }
        </div>
        <div className="col-xs-1">
          <Glyphicon glyph={glyphicon} onClick={this._toggleEditMode} />
        </div>
      </div>
    );
  }
}

export default HotelDescription;
