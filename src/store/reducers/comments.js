// @flow

import {
  FETCH_COMMENTS,
  CLEAR_COMMENTS_LOADED,
  ADD_COMMENT
} from '../actions/actionTypes';

import type {CommentProps} from '../../types/components';
import type {Action} from '../../types/actions';

type State = {
  +comments: Array<CommentProps>,
  +loadingComments: boolean,
  +commentsLoaded: boolean,
  +loadingAddingComment: boolean,
};

const initialState = {
  comments: [],
  loadingComments: false,
  commentsLoaded: false,
  loadingAddingComment: false,
};

const reducer = (state : State = initialState, action : Action) => {
  switch (action.type) {

    case (FETCH_COMMENTS.START):
      return {
        ...state,
        loadingComments: true
      };
    case (FETCH_COMMENTS.SUCCESS):
      return {
        ...state,
        comments: [...action.comments],
        loadingComments: false,
        commentsLoaded: true
      };
    case (FETCH_COMMENTS.FAIL):
      return {
        ...state,
        loadingComments: false,
      };
    case (CLEAR_COMMENTS_LOADED):
      return {
        ...state,
        commentsLoaded: false
      };

    case (ADD_COMMENT.START):
      return {
        ...state,
        loadingAddingComment: true
      };
    case (ADD_COMMENT.SUCCESS):
      return {
        ...state,
        comments: [action.comment, ...state.comments],
        loadingAddingComment: false
      };
    case (ADD_COMMENT.FAIL):
      return {
        ...state,
        loadingAddingComment: false,
      };

    default:
      return state
  }
};

export default reducer;
