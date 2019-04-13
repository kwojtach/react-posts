import {
  FETCH_USER_POSTS_START,
  FETCH_USER_POSTS_SUCCESS,
  DELETE_USER_POST_START,
  DELETE_USER_POST_SUCCESS,
  ADD_USER_POST_START,
  ADD_USER_POST_SUCCESS
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
    case (ADD_USER_POST_START):
      return {
        ...state,
        loadingAddingPost: true
      };
    case (ADD_USER_POST_SUCCESS):
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loadingAddingPost: false,
      };
    default:
      return state
  }
};

export default reducer;