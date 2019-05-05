// @flow

import api from '../../api';
import { commentsEndpoint } from '../../constants/actionsEndPoints';
import {
  FETCH_COMMENTS,
  CLEAR_COMMENTS_LOADED,
  ADD_COMMENT
} from './actionTypes';

import type {CommentProps} from '../../types/components';
import type {Action, ThunkAction} from '../../types/actions';


/********** FETCH COMMENTS ACTIONS **********/
export const fetchComments = (postId : number, loaded : boolean) : ThunkAction => dispatch => {
  if (!loaded) {
    dispatch(fetchCommentsStart());
    api.get(`${commentsEndpoint}?postId=${postId}`)
      .then(response => dispatch(fetchCommentsSuccess(response.data)))
      .catch(error => dispatch(fetchCommentsFail()));
  }
};

export const fetchCommentsStart = () : Action => ({type: FETCH_COMMENTS.START});

export const fetchCommentsSuccess = (comments : Array<CommentProps>) : Action => ({
  type: FETCH_COMMENTS.SUCCESS,
  comments: comments,
});

export const fetchCommentsFail = () : Action => ({type: FETCH_COMMENTS.FAIL});

export const clearCommentsLoaded = () : Action => ({type: CLEAR_COMMENTS_LOADED});
/*******************************************/



/********** ADD COMMENT ACTIONS **********/
export const addComment = (commentData : CommentProps) : ThunkAction => dispatch => {
  dispatch(addCommentStart());
  api.post(commentsEndpoint, {...commentData})
    .then(response => dispatch(addCommentSuccess(response.data)))
    .catch(error => dispatch(addCommentFail()));
};

export const addCommentStart = () : Action => ({type: ADD_COMMENT.START});

export const addCommentSuccess = (comment : CommentProps) : Action => ({
    type: ADD_COMMENT.SUCCESS,
    comment: comment
});

export const addCommentFail = () : Action => ({type: ADD_COMMENT.FAIL});
/*****************************************/
