// @flow

import React       from 'react';
import type {Node} from 'react';

import Backdrop       from './Backdrop/Backdrop';
import { modalStyle } from '../../../styles/modalStyle';
import classes        from './Modal.module.scss';

type Props = {
  show:     boolean,
  children: Node
};

const Modal = (props : Props) => (
  <>
    <Backdrop show={props.show} />
    <div
      className ={classes.Modal}
      style     ={modalStyle(props.show)}
    >
      {props.children}
    </div>
  </>
);

export default Modal;
