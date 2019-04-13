import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS
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
    default:
      return state
  }
};

export default reducer;