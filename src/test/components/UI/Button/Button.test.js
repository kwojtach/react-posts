import React from 'react';
import Button from '../../../../components/UI/Button/Button';

describe('<Button>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>some button text</Button>);
  });
  it('should render "button" html element with text', () => {
    expect(wrapper.contains(<button>some button text</button>)).to.equal(true);
  });

  it('should have children as props passed in', () => {
    expect(wrapper.props().children).to.equal('some button text');
  });

  it('should have been disabled when trueish value is passed through "disabled" prop', () => {
    const wrapper = shallow(<Button disabled={true}>some button text</Button>);

    expect(wrapper.find('button').is('[disabled]')).to.equal(true)
  });

  it('should call "onClick" function when was clicked', () => {
    const mockOnClick = sinon.spy();
    const wrapper = shallow(<Button onClick={mockOnClick}>some button text</Button>);
    wrapper.find('button').simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });
});