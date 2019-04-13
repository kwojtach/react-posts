import React from 'react';

import Comment from './Comment/Comment';

const comments = props => {
  return (
    <>
      {props.comments.map( comment => (
        <Comment
          key={comment.id}
          comment={comment} />
      ))}
    </>
  );
};

export default comments;