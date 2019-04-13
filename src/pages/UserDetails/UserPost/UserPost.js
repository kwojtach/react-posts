import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';

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
        <Tooltip background={'#333'} color={'#fff'} content={(<h4>Delete post</h4>)}>
          <FontAwesomeIcon
            className={disableLink ? classes.DisabledLink : ''}
            onClick={() => props.deleteUserPost(props.post.id)}
            icon="trash-alt" size="2x" />
        </Tooltip>
          <Tooltip background={'#333'} color={'#fff'} content={(<h4>{title}</h4>)}>
            <span>{title}</span>
          </Tooltip>
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