// @flow

import React        from 'react';
import type {Node}  from 'react';
import type {CommentProps} from '../../../../types/components';

import Comment from './Comment/Comment';

const CommentsList = ({ comments } : {comments : Array<CommentProps>}) => (
  comments.map<Node>( comment => (
    <Comment
      key     ={comment.id}
      comment ={comment}
    />
  ))
);

export default CommentsList;