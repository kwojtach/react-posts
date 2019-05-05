// @flow

import React                from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { Link }             from 'react-router-dom';
import { withRouter }       from 'react-router-dom';
import type {UserPostProps} from '../../../../types/components';
import type {Location} from 'react-router-dom';

import classes from './UserPost.module.scss';

type Props = {
  loadingDeleting : boolean,
  deleteUserPost: number => void,
  deletingPostId: number,
  post: UserPostProps,
  location : Location
};

export const UserPost = (props : Props) => {
  const {
    loadingDeleting,
    deleteUserPost,
    deletingPostId,
    post,
    location:{state:{ userName }},
    location:       { pathname }
  } = props;

  let title,
      disableLink;

  if (loadingDeleting && deletingPostId === post.id) {
    disableLink = true;
    title = 'Deleting...';
  } else {
    title = post.title;
  }

  return (
    <div className={classes.UserPost}>
      <div>
        <FontAwesomeIcon
          className ={disableLink ? classes.DisabledLink : ''}
          onClick   ={() => deleteUserPost(post.id)}
          icon      ="trash-alt"
          size      ="2x"
        />
        <span>{title}</span>
      </div>

      <Link className={disableLink ? classes.DisabledLink : ''}
            to={{
              pathname: `${pathname}/${post.id}`,
              state: {
                userName:  userName,
                postTitle: post.title,
                postText:  post.body
              }
            }} >
        <FontAwesomeIcon icon="arrow-right" size="2x" />
      </Link>
    </div>
  )
};

export default withRouter(UserPost);
