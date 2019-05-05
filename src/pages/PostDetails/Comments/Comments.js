// @flow

import React from 'react';
import type {CommentProps} from '../../../types/components';

import CommentsList from './CommentsList/CommentsList';
import Spinner      from '../../../components/UI/Spinner/Spinner';

type Props = {
  comments: Array<CommentProps>,
  loadingComments: boolean,
  showComments: boolean
};

const Comments = (props : Props) => {
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
