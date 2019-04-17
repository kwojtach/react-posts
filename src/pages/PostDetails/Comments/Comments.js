import React from 'react';

import CommentsList from './CommentsList/CommentsList';
import Spinner      from '../../../components/UI/Spinner/Spinner';

const Comments = props => {
  const {
    comments,
    loadingComments,
    showComments
  } = props;

  return (
    <>
      {loadingComments  &&                 <Spinner>Loading comments...</Spinner>}
      {!loadingComments && showComments && <CommentsList comments={comments}/>}
    </>
  );
};

export default Comments;
