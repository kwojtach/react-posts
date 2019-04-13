import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from '../actions/actionTypes';

const initialState = {
  users: [],
  userDetails: [],
  loadingUsers: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_USERS_START):
      return {
        ...state,
        loadingUsers: true
      };
    case (FETCH_USERS_SUCCESS):
      return {
        ...state,
        users: action.users,
        loadingUsers: false
      };
    case (FETCH_USERS_FAIL):
      return {
        ...state,
        loadingUsers: false,
      };
    default:
      return state
  }
};

export default reducer;