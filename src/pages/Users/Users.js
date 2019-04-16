import React, { Component } from 'react';
import { connect }          from 'react-redux';

import User      from './User/User';
import Spinner   from '../../components/UI/Spinner/Spinner';
import withError from '../../hoc/withError/withError';
import classes   from './Users.module.scss';

import { fetchUsers } from '../../store/actions/users';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const {
      loadingUsers,
      users,
    } = this.props;

    let usersList = <Spinner>Loading users...</Spinner>;

    if (!loadingUsers) {
      usersList = users.map( user => (
        <User
          key  ={user.id}
          user ={user}
        />
      ))
    }

    return (
      <div className={classes.Users}>
        {usersList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users:        state.users.users,
    loadingUsers: state.users.loadingUsers
  }
};

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(withError(Users));
