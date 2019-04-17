import React from 'react';

import { whiteButton } from '../../../styles/buttonStyle';
import classes         from './Button.module.scss';

const Button = props => (
  <button
    className ={classes.Button}
    style     ={props.whiteButton && whiteButton}
    onClick   ={props.onClick}
    type      ={props.type}
    disabled  ={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
