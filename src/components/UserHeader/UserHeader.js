import React             from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { withRouter }    from 'react-router-dom';

import classes from './UserHeader.module.scss';

const UserHeader = props => {
  const {
    postDetails,
    loadingDeleting,
    buttonAction,
    history: { goBack },
    location:{state: { userName }}
  } = props;

  return (
    <div className={classes.UserHeader}>
      <p onClick={goBack}>
        <FontAwesomeIcon icon="arrow-left" size="3x" />
        <span>Back</span>
      </p>
      <h2>{userName}</h2>

      {postDetails ?
        <>{loadingDeleting ?
          <span style={{fontSize: '1.5rem'}}>
            Deleting...
          </span>
          : <FontAwesomeIcon onClick={buttonAction} icon="times-circle" size="3x" />}</>
          : <FontAwesomeIcon onClick={buttonAction} icon="plus-circle"  size="3x" />
      }
    </div>
  )
};

export default withRouter(UserHeader);




