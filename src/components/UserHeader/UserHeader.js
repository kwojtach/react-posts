import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import classes from './UserHeader.module.scss';

const userHeader = props => {
  return (
    <div className={classes.UserHeader}>
      <p onClick={() => props.history.goBack()}>
        <FontAwesomeIcon icon="arrow-left" size="3x" />
        <span>Back</span>
      </p>
      <h2>{props.location.state.userName}</h2>
      {props.postDetails ?
        <FontAwesomeIcon onClick={props.buttonAction} icon="times-circle" size="3x" />
        : <FontAwesomeIcon onClick={props.buttonAction} icon="plus-circle" size="3x" />
      }
    </div>
  )
};

export default withRouter(userHeader);