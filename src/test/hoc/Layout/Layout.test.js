import React from 'react';
import Layout from '../../../hoc/Layout/Layout';
import { ToastContainer } from 'react-toastify';

describe('<Layout>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout>content</Layout>)
  });

  it('should render "ToastContainer"', () => {
    expect(wrapper.find(ToastContainer)).to.have.length(1);
  });

  it('should render "main" with content inside', () => {
    expect(wrapper.contains(<main>content</main>)).to.equal(true);
  });
});