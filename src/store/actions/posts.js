import api from '../../api';
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

export const fetchUserPosts = userId => {
  return dispatch => {
    dispatch(fetchUserPostsStart());
    api.get(`/posts?userId=${userId}`)
      .then(response => dispatch(fetchUserPostsSuccess(response.data)))
      .catch(error => dispatch(fetchUserPostsFail()));
  }
};

export const fetchUserPostsStart = () => {
  return {
    type: FETCH_USER_POSTS_START
  }
};

export const fetchUserPostsSuccess = posts => {
  return {
    type: FETCH_USER_POSTS_SUCCESS,
    posts: posts
  };
};

export const fetchUserPostsFail = () => {
  return {
    type: FETCH_USER_POSTS_FAIL
  }
};

export const deleteUserPost = (postId, changeRoute) => {
  return dispatch => {
    dispatch(deleteUserPostStart(postId));
    api.delete(`/posts/${postId}`)
      .then(response => {
        if (changeRoute) changeRoute();
        dispatch(deleteUserPostSuccess(postId));
      })
      .catch(error => dispatch(deleteUserPostFail()));
  }
};

export const deleteUserPostStart = postId => {
  return {
    type: DELETE_USER_POST_START,
    postId: postId
  }
};

export const deleteUserPostSuccess = postId => {
  return {
    type: DELETE_USER_POST_SUCCESS,
    postId: postId
  }
};

export const deleteUserPostFail = () => {
  return {
    type: DELETE_USER_POST_FAIL
  }
};


export const addUserPost = postData => {
  return dispatch => {
    dispatch(addUserPostStart());
    api.post('/posts', {...postData})
      .then(response => {
        dispatch(addUserPostSuccess(response.data))
      })
      .catch(error => dispatch(addUserPostFail()));
  }
};

export const addUserPostStart = () => {
  return {
    type: ADD_USER_POST_START
  }
};

export const addUserPostSuccess = post => {
  return {
    type: ADD_USER_POST_SUCCESS,
    post: post
  }
};

export const addUserPostFail = () => {
  return {
    type: ADD_USER_POST_FAIL
  }
};