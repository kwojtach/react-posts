import React from 'react';

import classes from './Comment.module.scss';

const comment = props => {
  return (
    <div className={classes.Comment}>
      <span>
        <h3>{props.comment.name}</h3>
        <a href={`mailto:${props.comment.email}`}>{props.comment.email}</a>
      </span>
      <p>{props.comment.body}</p>
    </div>
  )
};

export default comment;