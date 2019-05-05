import React from 'react';
import {Users} from '../../../pages/Users/Users';
import UsersList from '../../../pages/Users/UsersList/UsersList';
import Spinner from '../../../components/UI/Spinner/Spinner';

describe('<Users>', () => {
  let props;
  let shallowedUsers;
  const users = () => {
    if (!shallowedUsers) {
      shallowedUsers = shallow(
        <Users {...props} />
      );
    }
    return shallowedUsers;
  };

  beforeEach(() => {
    props = {
      fetchUsers: () => {},
      loadingUsers: undefined,
      users: undefined
    };
    shallowedUsers = undefined;
  });

  it('should call "fetchUsers" upon mounting', () => {
    const mockOnMount = sinon.spy();
    props.fetchUsers = mockOnMount;
    users();

    expect(mockOnMount.calledOnce).to.be.true;
  });

  it('should render "Spinner" with Loading users... text when "loadingUsers" is true', () => {
    props.loadingUsers = true;

    expect(users().contains(<Spinner>Loading users...</Spinner>)).to.equal(true);
  });

  it('should render "UsersList" when "loadingUsers" is false', () => {
    props.loadingUsers = false;
    props.users = [
      {},{}
    ];

    expect(users().find(UsersList)).to.have.length(1);
  });
});