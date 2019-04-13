import React from 'react';

import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.scss';

const modal = props => {
  const modalStyle = {
    transform: props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -100vh)',
    opacity: props.show ? '1' : '0'
  };

  return (
    <>
      <Backdrop show={props.show} />
      <div
        className={classes.Modal}
        style={modalStyle} >
        {props.children}
      </div>
    </>
  )
};

export default modal;