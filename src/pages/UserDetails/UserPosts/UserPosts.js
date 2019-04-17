import React from 'react';

import UserPost from './UserPost/UserPost';

const UserPosts = props => {
  const {
    posts,
    deleteUserPost,
    loadingDeleting,
    deletingPostId
  } = props;

  return (
    posts.map( post => (
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
