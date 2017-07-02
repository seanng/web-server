import React from 'react';
import { Editor, EditorState } from 'draft-js';
// import styled from 'styled-components';
import { Glyphicon, FormControl } from  'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { toggleHotelPoliciesMode } from 'containers/HotelProfile/actions'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class HotelPolicies extends React.Component {

  _editHotelProfile = (e) => {
    this.props.editHotelProfile({ policies: e.target.value })
  }

  _toggleEditMode = (e) => {
    this.props.toggleEditMode();
  }

  _formattedPolicies () {
    const { policies } = this.props
    console.log('the policies in this props. ', policies)
    return (
      <div>
        { policies }
      </div>
    )
  }

  _editingPolicies () {
    const { policies } = this.props
    return (
      <div>
        <FormControl
          componentClass="textarea" 
          rows='12'
          placeholder="There are no policies set at the moment."
          value={policies}
          onChange={this._editHotelProfile}
          id='hotelPoliciesInput'
        />
      </div>
    )
  }

  render () {
    const glyphicon = this.props.isEditingMode ? 'glyphicon glyphicon-floppy-disk' : 'glyphicon glyphicon-pencil';
    return (
      <div className="row">
        <div className="col-xs-11">
          { this.props.isEditingMode ? this._editingPolicies() : this._formattedPolicies() }
        </div>
        <div className="col-xs-1">
          <Glyphicon glyph={glyphicon} onClick={this._toggleEditMode} />
        </div>
      </div>
    );
  }
}

export default HotelPolicies;
