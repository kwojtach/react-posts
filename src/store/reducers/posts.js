// @flow

import {
  FETCH_USER_POSTS,
  DELETE_USER_POST,
  ADD_USER_POST
} from '../actions/actionTypes';

import type {UserPostProps} from '../../types/components';
import type {Action} from '../../types/actions';

type State = {
  +posts: Array<UserPostProps>,
  +deletingPostId: number | null,
  +loadingPosts: boolean,
  +loadingDeleting: boolean,
  +loadingAddingPost: boolean,
};

const initialState = {
  posts: [],
  deletingPostId: null,
  loadingPosts: false,
  loadingDeleting: false,
  loadingAddingPost: false,
};

const reducer = (state : State = initialState, action : Action) => {
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
      const newPosts : Array<UserPostProps> = state.posts.filter(post => post.id !== action.postId);
      return {
        ...state,
        posts: newPosts,
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
