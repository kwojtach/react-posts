import api from '../../api';
import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  CLEAR_COMMENTS_LOADED,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL
} from './actionTypes';

export const fetchComments = (postId, loaded) => {
  return dispatch => {
    if (!loaded) {
      dispatch(fetchCommentsStart());
      api.get(`/comments?postId=${postId}`)
        .then(response => dispatch(fetchCommentsSuccess(response.data)))
        .catch(error => dispatch(fetchCommentsFail()));
    }
  }
};

export const fetchCommentsStart = () => {
  return {
    type: FETCH_COMMENTS_START
  }
};

export const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    comments: comments,
  }
};

export const fetchCommentsFail = () => {
  return {
    type: FETCH_COMMENTS_FAIL
  }
};

export const clearCommentsLoaded = () => {
  return {
    type: CLEAR_COMMENTS_LOADED
  }
};

export const addComment = commentData => {
  return dispatch => {
    dispatch(addCommentStart());
    api.post('/comments', {...commentData})
      .then(response => dispatch(addCommentSuccess(response.data)))
      .catch(error => dispatch(addCommentFail()));
  }
};

export const addCommentStart = () => {
  return {
    type: ADD_COMMENT_START
  }
};

export const addCommentSuccess = comment => {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment: comment
  }
};

export const addCommentFail = () => {
  return {
    type: ADD_COMMENT_FAIL
  }
};