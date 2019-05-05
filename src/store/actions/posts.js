// @flow

import api from '../../api';
import { postsEndpoint } from '../../constants/actionsEndPoints';
import {
  FETCH_USER_POSTS,
  DELETE_USER_POST,
  ADD_USER_POST
} from '../actions/actionTypes';

import type {UserPostProps} from '../../types/components';
import type {Action, ThunkAction} from '../../types/actions';


/********** FETCH USER POSTS ACTIONS **********/
export const fetchUserPosts = (userId : number) : ThunkAction => dispatch => {
  dispatch(fetchUserPostsStart());
  api.get(`${postsEndpoint}?userId=${userId}`)
    .then(response => dispatch(fetchUserPostsSuccess(response.data)))
    .catch(error => dispatch(fetchUserPostsFail()));
};

export const fetchUserPostsStart = () : Action => ({type: FETCH_USER_POSTS.START});

export const fetchUserPostsSuccess = (posts : Array<UserPostProps>) : Action => ({
  type: FETCH_USER_POSTS.SUCCESS,
  posts: posts
});

export const fetchUserPostsFail = () : Action => ({type: FETCH_USER_POSTS.FAIL});
/**********************************************/



/********** DELETE USER POST ACTIONS **********/
export const deleteUserPost = (postId : number, changeRoute : Function) : ThunkAction => dispatch => {
  dispatch(deleteUserPostStart(postId));
  api.delete(`${postsEndpoint}/${postId}`)
    .then(response => {
      if (changeRoute) changeRoute();
      dispatch(deleteUserPostSuccess(postId));
    })
    .catch(error => dispatch(deleteUserPostFail()));
};

export const deleteUserPostStart = (postId : number) : Action => ({
  type: DELETE_USER_POST.START,
  postId: postId
});

export const deleteUserPostSuccess = (postId : number) : Action => ({
  type: DELETE_USER_POST.SUCCESS,
  postId: postId
});

export const deleteUserPostFail = () : Action => ({type: DELETE_USER_POST.FAIL});
/**********************************************/



/********** ADD USER POST ACTIONS **********/
export const addUserPost = (postData : UserPostProps) : ThunkAction => dispatch => {
  dispatch(addUserPostStart());
  api.post(postsEndpoint, {...postData})
    .then(response => dispatch(addUserPostSuccess(response.data)))
    .catch(error => dispatch(addUserPostFail()));
};

export const addUserPostStart = () : Action => ({type: ADD_USER_POST.START});

export const addUserPostSuccess = (post : UserPostProps) : Action => ({
  type: ADD_USER_POST.SUCCESS,
  post: post
});

export const addUserPostFail = () : Action => ({type: ADD_USER_POST.FAIL});
/*******************************************/
