import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import classes from './UserHeader.module.scss';
import Tooltip from 'react-tooltip-lite';

const userHeader = props => {
  return (
    <div className={classes.UserHeader}>
      <p onClick={() => props.history.goBack()}>
        <FontAwesomeIcon icon="arrow-left" size="3x" />
        <span>Back</span>
      </p>
      <h2>{props.location.state.userName}</h2>
      {props.postDetails ?
        <Tooltip background={'#333'} color={'#fff'} content={(<h4>Delete post</h4>)}>
          <FontAwesomeIcon onClick={props.buttonAction} icon="times-circle" size="3x" />
        </Tooltip>
        : <Tooltip background={'#333'} color={'#fff'} content={(<h4>Add post</h4>)}>
          <FontAwesomeIcon onClick={props.buttonAction} icon="plus-circle" size="3x" />
        </Tooltip>
      }
    </div>
  )
};

export default withRouter(userHeader);




