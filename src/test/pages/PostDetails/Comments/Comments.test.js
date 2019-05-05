import React from 'react';
import Comments from '../../../../pages/PostDetails/Comments/Comments';
import CommentsList from '../../../../pages/PostDetails/Comments/CommentsList/CommentsList';
import Spinner from '../../../../components/UI/Spinner/Spinner';

describe('<Comments>', () => {
  let props;
  let shallowedComments;
  const comments = () => {
    if (!shallowedComments) {
      shallowedComments = shallow(
        <Comments {...props} />
      );
    }
    return shallowedComments;
  };

  beforeEach(() => {
    props = {
      comments: [],
      loadingComments: undefined,
      showComments: undefined
    };
    shallowedComments = undefined;
  });

  it('should render "Spinner" when loading comments', () => {
    props.loadingComments = true;

    expect(comments().contains(<Spinner>Loading comments...</Spinner>)).to.equal(true);
  });

  it('should render "CommentsList" when comments are loaded and "showComments" prop is truish', () => {
    props.loadingComments = false;
    props.showComments = true;

    expect(comments().contains(<CommentsList comments={props.comments}/>)).to.equal(true);
  });
});