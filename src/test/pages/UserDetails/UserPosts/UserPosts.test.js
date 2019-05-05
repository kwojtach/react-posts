import React from 'react';
import UserPosts from '../../../../pages/UserDetails/UserPosts/UserPosts';

describe('<UserPosts>', () => {
  const props = {
    posts: [
      {},
      {}
    ],
    deleteUserPost: () => {},
    loadingDeleting: false,
    deletingPostId: 1
  };
  const wrapper = shallow(<UserPosts {...props}/>);

  it('should render number of "UserPost" components equal to "posts" prop array\'s length', () => {
    expect(wrapper.first().text()).to.equal('<withRouter(UserPost) />');
    expect(wrapper).to.have.length(2);
  });
});