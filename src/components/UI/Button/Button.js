import React from 'react';

import classes from './Button.module.scss';

const button = props => {
  return (
    <button
      className={classes.Button}
      onClick={props.clicked}
      type={props.type}
      disabled={props.disabled} >
      {props.children}
    </button>
  )
};

export default button;