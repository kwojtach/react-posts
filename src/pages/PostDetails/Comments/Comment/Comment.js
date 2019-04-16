import React from 'react';

import classes from './Comment.module.scss';

const Comment = ({ comment }) => {
  return (
    <div className={classes.Comment}>
      <span>
        <h3>{comment.name}</h3>
        <a href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </span>

      <p>{comment.body}</p>
    </div>
  )
};

export default Comment;
