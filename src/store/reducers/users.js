import {
  FETCH_USERS
} from '../actions/actionTypes';

const initialState = {
  users: [],
  userDetails: [],
  loadingUsers: false,
};

const reducer = (state = initialState, action) => {
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
