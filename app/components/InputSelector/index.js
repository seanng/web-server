/**
*
* InputSelector
*
*/

import React from 'react';
// import styled from 'styled-components';


const InputSelector = (props) =>(
  <div>
    <span
      onClick={props.incrementInput}
      className="glyphicon glyphicon-minus-sign"/>
    <input
      type="number" />
    <span
      onClick={props.decrementInput}
      className="glyphicon glyphicon-plus-sign"/>
  </div>
);

InputSelector.propTypes = {

};

export default InputSelector;
