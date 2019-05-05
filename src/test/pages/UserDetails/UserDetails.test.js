import React from 'react';
import {UserDetails} from '../../../pages/UserDetails/UserDetails';
import UserPosts from '../../../pages/UserDetails/UserPosts/UserPosts';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Modal from '../../../components/UI/Modal/Modal';
import AddForm from '../../../components/AddForm/AddForm';

describe('<UserDetails>', () => {
  let props;
  let shallowedUserDetails;
  const usersDetails = () => {
    if (!shallowedUserDetails) {
      shallowedUserDetails = shallow(
        <UserDetails {...props} />
      );
    }
    return shallowedUserDetails;
  };

  beforeEach(() => {
    props = {
      fetchUserPosts: () => {},
      loadingPosts: undefined,
      posts: undefined,
      deleteUserPost: undefined,
      loadingDeleting: undefined,
      deletingPostId: undefined,
      addUserPost: undefined,
      match:{params:{ userId: undefined }},
      loadingAddingPost: undefined,
      location: {state: { userId: undefined }}
    };
    shallowedUserDetails = undefined;
  });

  it('should call "fetchUserPosts" upon mounting', () => {
    const mockOnMount = sinon.spy();
    props.fetchUserPosts = mockOnMount;
    usersDetails();

    expect(mockOnMount.calledOnce).to.be.true;
  });

  it('should render "Modal" with "AddForm" but does not show it', () => {
    expect(usersDetails().containsMatchingElement(<Modal show={false}><AddForm/></Modal>)).to.equal(true);
  });

  it('should change state "addingPost" to true and render "Modal" with "show" equals to true', () => {
    const userDetailsDiv = usersDetails();
    const mockOnClick = sinon.spy(userDetailsDiv.instance().onStartAddingPostHandler);
    mockOnClick();

    expect(userDetailsDiv.state().addingPost).to.equal(true);
    expect(userDetailsDiv.find(Modal).props().show).to.equal(true);
  });

  it('should always render "UserHeader"', () => {
    expect(usersDetails().text().includes('<withRouter(UserHeader) />')).to.equal(true);
  });

  it('should render "Spinner" with Loading posts... text when "loadingPosts" is true', () => {
    props.loadingPosts = true;

    expect(usersDetails().contains(<Spinner>Loading posts...</Spinner>)).to.equal(true);
  });

  it('should render "UserPosts" when "loadingPosts" is false', () => {
    props.loadingPosts = false;

    expect(usersDetails().find(UserPosts)).to.have.length(1);
  });
});