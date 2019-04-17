import React, { Component } from 'react';
import { connect }          from 'react-redux';

import UsersList from './UsersList/UsersList';
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

    return (
      <div className={classes.Users}>
        {!loadingUsers ?
          <UsersList users={users}/>
          : <Spinner>Loading users...</Spinner>}
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
