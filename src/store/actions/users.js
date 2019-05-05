// @flow

import api from '../../api';
import { usersEndpoint } from '../../constants/actionsEndPoints';
import {
  FETCH_USERS
} from './actionTypes';

import type {UserProps} from '../../types/components';
import type {Action, ThunkAction} from '../../types/actions';


/********** FETCH USERS ACTIONS **********/
export const fetchUsers = () : ThunkAction => dispatch => {
  dispatch(fetchUsersStart());
  api.get(usersEndpoint)
    .then(response => dispatch(fetchUsersSuccess(response.data)))
    .catch(error => dispatch(fetchUsersFail()));
};

export const fetchUsersStart = () : Action => ({type: FETCH_USERS.START});

export const fetchUsersSuccess = (users : Array<UserProps>) : Action => ({
  type: FETCH_USERS.SUCCESS,
  users: users
});

export const fetchUsersFail = () : Action => ({type: FETCH_USERS.FAIL});
/*****************************************/
