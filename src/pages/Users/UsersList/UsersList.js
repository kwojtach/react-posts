// @flow

import React       from 'react';
import type {Node} from 'react';
import type {UserProps} from '../../../types/components';

import User from './User/User';

const UsersList = ({ users } : {users : Array<UserProps>}) => (
  users.map<Node>( user => (
    <User
      key  ={user.id}
      user ={user}
    />
  ))
);

export default UsersList;
