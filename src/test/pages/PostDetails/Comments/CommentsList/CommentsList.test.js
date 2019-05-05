import React from 'react';
import CommentsList from '../../../../../pages/PostDetails/Comments/CommentsList/CommentsList';
import Comment from '../../../../../pages/PostDetails/Comments/CommentsList/Comment/Comment';

describe('<CommentsList>', () => {
  const props = {
    comments: [
      {},
      {}
    ]
  };
  const wrapper = shallow(<CommentsList {...props}/>);

  it('should render number of "Comment" components equal to "comments" prop array\'s length', () => {
    expect(wrapper.find(Comment)).to.have.length(2);
  });
});