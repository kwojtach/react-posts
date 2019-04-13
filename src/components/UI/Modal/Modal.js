import React from 'react';

import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.scss';

const modal = props => {
  const modalStyle = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  };

  return (
    <>
      <Backdrop
        show={props.show}
        close={props.closeModal} />
      <div
        className={classes.Modal}
        style={modalStyle} >
        {props.children}
      </div>
    </>
  )
};

export default modal;