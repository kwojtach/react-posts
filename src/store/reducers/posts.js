import {
  FETCH_USER_POSTS_START,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAIL,
  DELETE_USER_POST_START,
  DELETE_USER_POST_SUCCESS,
  DELETE_USER_POST_FAIL,
  ADD_USER_POST_START,
  ADD_USER_POST_SUCCESS,
  ADD_USER_POST_FAIL
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  deletingPostId: null,
  loadingPosts: false,
  loadingDeleting: false,
  loadingAddingPost: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_USER_POSTS_START):
      return {
        ...state,
        loadingPosts: true
      };
    case (FETCH_USER_POSTS_SUCCESS):
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.posts]
      };
    case (FETCH_USER_POSTS_FAIL):
      return {
        ...state,
        loadingPosts: false,
      };
    case (DELETE_USER_POST_START):
      return {
        ...state,
        deletingPostId: action.postId,
        loadingDeleting: true
      };
    case (DELETE_USER_POST_SUCCESS):
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
        loadingDeleting: false
      };
    case (DELETE_USER_POST_FAIL):
      return {
        ...state,
        loadingDeleting: false,
      };
    case (ADD_USER_POST_START):
      return {
        ...state,
        loadingAddingPost: true
      };
    case (ADD_USER_POST_SUCCESS):
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loadingAddingPost: false
      };
    case (ADD_USER_POST_FAIL):
      return {
        ...state,
        loadingAddingPost: false,
      };
    default:
      return state
  }
};

export default reducer;