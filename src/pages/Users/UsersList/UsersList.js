import React from 'react';

import User from './User/User';

const UsersList = ({ users }) => (
  users.map( user => (
    <User
      key  ={user.id}
      user ={user}
    />
  ))
);

export default UsersList;
