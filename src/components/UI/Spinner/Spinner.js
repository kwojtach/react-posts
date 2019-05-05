// @flow

import React       from 'react';
import type {Node} from 'react';

import classes from './Spinner.module.scss';

const Spinner = ({ children } : {children : Node}) => (
  <div className={classes.Spinner}>
    <div></div>
    <p>{children}</p>
  </div>
);

export default Spinner;
