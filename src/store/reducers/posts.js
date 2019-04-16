import {
  FETCH_USER_POSTS,
  DELETE_USER_POST,
  ADD_USER_POST
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

    case (FETCH_USER_POSTS.START):
      return {
        ...state,
        loadingPosts: true
      };
    case (FETCH_USER_POSTS.SUCCESS):
      return {
        ...state,
        loadingPosts: false,
        posts: [...action.posts]
      };
    case (FETCH_USER_POSTS.FAIL):
      return {
        ...state,
        loadingPosts: false,
      };

    case (DELETE_USER_POST.START):
      return {
        ...state,
        deletingPostId: action.postId,
        loadingDeleting: true
      };
    case (DELETE_USER_POST.SUCCESS):
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
        loadingDeleting: false
      };
    case (DELETE_USER_POST.FAIL):
      return {
        ...state,
        loadingDeleting: false,
      };

    case (ADD_USER_POST.START):
      return {
        ...state,
        loadingAddingPost: true
      };
    case (ADD_USER_POST.SUCCESS):
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loadingAddingPost: false
      };
    case (ADD_USER_POST.FAIL):
      return {
        ...state,
        loadingAddingPost: false,
      };

    default:
      return state
  }
};

export default reducer;
