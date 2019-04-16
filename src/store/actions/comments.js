import api from '../../api';
import { commentsEndpoint } from '../../constants/actionsEndPoints';
import {
  FETCH_COMMENTS,
  CLEAR_COMMENTS_LOADED,
  ADD_COMMENT
} from './actionTypes';



/********** FETCH COMMENTS ACTIONS **********/
export const fetchComments = (postId, loaded) => dispatch => {
  if (!loaded) {
    dispatch(fetchCommentsStart());
    api.get(`${commentsEndpoint}?postId=${postId}`)
      .then(response => dispatch(fetchCommentsSuccess(response.data)))
      .catch(error => dispatch(fetchCommentsFail()));
  }
};

export const fetchCommentsStart = () => ({type: FETCH_COMMENTS.START});

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS.SUCCESS,
  comments: comments,
});

export const fetchCommentsFail = () => ({type: FETCH_COMMENTS.FAIL});

export const clearCommentsLoaded = () => ({type: CLEAR_COMMENTS_LOADED});
/*******************************************/



/********** ADD COMMENT ACTIONS **********/
export const addComment = commentData => dispatch => {
  dispatch(addCommentStart());
  api.post(commentsEndpoint, {...commentData})
    .then(response => dispatch(addCommentSuccess(response.data)))
    .catch(error => dispatch(addCommentFail()));
};

export const addCommentStart = () => ({type: ADD_COMMENT.START});

export const addCommentSuccess = comment => ({
    type: ADD_COMMENT.SUCCESS,
    comment: comment
});

export const addCommentFail = () => ({type: ADD_COMMENT.FAIL});
/*****************************************/
