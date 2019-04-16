import React from 'react';

import Comment from './Comment/Comment';
import Spinner from '../../../components/UI/Spinner/Spinner';

const Comments = (props) => {
  const {
    comments,
    loadingComments,
    showComments
  } = props;

  let commentsList;

  if (loadingComments) {
    commentsList = <Spinner>Loading comments...</Spinner>;
  } else if (!loadingComments && showComments) {
    commentsList = comments.map( comment => (
      <Comment
        key     ={comment.id}
        comment ={comment} />
    ))
  }

  return (
    <>
      {commentsList}
    </>
  );
};

export default Comments;
