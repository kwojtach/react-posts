// @flow

import {
  FETCH_USERS
} from '../actions/actionTypes';

import type {UserProps} from '../../types/components';
import type {Action} from '../../types/actions';

type State = {
  +users: Array<UserProps>,
  +loadingUsers: boolean,
};

const initialState = {
  users: [],
  loadingUsers: false,
};

const reducer = (state : State = initialState, action : Action) => {
  switch (action.type) {

    case (FETCH_USERS.START):
      return {
        ...state,
        loadingUsers: true
      };
    case (FETCH_USERS.SUCCESS):
      return {
        ...state,
        users: action.users,
        loadingUsers: false
      };
    case (FETCH_USERS.FAIL):
      return {
        ...state,
        loadingUsers: false,
      };

    default:
      return state
  }
};

export default reducer;
