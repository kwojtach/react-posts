import React from 'react';
import Modal from '../../../../components/UI/Modal/Modal';
import Backdrop from '../../../../components/UI/Modal/Backdrop/Backdrop';

describe('<Modal>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Modal show={true}>some modal text</Modal>);
  });

  it('should render "Backdrop" component with "show" prop passed to it', () => {
    expect(wrapper.find(Backdrop)).to.have.length(1);
  });

  it('should render "div" with props children', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
});