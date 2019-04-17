import React from 'react';

import Comment from './Comment/Comment';

const CommentsList = ({ comments }) => (
  comments.map( comment => (
    <Comment
      key     ={comment.id}
      comment ={comment}
    />
  ))
);

export default CommentsList;