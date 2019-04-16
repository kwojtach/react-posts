import React from 'react';

import Backdrop       from './Backdrop/Backdrop';
import { modalStyle } from '../../../styles/modalStyle';
import classes        from './Modal.module.scss';

const Modal = props => {
  return (
    <>
      <Backdrop show={props.show} />
      <div
        className ={classes.Modal}
        style     ={modalStyle(props.show)}
      >
        {props.children}
      </div>
    </>
  )
};

export default Modal;
