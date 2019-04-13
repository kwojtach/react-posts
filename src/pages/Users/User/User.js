import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import classes from './User.module.scss';

const user = props => {
  return (
    <div className={classes.User}>
      <h2>{props.user.name}</h2>

      <p>Contact:</p>
      <ul>
        <li>email <a href={`mailto:${props.user.email}`}>{props.user.email}</a></li>
        <li>phone: {props.user.phone}</li>
        <li>website: <a href={`https://${props.user.website}`}>{props.user.website}</a></li>
      </ul>

      <p>Company:</p>
      <ul>
        <li>{props.user.company.name}</li>
        <li>{props.user.company.catchPhrase}</li>
        <li>{props.user.company.bs}</li>
      </ul>

      <Link to={{
          pathname: `/user/${props.user.id}`,
          state: {
            userId: props.user.id,
            userName: props.user.name
          }
        }} >
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default user;