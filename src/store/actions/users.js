import api from '../../api';
import { usersEndpoint } from '../../constants/actionsEndPoints';
import {
  FETCH_USERS
} from './actionTypes';



/********** FETCH USERS ACTIONS **********/
export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersStart());
  api.get(usersEndpoint)
    .then(response => dispatch(fetchUsersSuccess(response.data)))
    .catch(error => dispatch(fetchUsersFail()));
};

export const fetchUsersStart = () => ({type: FETCH_USERS.START});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS.SUCCESS,
  users: users
});

export const fetchUsersFail = () => ({type: FETCH_USERS.FAIL});
/*****************************************/
