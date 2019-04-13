import React from 'react';
import classes from './UserHeader.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const userHeader = props => {
  return (
    <div className={classes.UserHeader}>
      <p onClick={() => props.onGoBack()}>
        <FontAwesomeIcon icon="arrow-left" size="3x" />
        <span>Back</span>
      </p>
      <h2>{props.userName}</h2>
      {props.postDetails ?
        <FontAwesomeIcon onClick={props.buttonAction} icon="times-circle" size="3x" />
        : <FontAwesomeIcon onClick={props.buttonAction} icon="plus-circle" size="3x" />
      }
    </div>
  )
};

export default userHeader;