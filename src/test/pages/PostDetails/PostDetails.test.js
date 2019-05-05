import React from 'react';
import {PostDetails} from '../../../pages/PostDetails/PostDetails';
import Comments from '../../../pages/PostDetails/Comments/Comments';
import Modal from '../../../components/UI/Modal/Modal';
import AddForm from '../../../components/AddForm/AddForm';
import Button from '../../../components/UI/Button/Button';

describe('<PostDetails>', () => {
  let props;
  let shallowedPostDetails;
  const postDetails = () => {
    if (!shallowedPostDetails) {
      shallowedPostDetails = shallow(
        <PostDetails {...props} />
      );
    }
    return shallowedPostDetails;
  };

  beforeEach(() => {
    props = {
      fetchComments: () => {},
      commentsLoaded: undefined,
      clearCommentsLoaded: undefined,
      addComment: undefined,
      loadingAddingComment: undefined,
      deleteUserPost: undefined,
      loadingDeleting: undefined,
      loadingComments: undefined,
      comments: undefined,
      match:    {params:{ postId: undefined }},
      location: {state: { postTitle: 'Post title', postText: 'Post text' }},
      history:  {goBack: undefined}
    };
    shallowedPostDetails = undefined;
  });

  it('should change state "showComments" to true when "commentsLoaded" changed', () => {
    const postDetailsDiv = postDetails();
    postDetailsDiv.setProps({commentsLoaded: true});

    expect(postDetailsDiv.state().showComments).to.equal(true);
  });

  it('should always render "Button" with Show comments text', () => {
    expect(postDetails().containsMatchingElement(<Button>Show comments</Button>)).to.equal(true);
  });

  it ('should render "Button" with Hide comments text and "Button" with Add comment text when state "showComments" is true', () => {
    const postDetailsDiv = postDetails();
    postDetailsDiv.setState({showComments: true});

    expect(postDetailsDiv.containsMatchingElement(<Button>Hide comments</Button>)).to.equal(true);
    expect(postDetailsDiv.containsMatchingElement(<Button>Add comment</Button>)).to.equal(true);
  });

  it('should change state "showComments" to true when "onShowCommentsHandler" was called', () => {
    props.commentsLoaded = true;
    const postDetailsDiv = postDetails();
    const mockOnClick = sinon.spy(postDetailsDiv.instance().onShowCommentsHandler);
    mockOnClick();

    expect(postDetailsDiv.state().showComments).to.equal(true);
  });

  it('should render "Modal" with "AddForm" but does not show it', () => {
    expect(postDetails().containsMatchingElement(<Modal show={false}><AddForm/></Modal>)).to.equal(true);
  });

  it('should change state "addingComment" to true and render "Modal" with "show" equals to true', () => {
    const postDetailsDiv = postDetails();
    const mockOnClick = sinon.spy(postDetailsDiv.instance().onStartAddingCommentHandler);
    mockOnClick();

    expect(postDetailsDiv.state().addingComment).to.equal(true);
    expect(postDetailsDiv.find(Modal).props().show).to.equal(true);
  });

  it('should always render "UserHeader"', () => {
    expect(postDetails().text().includes('<withRouter(UserHeader) />')).to.equal(true);
  });

  it('should always render "div" with "h2" and "p" with post title and post text', () => {
    expect(postDetails().contains(<div><h2>Post title</h2><p>Post text</p></div>)).to.equal(true);
  });

  it('should render "Comments" with "showComments" set to false', () => {
    expect(postDetails().containsMatchingElement(<Comments showComments={false}/>)).to.equal(true);
  });
});