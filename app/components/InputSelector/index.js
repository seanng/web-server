/**
*
* InputSelector
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


function InputSelector(props) {
  return (
    <div>
    <span
      onClick={props.decreaseValue}
      className="glyphicon glyphicon-minus-sign"
    />
    <input
      type="number"
      value={props.value}
      onChange={props.editValue}
    />
    <span
      onClick={props.increaseValue}
      className="glyphicon glyphicon-plus-sign"
    />
    </div>
  );
}

InputSelector.propTypes = {
  decreaseValue: PropTypes.func,
  increaseValue: PropTypes.func,
  editValue: PropTypes.func,
  value: PropTypes.number
};

export default InputSelector;
