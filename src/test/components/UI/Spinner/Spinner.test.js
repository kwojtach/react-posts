import React from 'react';
import Spinner from '../../../../components/UI/Spinner/Spinner';

describe('<Spinner>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner>loading...</Spinner>)
  });

  it('should render "div" which contains an empty "div" and "p" with text', () => {
    expect(wrapper.contains(<div><div></div><p>loading...</p></div>)).to.equal(true);
  });
});