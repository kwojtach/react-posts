import React from 'react';
import UsersList from '../../../../pages/Users/UsersList/UsersList';
import User from '../../../../pages/Users/UsersList/User/User';

describe('<UsersList>', () => {
  const props = {
    users: [
      {},
      {}
    ]
  };
  const wrapper = shallow(<UsersList {...props}/>);

  it('should render number of "User" components equal to "users" prop array\'s length', () => {
    expect(wrapper.find(User)).to.have.length(2);
  });
});