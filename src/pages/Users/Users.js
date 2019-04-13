import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User/User';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchUsers } from '../../store/actions/users';
import withError from '../../hoc/withError/withError';

class Users extends Component {
  componentDidMount() {
    this.props.onFetchUsers();
  }

  render() {
    let users = <Spinner>Loading users...</Spinner>;
    if (!this.props.loadingUsers) {
      users = this.props.users.map( user => (
        <User
          key={user.id}
          user={user} />
      ))
    }

    return (
      <>
        {users}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loadingUsers: state.users.loadingUsers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withError(Users));