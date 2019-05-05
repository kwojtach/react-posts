import React from 'react';
import Comment from '../../../../../../pages/PostDetails/Comments/CommentsList/Comment/Comment';

describe('<Comment>', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      comment: {
        name: 'Chris',
        email: 'chris@gmail.com',
        body: 'My comment is nice'
      }
    };

    wrapper = shallow(<Comment {...props}/>);
  });

  it('should render a "div" with a comment', () => {
    const commentDiv = <div>
      <span>
        <h3>Chris</h3>
        <a href="mailto:chris@gmail.com">chris@gmail.com</a>
      </span>
      <p>My comment is nice</p>
    </div>;

    expect(wrapper.contains(commentDiv)).to.equal(true);
  });
});