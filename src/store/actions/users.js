import api from '../../api';
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS
} from './actionTypes';

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart());
    api.get('/users')
      .then(response => {
        dispatch(fetchUsersSuccess(response.data))
      })
      .catch(error => console.error(error));
  };
};

export const fetchUsersStart = () => {
  return {
    type: FETCH_USERS_START,
  }
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    users: users
  };
};