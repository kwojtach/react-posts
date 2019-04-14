import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import classes from './UserPost.module.scss';

const userPost = props => {
  let title,
      disableLink;
  if (props.loadingDeleting && props.deletingPostId === props.post.id) {
    disableLink = true;
    title = 'Deleting...';
  } else {
    title = props.post.title;
  }

  return (
    <div className={classes.UserPost}>
      <div>
        <FontAwesomeIcon
          className={disableLink ? classes.DisabledLink : ''}
          onClick={() => props.deleteUserPost(props.post.id)}
          icon="trash-alt" size="2x" />
        <span>{title}</span>
      </div>
      <Link className={disableLink ? classes.DisabledLink : ''}
            to={{
              pathname: `${props.location.pathname}/${props.post.id}`,
              state: {
                userName: props.location.state.userName,
                postTitle: props.post.title,
                postText: props.post.body
              }
            }} >
        <FontAwesomeIcon icon="arrow-right" size="2x" />
      </Link>
    </div>
  )
};

export default withRouter(userPost);