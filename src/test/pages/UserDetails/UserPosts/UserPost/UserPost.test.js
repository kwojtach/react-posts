import React from 'react';
import {UserPost} from '../../../../../pages/UserDetails/UserPosts/UserPost/UserPost';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

describe('<UserPost>', () => {
  let props;
  let shallowedUserPost;
  const userPost = () => {
    if (!shallowedUserPost) {
      shallowedUserPost = shallow(
        <UserPost {...props} />
      );
    }
    return shallowedUserPost;
  };

  beforeEach(() => {
    props = {
      loadingDeleting: undefined,
      deleteUserPost: undefined,
      deletingPostId: undefined,
      post: {
        id: 1,
        title: 'Post title',
        body: 'Post body'
      },
      location: {
        pathname: 'posts',
        state: { userName: 'Chris' }
      }
    };
    shallowedUserPost = undefined;
  });

  it('should render a "div" with "FontAwesomeIcon" and "span" with post\'s title', () => {
    const wrappingDiv = userPost().find('div').first().children().find('div');

    expect(wrappingDiv.containsMatchingElement(<div><FontAwesomeIcon/><span>Post title</span></div>)).to.equal(true);
  });

  it('should render a "Link" with "FontAwesomeIcon"', () => {
    const link = userPost().find(Link);

    expect(link.containsMatchingElement(<Link><FontAwesomeIcon/></Link>)).to.equal(true);
  });

  it('should render a "Link" with adequate pathname', () => {
    const link = userPost().find(Link);

    expect(link.props().to.pathname).to.equal('posts/1');
  });

  it('should render a "span" with "Deleting..." when deleting a post', () => {
    props.loadingDeleting = true;
    props.deletingPostId = 1;

    expect(userPost().find('span').contains(<span>Deleting...</span>)).to.equal(true)
  });

  it('should call "deleteUserPost" when "FontAwesomeIcon" was clicked', () => {
    const mockOnClick = sinon.spy();
    props.deleteUserPost = mockOnClick;
    userPost().find(FontAwesomeIcon).first().simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });
});