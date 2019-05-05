// @flow

import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = ({ show } : {show : boolean}) => ( show && <div className={classes.Backdrop}></div> );

export default Backdrop;
