import React from 'react';
import Backdrop from '../../../../../components/UI/Modal/Backdrop/Backdrop';

describe('<Backdrop>', () => {
  let props = {
    show: true
  };
  const wrapper = shallow(<Backdrop {...props}></Backdrop>);

  it('should render "div" when "show" prop is truish', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should does not render "div" when "show" prop is falsy', () => {
    wrapper.setProps({show: false});

    expect(wrapper.find('div')).to.have.length(0);
  });
});