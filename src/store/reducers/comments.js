import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  CLEAR_COMMENTS_LOADED,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL
} from '../actions/actionTypes';

const initialState = {
  comments: [],
  loadingComments: false,
  commentsLoaded: false,
  loadingAddingComment: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_COMMENTS_START):
      return {
        ...state,
        loadingComments: true
      };
    case (FETCH_COMMENTS_SUCCESS):
      return {
        ...state,
        comments: [...action.comments],
        loadingComments: false,
        commentsLoaded: true
      };
    case (FETCH_COMMENTS_FAIL):
      return {
        ...state,
        loadingComments: false,
      };
    case (CLEAR_COMMENTS_LOADED):
      return {
        ...state,
        commentsLoaded: false
      };
    case (ADD_COMMENT_START):
      return {
        ...state,
        loadingAddingComment: true
      };
    case (ADD_COMMENT_SUCCESS):
      return {
        ...state,
        comments: [action.comment, ...state.comments],
        loadingAddingComment: false
      };
    case (ADD_COMMENT_FAIL):
      return {
        ...state,
        loadingAddingComment: false,
      };
    default:
      return state
  }
};

export default reducer;