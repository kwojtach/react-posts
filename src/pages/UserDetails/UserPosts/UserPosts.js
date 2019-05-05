// @flow

import React       from 'react';
import type {Node} from 'react';
import type {UserPostProps} from '../../../types/components';

import UserPost from './UserPost/UserPost';

type Props = {
  posts: Array<UserPostProps>,
  deleteUserPost:  number => void,
  loadingDeleting: boolean,
  deletingPostId:  number
};

const UserPosts = (props : Props) => {
  const {
    posts,
    deleteUserPost,
    loadingDeleting,
    deletingPostId
  } = props;

  return (
    posts.map<Node>( post => (
      <UserPost
        key             ={post.id}
        post            ={post}
        deleteUserPost  ={deleteUserPost}
        loadingDeleting ={loadingDeleting}
        deletingPostId  ={deletingPostId}
      />
    ))
  )
};

export default UserPosts;
