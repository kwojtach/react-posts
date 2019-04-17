import React    from 'react';
import { Link } from 'react-router-dom';

import Button  from '../../../../components/UI/Button/Button';
import classes from './User.module.scss';

const User = ({ user }) => {
  return (
    <div className={classes.User}>
      <h2>{user.name}</h2>

      <p>Contact:</p>
      <ul>
        <li>email <a href={`mailto:${user.email}`}>{user.email}</a></li>
        <li>phone: {user.phone}</li>
        <li>website: <a href={`https://${user.website}`}>{user.website}</a></li>
      </ul>

      <p>Company:</p>
      <ul>
        <li>{user.company.name}</li>
        <li>{user.company.catchPhrase}</li>
        <li>{user.company.bs}</li>
      </ul>

      <Link to={{
          pathname: `/user/${user.id}`,
          state: {
            userId:   user.id,
            userName: user.name
          }
        }} >
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default User;
