// @flow

import React       from 'react';
import type {Node} from 'react';

import { whiteButton } from '../../../styles/buttonStyle';
import classes         from './Button.module.scss';

type Props = {
  whiteButton?: any,
  type?:     string,
  onClick?:  Event => void,
  disabled?: boolean,
  children:  Node
};

const Button = (props : Props) => (
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
