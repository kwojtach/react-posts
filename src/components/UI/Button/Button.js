import React from 'react';

import classes from './Button.module.scss';

const button = props => {
  let buttonStyle;
  if (props.whiteButton) {
    buttonStyle = {
      backgroundColor: '#fff',
      color: '#3498db',
      border: '1px solid #3498db'
    }
  }

  return (
    <button
      className={classes.Button}
      style={buttonStyle}
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled} >
      {props.children}
    </button>
  )
};

export default button;